// Automatically generated with Reach 0.1.11 (27cb9643)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (27cb9643)';
export const _backendVersion = 19;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1],
      4: [ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Deployer(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Deployer expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Deployer expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Array(ctc0, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'));
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Struct([['secondSupply', ctc3], ['firstSupply', ctc3]]);
  const ctc5 = stdlib.T_Tuple([ctc4]);
  const ctc6 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc7 = stdlib.T_Address;
  
  
  const v260 = stdlib.protect(ctc1, interact.getTokens, 'for Deployer\'s interact field getTokens');
  const v261 = v260[stdlib.checkedBigNumberify('./index.rsh:4:37:application', stdlib.UInt_max, '0')];
  const v262 = v260[stdlib.checkedBigNumberify('./index.rsh:4:37:application', stdlib.UInt_max, '1')];
  
  const v267 = stdlib.tokenEq(v261, v262);
  const v268 = v267 ? false : true;
  stdlib.assert(v268, {
    at: './index.rsh:24:23:application',
    fs: ['at ./index.rsh:22:22:application call to [unknown function] (defined at: ./index.rsh:22:26:function exp)'],
    msg: 'I assumed',
    who: 'Deployer'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v261, v262],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:26:18:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:26:18:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v270, v271], secs: v273, time: v272, didSend: v37, from: v269 } = txn1;
      
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v270
        });
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v271
        });
      ;
      const v284 = '                                ';
      const v285 = '        ';
      const v286 = '                                                                                                ';
      const v288 = stdlib.simTokenNew(sim_r, v284, v285, v286, v284, stdlib.UInt_max, undefined /* Nothing */, getSimTokCtr());
      const v289 = await txn1.getOutput('internal', 'v288', ctc0, v288);
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v270, v271], secs: v273, time: v272, didSend: v37, from: v269 } = txn1;
  const v282 = stdlib.tokenEq(v271, v270);
  const v283 = v282 ? false : true;
  stdlib.assert(v283, {
    at: './index.rsh:26:18:dot',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Deployer'
    });
  ;
  ;
  ;
  const v284 = '                                ';
  const v285 = '        ';
  const v286 = '                                                                                                ';
  const v288 = undefined /* TokenNew */;
  const v289 = await txn1.getOutput('internal', 'v288', ctc0, v288);
  const v290 = [v270, v271];
  const v291 = await stdlib.Array_asyncReduce([v290], false, async([v293], v292, v294) => {
    const v295 = stdlib.tokenEq(v289, v293);
    const v297 = v292 ? v292 : v295;
    
    return v297;})
  const v298 = v291 ? false : true;
  stdlib.assert(v298, {
    at: './index.rsh:28:32:application',
    fs: [],
    msg: 'New token is unique',
    who: 'Deployer'
    });
  const v303 = stdlib.tokenEq(v289, v270);
  const v305 = stdlib.tokenEq(v289, v271);
  const v306 = v305 ? false : true;
  const v307 = v303 ? false : v306;
  stdlib.assert(v307, {
    at: './index.rsh:28:32:application',
    fs: [],
    msg: 'non-network tokens distinct',
    who: 'Deployer'
    });
  stdlib.protect(ctc2, await interact.swapReady(v289), {
    at: './index.rsh:37:36:application',
    fs: ['at ./index.rsh:37:36:application call to [unknown function] (defined at: ./index.rsh:37:36:function exp)', 'at ./index.rsh:37:36:application call to "liftedInteract" (defined at: ./index.rsh:37:36:application)'],
    msg: 'swapReady',
    who: 'Deployer'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v269, v270, v271],
    evt_cnt: 0,
    funcNum: 1,
    lct: v272,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:39:18:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v317, time: v316, didSend: v69, from: v315 } = txn2;
      
      ;
      const v322 = v316;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: v271
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: v270
          })
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc7, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v317, time: v316, didSend: v69, from: v315 } = txn2;
  ;
  const v318 = stdlib.addressEq(v269, v315);
  stdlib.assert(v318, {
    at: './index.rsh:39:18:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  let v322 = v316;
  
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v367], secs: v369, time: v368, didSend: v175, from: v366 } = txn3;
    undefined /* setApiDetails */;
    const v371 = v367[stdlib.checkedBigNumberify('./index.rsh:44:22:spread', stdlib.UInt_max, '0')];
    const v372 = v371.secondSupply;
    const v373 = v371.firstSupply;
    ;
    ;
    ;
    const v421 = 'pays!';
    await txn3.getOutput('Swapper_deposit', 'v421', ctc6, v421);
    const cv322 = v368;
    
    v322 = cv322;
    
    continue;
    
    }
  return;
  
  
  
  
  };
