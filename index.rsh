'reach 0.1';

export const main = Reach.App(() => {
	const Deployer = Participant('Deployer', {
		getTokens: Array(Token, 2),
		swapReady: Fun([Token], Null),
		showTok: Fun([Token], Null),
	});

	const supply = UInt.max;

	const tokenSupplyObj = Struct([
		['secondSupply', UInt],
		['firstSupply', UInt],
	]);
	const SwapperApi = API('Swapper', {
		deposit: Fun([tokenSupplyObj], Bytes(5)),
		// withdraw: Fun([singleTokenSupplyObj],Null ),
		// swapAtoB: Fun([singleTokenSupplyObj], Null),
		// swapBtoA: Fun([singleTokenSupplyObj], Null)
	});
	init();
	Deployer.only(() => {
		const [tokAID, tokBID] = declassify(interact.getTokens);
		assume(tokAID != tokBID, 'I assumed');
	});
	Deployer.publish(tokAID, tokBID);

	const lpTok = new Token({ supply });

	const singleTokenSupplyObj = Struct([
		['firstTok', Token],
		['secondTok', Token],
	]);

	Deployer.interact.swapReady(lpTok);
	Deployer.interact.showTok(lpTok);
	// commit();
	// Deployer.publish();
	const [LPtot, Abal, Bbal] = parallelReduce([0, 0, 0])
		.paySpec([tokAID, tokBID])
		.invariant(balance(lpTok) >= 0)
		.while(balance(lpTok) > 0)
		.api_(SwapperApi.deposit, (obj) => {
			const tokenStruct = tokenSupplyObj.fromObject(obj);
			const tokenObj = tokenSupplyObj.toObject(tokenStruct);
			// check(tokenObj.firstSupply != 0);
			// check(tokenObj.secondSupply != 0);
			const Ain = tokenObj.firstSupply;
			const Bin = tokenObj.secondSupply;
			return [
				[
					0,
					...[
						[Ain, tokAID],
						[Bin, tokBID],
					],
				],
				(alert) => {
					// check(Abal != 0);
					// check(Bbal != 0);
					const AbalPrime = Abal + Ain;
					const BbalPrime = Bbal + Bin;
					const denominator = AbalPrime * BbalPrime;
					const z = muldiv(Ain, Bin, denominator);
					// const LPout = LPtot == 0 ? sqrt(Ain * Bin) : (z / 100) * LPtot;
					const LPout = LPtot == 0 ? sqrt(Ain * Bin) : muldiv(z, LPtot, 100);
					const LPtotPrime = LPtot + LPout;
					alert('pays!');
					// transfer(LPout, lpTok).to(this);
					return [LPtotPrime, AbalPrime, BbalPrime];
				},
			];

			// check(Ain > 0, "tokAsupply insufficient")
			// check(Bin > 0, "tokBsupply insufficient")
		});
	transfer(balance(lpTok), lpTok).to(Deployer);
	transfer(balance(tokAID), tokAID).to(Deployer);
	transfer(balance(tokBID), tokBID).to(Deployer);
	transfer(balance()).to(Deployer);

	lpTok.burn();
	lpTok.destroy();
	// tokAID.burn();
	// tokAID.destroy();
	// tokBID.burn();
	// tokBID.destroy();

	commit();

	exit();
});
