'reach 0.1';

export const main = Reach.App(() => {
	const Deployer = Participant('Deployer', {
		getTokens: Array(Token, 2),
		swapReady: Fun([Token], Null),
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

	const lpTok = Token.new({
		supply,
	});

	const singleTokenSupplyObj = Struct([
		['firstTok', Token],
		['secondTok', Token],
	]);

	Deployer.interact.swapReady(lpTok);
	commit();
	Deployer.publish();
	const [LPtot, Abal, Bbal] = parallelReduce([supply, 0, 0])
		.paySpec([tokAID, tokBID])
		.invariant(true)
		.while(true)
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
					const LPout = LPtot == 0 ? sqrt(Ain * Bin) : (z / 100) * LPtot;
					const LPtotPrime = LPtot + LPout;
					alert('pays!');
					transfer(LPout, lpTok).to(this);
					return [LPtotPrime, AbalPrime, BbalPrime];
				},
			];

			// check(Ain > 0, "tokAsupply insufficient")
			// check(Bin > 0, "tokBsupply insufficient")
		});
	commit();
	exit();
});