export async function _Swapper_deposit4(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Swapper_deposit4 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Swapper_deposit4 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Struct([['secondSupply', ctc1], ['firstSupply', ctc1]]);
  const ctc3 = stdlib.T_Tuple([ctc2]);
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc5 = stdlib.T_Null;
  
  
  const [v270, v271] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0, ctc0]);
  const v333 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:44:49:application call to [unknown function] (defined at: ./index.rsh:44:49:function exp)', 'at ./index.rsh:44:49:application call to [unknown function] (defined at: ./index.rsh:44:49:function exp)'],
    msg: 'in',
    who: 'Swapper_deposit'
    });
  const v334 = v333[stdlib.checkedBigNumberify('./index.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v335 = v334.secondSupply;
  const v336 = v334.firstSupply;
  
  const txn1 = await (ctc.sendrecv({
    args: [v270, v271, v333],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:51:41:decimal', stdlib.UInt_max, '0'), [[v336, v270], [v335, v271]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v367], secs: v369, time: v368, didSend: v175, from: v366 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Swapper_deposit"
        });
      const v371 = v367[stdlib.checkedBigNumberify('./index.rsh:44:22:spread', stdlib.UInt_max, '0')];
      const v372 = v371.secondSupply;
      const v373 = v371.firstSupply;
      ;
      sim_r.txns.push({
        amt: v373,
        kind: 'to',
        tok: v270
        });
      sim_r.txns.push({
        amt: v372,
        kind: 'to',
        tok: v271
        });
      const v421 = 'pays!';
      const v422 = await txn1.getOutput('Swapper_deposit', 'v421', ctc4, v421);
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v367], secs: v369, time: v368, didSend: v175, from: v366 } = txn1;
  undefined /* setApiDetails */;
  const v371 = v367[stdlib.checkedBigNumberify('./index.rsh:44:22:spread', stdlib.UInt_max, '0')];
  const v372 = v371.secondSupply;
  const v373 = v371.firstSupply;
  ;
  ;
  ;
  const v421 = 'pays!';
  const v422 = await txn1.getOutput('Swapper_deposit', 'v421', ctc4, v421);
  if (v175) {
    stdlib.protect(ctc5, await interact.out(v367, v422), {
      at: './index.rsh:44:23:application',
      fs: ['at ./index.rsh:44:23:application call to [unknown function] (defined at: ./index.rsh:44:23:function exp)', 'at ./index.rsh:64:46:application call to "alert" (defined at: ./index.rsh:57:41:function exp)', 'at ./index.rsh:57:41:application call to [unknown function] (defined at: ./index.rsh:57:41:function exp)'],
      msg: 'out',
      who: 'Swapper_deposit'
      });
    }
  else {
    }
  
  return;
  
  
  
  };
