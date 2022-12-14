import { loadStdlib } from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';

const stdlib = loadStdlib();
const startingBalance = stdlib.parseCurrency(1000);

const accCreator = await stdlib.newTestAccount(startingBalance);

const tokA = await stdlib.launchToken(accCreator, 'tokenA', 'Atok');
const tokB = await stdlib.launchToken(accCreator, 'gil', 'Btok');

const swappers = [];

const startSwappers = async (lpTok) => {
	const runSwapper = async (swapper) => {
		console.log('swappers running');
		// creating test account for api
		const acc = await stdlib.newTestAccount(startingBalance);
		acc.setDebugLabel(swapper);

		// opting in to tokens
		await acc.tokenAccept(tokA.id);
		await acc.tokenAccept(tokB.id);
		// paying account tokens
		await tokA.mint(acc, 1000);
		await tokB.mint(acc, 1000);
		swappers.push(acc);
		// attaching api users to deployers contract
		const ctc = acc.contract(backend, ctcDeployer.getInfo());

		console.log(
			`${swapper} current bal of tokA is ${await acc.balanceOf(tokA.id)}`
		);
		console.log(
			`${swapper} current bal of tokB is ${await acc.balanceOf(tokB.id)}`
		);

		try {
			// depositing tokens to liquidity pool
			const res = await ctc.apis.Swapper.deposit({
				firstTok: tokA,
				secondTok: tokB,
				firstSupply: 10,
				secondSupply: 20,
			});
			console.log(res);
			console.log(
				`${swapper} post bal of tokA is ${await acc.balanceOf(tokA.id)}`
			);
			console.log(
				`${swapper} post bal of tokB is ${await acc.balanceOf(tokB.id)}`
			);
		} catch (err) {
			console.log('Error in deposit func');
		}

		//         const tokenSupplyObj = Struct([
		//         ['firstTok', Token],
		//         ['secondTok', Token],
		//         ['secondSupply', UInt],
		//         ['firstSupply', UInt]
		// ]
		//     )
		// try {
		//     // withdrawing tokens from liquidity pool
		//     await ctc.apis.Swapper.withdraw([{tok:lpTokId,supply:20}])
		//     console.log(`${swapper} current bal of tokA is ${await acc.balanceOf(tokA)}`)
		//     console.log(`${swapper} current bal of tokB is ${await acc.balanceOf(tokB)}`)

		// } catch (err) {
		//     console.log('Error in withdraw func')
		// }
		// try {
		//     // swapping tokenA for token B
		//     await ctc.apis.Swapper.swapAtoB([{tok: tokA, supply:10}])
		//     console.log(`${swapper} current bal of tokA is ${await acc.balanceOf(tokA)}`)
		//     console.log(`${swapper} current bal of tokB is ${await acc.balanceOf(tokB)}`)

		// } catch (err) {
		//     console.log('Error in AtoB func')
		// }
		// try {
		//     // swapping token B to token A
		//     await ctc.apis.Swapper.swapBtoA([{tok:tokB,supply:20}])
		//     console.log(`${swapper} current bal of tokA is ${await acc.balanceOf(tokA)}`)
		//     console.log(`${swapper} current bal of tokB is ${await acc.balanceOf(tokB)}`)

		// } catch (err) {
		//     console.log('Error in BtoA func')
		// }
	};
	runSwapper('Alice');
	runSwapper('Bob');
	runSwapper('Charlie');
};

const accDeployer = await stdlib.newTestAccount(startingBalance);
const ctcDeployer = accDeployer.contract(backend);
console.log(ctcDeployer);
await ctcDeployer.participants.Deployer(
	{
		showTok: (tok) => {
			console.log(tok);
		},
		getTokens: [tokA, tokB],
		swapReady: (lpTokId) => {
			startSwappers(lpTokId);
		},
	},
	backend
);