export async function Swapper_deposit(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Swapper_deposit expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Swapper_deposit expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 4) {return _Swapper_deposit4(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Swapper_deposit((uint64,uint64))byte[5]`],
    pure: [],
    sigs: [`Swapper_deposit((uint64,uint64))byte[5]`]
    },
  appApproval: `BiAHAAEIBKCNBgMCJgIBAAAiNQAxGEECXilkSSJbNQEkWzUCNhoAF0lBABQiNQQjNQaBioal2w4SRDYaAUIAHjYaAhc1BDYaAzYaARdJIwxAAKZJIQUMQABpIQUSRCU0ARJENARJIhJMNAISEUQoZEk1A0kiWzX/JFs1/kk1BTX9gAT33qhTNP1QsDT9Nfw0/CRbNP+IAhU0/CJbNP6IAgyADQAAAAAAAAGlcGF5cyGwgAVwYXlzITUHNP80/jIGQgFGIxJEIzQBEkQ0BEkiEkw0AhIRRChkNQOABJqLkXSwNANXACAxABJENAOBIFs0A4EoWzIGQgEQSCEEiAGWIjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/JFs1/oAErNEfwzT/FlA0/hZQsDT+NP8TRCEEiAFgsSKyASKyEiWyEDIKshQ0/7IRsyEEiAFIsSKyASKyEiWyEDIKshQ0/rIRszIDNf0hBIgBLLEisgEhBbIQgf///////////wGyIoEGsiMkr7IlNP2yJoFgr7InNP2yKDIKsimztDw1/IAIAAAAAAAAASA0/BZQsDT8NfsiNfoiNfk0/xY0/hZQJDT5CyRYFzX4NPs0+BI0+klNNfo0+SMISTX5IQYMQP/YNPoURDT7NP8TNPs0/hMQRDEANP8WUDT+FlAoSwFXADBnSCM1ATIGNQJCADo1/zX+STX9FjT+FlAoSwFXABBnSCU1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEIQYxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJRJEOBFPAhJEOBISRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 48,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v270",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v271",
                "type": "address"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "address payable",
                "name": "v270",
                "type": "address"
              },
              {
                "internalType": "address payable",
                "name": "v271",
                "type": "address"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "secondSupply",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "firstSupply",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T12",
                    "name": "elem0",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T13",
                "name": "v367",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "v0",
        "type": "address"
      }
    ],
    "name": "_reach_oe_v288",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "bytes5",
            "name": "elem0",
            "type": "bytes5"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v421",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "secondSupply",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "firstSupply",
            "type": "uint256"
          }
        ],
        "internalType": "struct T12",
        "name": "_a0",
        "type": "tuple"
      }
    ],
    "name": "Swapper_deposit",
    "outputs": [
      {
        "components": [
          {
            "internalType": "bytes5",
            "name": "elem0",
            "type": "bytes5"
          }
        ],
        "internalType": "struct T11",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "components": [
                      {
                        "internalType": "uint256",
                        "name": "secondSupply",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "firstSupply",
                        "type": "uint256"
                      }
                    ],
                    "internalType": "struct T12",
                    "name": "elem0",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T13",
                "name": "v367",
                "type": "tuple"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162002465380380620024658339810160408190526200002691620005d6565b6000805543600355620000386200042b565b6040805133815283516020808301919091528085015180516001600160a01b039081168486015291015116606082015290517f7ef2bbfb2ea024d26186c284a79cb0c0f7ce810d4811d99d5fe360d4533f50fb9181900360800190a16020808301518051910151620000ca916001600160a01b03918216911614620000bf576001620000c2565b60005b600762000401565b620000d83415600862000401565b80516000908190526020808301518290526040808401805184905280518301849052518101929092528251518251918201520160408051601f1981840301815290829052602083810151516001600160c01b031916908301529060280160408051808303601f1901815282825284820151805160208083015192850151908601919091529284015260608301919091529060800160408051808303601f19018152828252855151602084015291016040516020818303038152906040526000196012604051620001a890620004b0565b620001b9969594939291906200069b565b604051809103906000f080158015620001d6573d6000803e3d6000fd5b506001600160a01b031660608201819052608082018190526040519081527f08f2c249de264824f36607f1a90698846c42031a0650b7b71c5e6a6040c861869060200160405180910390a1602082810180515160a0840180516001600160a01b039283169052915183015191519116910152600060e082018190525b6002811015620002d9578160a00151816002811062000275576200027562000706565b60200201516001600160a01b031661010083015260e0820151620002b7578161010001516001600160a01b031682608001516001600160a01b031614620002bd565b8160e001515b151560e083015280620002d0816200071c565b91505062000252565b5060e0810151151560c082018190526200030590620002fa576001620002fd565b60005b600962000401565b620003708260200151600001516001600160a01b031682608001516001600160a01b03161462000365578260200151602001516001600160a01b031682608001516001600160a01b0316146200035d57600162000368565b600062000368565b60005b600a62000401565b604080516060808201835260006020808401828152848601838152338087528984018051516001600160a01b039081168552905185015181168352600195869055439095558751938401529051831695820195909552935116908301529060800160405160208183030381529060405260029080519060200190620003f7929190620004be565b5050505062000783565b81620004275760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b604080516101408101909152600061012082019081528190815260408051602081810190925260008152910190815260408051606081018252600080825260208281018290529282015291019081526000602082018190526040820152606001620004956200054d565b81526000602082018190526040820181905260609091015290565b61108780620013de83390190565b828054620004cc9062000746565b90600052602060002090601f016020900481019282620004f057600085556200053b565b82601f106200050b57805160ff19168380011785556200053b565b828001600101855582156200053b579182015b828111156200053b5782518255916020019190600101906200051e565b50620005499291506200056b565b5090565b60405180604001604052806002906020820280368337509192915050565b5b808211156200054957600081556001016200056c565b604080519081016001600160401b0381118282101715620005b357634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b0381168114620005d157600080fd5b919050565b60008183036060811215620005ea57600080fd5b620005f462000582565b835181526040601f19830112156200060b57600080fd5b6200061562000582565b91506200062560208501620005b9565b82526200063560408501620005b9565b6020830152816020820152809250505092915050565b6000815180845260005b81811015620006735760208185018101518683018201520162000655565b8181111562000686576000602083870101525b50601f01601f19169290920160200192915050565b60c081526000620006b060c08301896200064b565b8281036020840152620006c481896200064b565b90508281036040840152620006da81886200064b565b90508281036060840152620006f081876200064b565b6080840195909552505060a00152949350505050565b634e487b7160e01b600052603260045260246000fd5b60006000198214156200073f57634e487b7160e01b600052601160045260246000fd5b5060010190565b600181811c908216806200075b57607f821691505b602082108114156200077d57634e487b7160e01b600052602260045260246000fd5b50919050565b610c4b80620007936000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780632c10a15914610083578063832307571461009657806383edbc92146100ab578063ab53f2c6146100be578063bca5e800146100e157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d6100913660046108f0565b61010d565b3480156100a257600080fd5b50600154610070565b61005d6100b9366004610908565b61013e565b3480156100ca57600080fd5b506100d361016b565b60405161007a929190610946565b6100f46100ef366004610a18565b610208565b60405190516001600160d81b031916815260200161007a565b60408051808201909152600060208201908152815261013a61013436849003840184610a45565b82610255565b5050565b60408051808201909152600060208201908152815261013a61016536849003840184610a7d565b826103fc565b60006060600054600280805461018090610ae0565b80601f01602080910402602001604051908101604052809291908181526020018280546101ac90610ae0565b80156101f95780601f106101ce576101008083540402835291602001916101f9565b820191906000526020600020905b8154815290600101906020018083116101dc57829003601f168201915b50505050509050915091509091565b60408051602081019091526000815261021f610812565b60208101515183905261024360408051808201909152600060208201908152815290565b61024d82826103fc565b519392505050565b610265600160005414600d610647565b815161028090158061027957508251600154145b600e610647565b60008080556002805461029290610ae0565b80601f01602080910402602001604051908101604052809291908181526020018280546102be90610ae0565b801561030b5780601f106102e05761010080835404028352916020019161030b565b820191906000526020600020905b8154815290600101906020018083116102ee57829003601f168201915b50505050508060200190518101906103239190610b31565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a161037a3415600b610647565b8051610392906001600160a01b03163314600c610647565b6103c560408051608081018252600081830181815260608301829052825282516020818101909452908152909182015290565b60208083015182516001600160a01b039182169052604084015183519116908201528101514390526103f68161066d565b50505050565b61040c6004600054146012610647565b815161042790158061042057508251600154145b6013610647565b60008080556002805461043990610ae0565b80601f016020809104026020016040519081016040528092919081815260200182805461046590610ae0565b80156104b25780601f10610487576101008083540402835291602001916104b2565b820191906000526020600020905b81548152906001019060200180831161049557829003601f168201915b50505050508060200190518101906104ca9190610bab565b90506104e760408051808201909152600060208201908152815290565b6040805133815285516020808301919091528087015151518051838501520151606082015290517f3bf325b86d6f19a787a121c0532cdad6f6f9701a2ec747b7be3c056669125db29181900360800190a16105443415600f610647565b81516020808601515151015161056791610560913391906106e0565b6010610647565b6020808301519085015151515161058b91610584913391906106e0565b6011610647565b805164706179732160d81b9052805160405190516001600160d81b03191681527f4d9d4acdc548fc475d12e0ed751c9c916ad3f530c6a4b6d6d5557d1fcba10eeb9060200160405180910390a18051835261060f60408051608081018252600081830181815260608301829052825282516020818101909452908152909182015290565b825181516001600160a01b03918216905260208085015183519216918101919091528101514390526106408161066d565b5050505050565b8161013a5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b604080518082018252600080825260208083018281528551516001600160a01b03908116808652875184015182168352600490945543600155855180840194909452905116828501528351808303850181526060909201909352805191926106db926002929091019061082c565b505050565b60006106ee838530856106f8565b90505b9392505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161075f91610bdc565b60006040518083038185875af1925050503d806000811461079c576040519150601f19603f3d011682016040523d82523d6000602084013e6107a1565b606091505b50915091506107b2828260016107d2565b50808060200190518101906107c79190610bf8565b979650505050505050565b606083156107e15750816106f1565b8251156107f15782518084602001fd5b60405163100960cb60e01b815260048101839052602401610664565b905290565b60405180604001604052806000815260200161080d6108b0565b82805461083890610ae0565b90600052602060002090601f01602090048101928261085a57600085556108a0565b82601f1061087357805160ff19168380011785556108a0565b828001600101855582156108a0579182015b828111156108a0578251825591602001919060010190610885565b506108ac9291506108db565b5090565b604051806020016040528061080d604080516060810182526000602082018181529282015290815290565b5b808211156108ac57600081556001016108dc565b60006040828403121561090257600080fd5b50919050565b60006060828403121561090257600080fd5b60005b8381101561093557818101518382015260200161091d565b838111156103f65750506000910152565b828152604060208201526000825180604084015261096b81606085016020870161091a565b601f01601f1916919091016060019392505050565b6040805190810167ffffffffffffffff811182821017156109b157634e487b7160e01b600052604160045260246000fd5b60405290565b6040516020810167ffffffffffffffff811182821017156109b157634e487b7160e01b600052604160045260246000fd5b6000604082840312156109fa57600080fd5b610a02610980565b9050813581526020820135602082015292915050565b600060408284031215610a2a57600080fd5b6106f183836109e8565b8015158114610a4257600080fd5b50565b600060408284031215610a5757600080fd5b610a5f610980565b823581526020830135610a7181610a34565b60208201529392505050565b60008183036060811215610a9057600080fd5b610a98610980565b833581526040601f1983011215610aae57600080fd5b610ab66109b7565b9150610ac06109b7565b610acd86602087016109e8565b8152825260208101919091529392505050565b600181811c90821680610af457607f821691505b6020821081141561090257634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610b2c57600080fd5b919050565b600060608284031215610b4357600080fd5b6040516060810181811067ffffffffffffffff82111715610b7457634e487b7160e01b600052604160045260246000fd5b604052610b8083610b15565b8152610b8e60208401610b15565b6020820152610b9f60408401610b15565b60408201529392505050565b600060408284031215610bbd57600080fd5b610bc5610980565b610bce83610b15565b8152610a7160208401610b15565b60008251610bee81846020870161091a565b9190910192915050565b600060208284031215610c0a57600080fd5b81516106f181610a3456fea2646970667358221220c3813c4707b91697e2d19d1485f6761f97c754f9cf3359e0b3bb0108a2ee636664736f6c634300080c003360806040523480156200001157600080fd5b506040516200108738038062001087833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610c0780620004806000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806342966c681161009757806395d89b411161006657806395d89b41146101de578063a457c2d7146101e6578063a9059cbb146101f9578063dd62ed3e1461020c57600080fd5b806342966c68146101905780635600f04f146101a357806370a08231146101ab57806383197ef0146101d457600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce56714610160578063392f37e914610175578063395093511461017d57600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610245565b60405161010f9190610a0c565b60405180910390f35b61012b610126366004610a7d565b6102d7565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b366004610aa7565b6102ef565b60085460405160ff909116815260200161010f565b610102610313565b61012b61018b366004610a7d565b610322565b61012b61019e366004610ae3565b610361565b6101026103dc565b61013f6101b9366004610afc565b6001600160a01b031660009081526020819052604090205490565b6101dc6103eb565b005b610102610492565b61012b6101f4366004610a7d565b6104a1565b61012b610207366004610a7d565b610533565b61013f61021a366004610b1e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461025490610b51565b80601f016020809104026020016040519081016040528092919081815260200182805461028090610b51565b80156102cd5780601f106102a2576101008083540402835291602001916102cd565b820191906000526020600020905b8154815290600101906020018083116102b057829003601f168201915b5050505050905090565b6000336102e5818585610541565b5060019392505050565b6000336102fd858285610666565b6103088585856106f8565b506001949350505050565b60606007805461025490610b51565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102e5908290869061035c908790610ba2565b610541565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064015b60405180910390fd5b6005546103d4906001600160a01b0316836108c6565b506001919050565b60606006805461025490610b51565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064016103b5565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b60448201526064016103b5565b6005546001600160a01b0316ff5b60606004805461025490610b51565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156105265760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103b5565b6103088286868403610541565b6000336102e58185856106f8565b6001600160a01b0383166105a35760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103b5565b6001600160a01b0382166106045760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103b5565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146106f257818110156106e55760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103b5565b6106f28484848403610541565b50505050565b6001600160a01b03831661075c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103b5565b6001600160a01b0382166107be5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103b5565b6001600160a01b038316600090815260208190526040902054818110156108365760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103b5565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061086d908490610ba2565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108b991815260200190565b60405180910390a36106f2565b6001600160a01b0382166109265760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103b5565b6001600160a01b0382166000908152602081905260409020548181101561099a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103b5565b6001600160a01b03831660009081526020819052604081208383039055600280548492906109c9908490610bba565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610659565b600060208083528351808285015260005b81811015610a3957858101830151858201604001528201610a1d565b81811115610a4b576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610a7857600080fd5b919050565b60008060408385031215610a9057600080fd5b610a9983610a61565b946020939093013593505050565b600080600060608486031215610abc57600080fd5b610ac584610a61565b9250610ad360208501610a61565b9150604084013590509250925092565b600060208284031215610af557600080fd5b5035919050565b600060208284031215610b0e57600080fd5b610b1782610a61565b9392505050565b60008060408385031215610b3157600080fd5b610b3a83610a61565b9150610b4860208401610a61565b90509250929050565b600181811c90821680610b6557607f821691505b60208210811415610b8657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610bb557610bb5610b8c565b500190565b600082821015610bcc57610bcc610b8c565b50039056fea2646970667358221220b62081f2e7e9226b685b8d131d35197c748f315598474a606e6a78ace910f55664736f6c634300080c0033`,
  BytecodeLen: 9317,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:38:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:72:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:40:51:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Deployer": Deployer,
  "Swapper_deposit": Swapper_deposit
  };
export const _APIs = {
  Swapper: {
    deposit: Swapper_deposit
    }
  };
