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
      1: [ctc0, ctc1],
      4: [ctc1]
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
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Struct([['firstTok', ctc0], ['secondTok', ctc0], ['secondSupply', ctc2], ['firstSupply', ctc2]]);
  const ctc4 = stdlib.T_Tuple([ctc3]);
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc6 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.sendrecv({
    args: [],
    evt_cnt: 0,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:33:14:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:33:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v179, time: v178, didSend: v22, from: v177 } = txn1;
      
      ;
      const v180 = '                                ';
      const v181 = '        ';
      const v182 = '                                                                                                ';
      const v184 = stdlib.simTokenNew(sim_r, v180, v181, v182, v180, stdlib.UInt_max, undefined /* Nothing */, getSimTokCtr());
      const v185 = await txn1.getOutput('internal', 'v184', ctc0, v184);
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v179, time: v178, didSend: v22, from: v177 } = txn1;
  ;
  const v180 = '                                ';
  const v181 = '        ';
  const v182 = '                                                                                                ';
  const v184 = undefined /* TokenNew */;
  const v185 = await txn1.getOutput('internal', 'v184', ctc0, v184);
  stdlib.protect(ctc1, await interact.swapReady(v185), {
    at: './index.rsh:37:32:application',
    fs: ['at ./index.rsh:37:32:application call to [unknown function] (defined at: ./index.rsh:37:32:function exp)', 'at ./index.rsh:37:32:application call to "liftedInteract" (defined at: ./index.rsh:37:32:application)'],
    msg: 'swapReady',
    who: 'Deployer'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v177, v185],
    evt_cnt: 0,
    funcNum: 1,
    lct: v178,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./index.rsh:39:14:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v208, time: v207, didSend: v49, from: v206 } = txn2;
      
      ;
      const v213 = v207;
      
      if (await (async () => {
        
        return true;})()) {
        sim_r.isHalt = false;
        }
      else {
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
    tys: [ctc6, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v208, time: v207, didSend: v49, from: v206 } = txn2;
  ;
  const v209 = stdlib.addressEq(v177, v206);
  stdlib.assert(v209, {
    at: './index.rsh:39:14:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Deployer'
    });
  let v213 = v207;
  
  while (await (async () => {
    
    return true;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc4],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v239], secs: v241, time: v240, didSend: v107, from: v238 } = txn3;
    undefined /* setApiDetails */;
    ;
    ;
    const v249 = 'hello';
    await txn3.getOutput('Swapper_deposit', 'v249', ctc5, v249);
    const cv213 = v240;
    
    v213 = cv213;
    
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
  const ctc2 = stdlib.T_Struct([['firstTok', ctc0], ['secondTok', ctc0], ['secondSupply', ctc1], ['firstSupply', ctc1]]);
  const ctc3 = stdlib.T_Tuple([ctc2]);
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'));
  const ctc5 = stdlib.T_Null;
  
  
  const [v185] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '4'), [ctc0]);
  const v224 = stdlib.protect(ctc3, await interact.in(), {
    at: './index.rsh:1:23:application',
    fs: ['at ./index.rsh:44:11:application call to [unknown function] (defined at: ./index.rsh:44:11:function exp)', 'at ./index.rsh:44:11:application call to [unknown function] (defined at: ./index.rsh:44:11:function exp)'],
    msg: 'in',
    who: 'Swapper_deposit'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v185, v224],
    evt_cnt: 1,
    funcNum: 3,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc3],
    pay: [stdlib.checkedBigNumberify('./index.rsh:44:11:decimal', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./index.rsh:41:16:decimal', stdlib.UInt_max, '0'), v185]]],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v239], secs: v241, time: v240, didSend: v107, from: v238 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "Swapper_deposit"
        });
      ;
      ;
      const v249 = 'hello';
      const v250 = await txn1.getOutput('Swapper_deposit', 'v249', ctc4, v249);
      
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc3],
    waitIfNotPresent: false
    }));
  const {data: [v239], secs: v241, time: v240, didSend: v107, from: v238 } = txn1;
  undefined /* setApiDetails */;
  ;
  ;
  const v249 = 'hello';
  const v250 = await txn1.getOutput('Swapper_deposit', 'v249', ctc4, v249);
  if (v107) {
    stdlib.protect(ctc5, await interact.out(v239, v250), {
      at: './index.rsh:44:12:application',
      fs: ['at ./index.rsh:44:12:application call to [unknown function] (defined at: ./index.rsh:44:12:function exp)', 'at ./index.rsh:45:14:application call to "alert" (defined at: ./index.rsh:44:43:function exp)', 'at ./index.rsh:44:43:application call to [unknown function] (defined at: ./index.rsh:44:43:function exp)'],
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
    impure: [`Swapper_deposit((uint64,uint64,uint64,uint64))byte[5]`],
    pure: [],
    sigs: [`Swapper_deposit((uint64,uint64,uint64,uint64))byte[5]`]
    },
  appApproval: `BiAGAAEDCASgjQYmAgEAACI1ADEYQQGoKWRJIls1ASVbNQI2GgAXSUEAFCI1BCM1BoG64YmODhJENhoBQgAcNhoCFzUENhoDNhoBF0kjDEAAgkkkDEAASyQSRCEENAESRDQESSISTDQCEhFEKGRJNQMXNf9JNQU1/oAEyPmrgTT+ULCADQAAAAAAAAD5aGVsbG+wgAVoZWxsbzUHNP8yBkIAtCMSRCM0ARJENARJIhJMNAISEUQoZDUDgASai5F0sDQDVwAgMQASRDQDgSBbMgZCAINIIQWIAQQiNAESRDQESSISTDQCEhFEgARfDav6sDIDNf8hBYgA5LEisgEkshCB////////////AbIigQayIyWvsiU0/7ImgWCvsic0/7IoMgqyKbO0PDX+gAgAAAAAAAAAuDT+FlCwNP41/TEANP0WUChLAVcAKGdIIzUBMgY1AkIANTX/STX+FihLAVcACGdIIQQ1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQIxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 40,
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T5",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
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
        "internalType": "struct T5",
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
                        "internalType": "address payable",
                        "name": "firstTok",
                        "type": "address"
                      },
                      {
                        "internalType": "address payable",
                        "name": "secondTok",
                        "type": "address"
                      },
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
                    "internalType": "struct T10",
                    "name": "elem0",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T11",
                "name": "v239",
                "type": "tuple"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T13",
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
    "name": "_reach_oe_v184",
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
        "internalType": "struct T9",
        "name": "v0",
        "type": "tuple"
      }
    ],
    "name": "_reach_oe_v249",
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
            "internalType": "address payable",
            "name": "firstTok",
            "type": "address"
          },
          {
            "internalType": "address payable",
            "name": "secondTok",
            "type": "address"
          },
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
        "internalType": "struct T10",
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
        "internalType": "struct T9",
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
        "internalType": "struct T5",
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
                        "internalType": "address payable",
                        "name": "firstTok",
                        "type": "address"
                      },
                      {
                        "internalType": "address payable",
                        "name": "secondTok",
                        "type": "address"
                      },
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
                    "internalType": "struct T10",
                    "name": "elem0",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T11",
                "name": "v239",
                "type": "tuple"
              }
            ],
            "internalType": "struct T12",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T13",
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
  Bytecode: `0x6080604052604051620021ad380380620021ad833981016040819052620000269162000370565b6000808055436003556040805160c08101825260a08101838152815281516020808201845284825280830191909152825160608181018552858252818301869052818501869052838501919091528083018590526080830194909452825133815285518183015290850151151581840152915190927faf3102e4a96b239a2811210526ca19adcde1af3e2876a2c9a5886a5a887a2dcb928290030190a1620000d13415600762000292565b80516000908190526020808301518290526040808401805184905280518301849052518101929092528251518251918201520160408051601f1981840301815290829052602083810151516001600160c01b031916908301529060280160408051808303601f1901815282825284820151805160208083015192850151908601919091529284015260608301919091529060800160408051808303601f19018152828252855151602084015291016040516020818303038152906040526000196012604051620001a190620002bc565b620001b2969594939291906200042b565b604051809103906000f080158015620001cf573d6000803e3d6000fd5b506001600160a01b031660608201819052608082018190526040519081527f9e586191324eae868d7c7518af6ee0fcddbb50a1a5295ff4e869025801970a5b9060200160405180910390a1604080518082018252600060208083018281523380855260808701516001600160a01b039081168352600194859055439094558551928301525190911692810192909252906060016040516020818303038152906040526002908051906020019062000288929190620002ca565b50505050620004d3565b81620002b85760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b611087806200112683390190565b828054620002d89062000496565b90600052602060002090601f016020900481019282620002fc576000855562000347565b82601f106200031757805160ff191683800117855562000347565b8280016001018555821562000347579182015b82811115620003475782518255916020019190600101906200032a565b506200035592915062000359565b5090565b5b808211156200035557600081556001016200035a565b6000604082840312156200038357600080fd5b604080519081016001600160401b0381118282101715620003b457634e487b7160e01b600052604160045260246000fd5b6040528251815260208301518015158114620003cf57600080fd5b60208201529392505050565b6000815180845260005b818110156200040357602081850181015186830182015201620003e5565b8181111562000416576000602083870101525b50601f01601f19169290920160200192915050565b60c0815260006200044060c0830189620003db565b8281036020840152620004548189620003db565b905082810360408401526200046a8188620003db565b90508281036060840152620004808187620003db565b6080840195909552505060a00152949350505050565b600181811c90821680620004ab57607f821691505b60208210811415620004cd57634e487b7160e01b600052602260045260246000fd5b50919050565b610c4380620004e36000396000f3fe6080604052600436106100565760003560e01c80631713683b1461005f5780631e93b0f1146100725780632c10a159146100965780632cd17517146100a957806383230757146100d5578063ab53f2c6146100ea57005b3661005d57005b005b61005d61006d3660046108b5565b61010d565b34801561007e57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d6100a43660046108cd565b61013e565b6100bc6100b73660046109e5565b61016b565b60405190516001600160d81b031916815260200161008d565b3480156100e157600080fd5b50600154610083565b3480156100f657600080fd5b506100ff6101b8565b60405161008d929190610a2d565b60408051808201909152600060208201908152815261013a61013436849003840184610a67565b82610255565b5050565b60408051808201909152600060208201908152815261013a61016536849003840184610b04565b82610481565b6040805160208101909152600081526101826107c9565b6020810151518390526101a660408051808201909152600060208201908152815290565b6101b08282610255565b519392505050565b6000606060005460028080546101cd90610b3c565b80601f01602080910402602001604051908101604052809291908181526020018280546101f990610b3c565b80156102465780601f1061021b57610100808354040283529160200191610246565b820191906000526020600020905b81548152906001019060200180831161022957829003601f168201915b50505050509050915091509091565b610265600460005414600e610614565b815161028090158061027957508251600154145b600f610614565b60008080556002805461029290610b3c565b80601f01602080910402602001604051908101604052809291908181526020018280546102be90610b3c565b801561030b5780601f106102e05761010080835404028352916020019161030b565b820191906000526020600020905b8154815290600101906020018083116102ee57829003601f168201915b50505050508060200190518101906103239190610b71565b905061034060408051808201909152600060208201908152815290565b60408051338152855160208083019190915280870151515180516001600160a01b039081168486015291810151909116606080840191909152818401516080840152015160a082015290517ffd43122a8bb6fe45e62a706472bb7e1804001ef8aed683024bde456689d356539181900360c00190a16103c13415600c610614565b6103db6103d4338460000151600061063a565b600d610614565b80516468656c6c6f60d81b9052805160405190516001600160d81b03191681527f8d4b00dbf1e7cf61ec2975c2eb6c95edca839757b88e30e9d5587bd426d8256e9060200160405180910390a180518352610458604080516060810182526000818301818152825282516020818101909452908152909182015290565b825181516001600160a01b039091169052602081015143905261047a81610652565b5050505050565b610491600160005414600a610614565b81516104ac9015806104a557508251600154145b600b610614565b6000808055600280546104be90610b3c565b80601f01602080910402602001604051908101604052809291908181526020018280546104ea90610b3c565b80156105375780601f1061050c57610100808354040283529160200191610537565b820191906000526020600020905b81548152906001019060200180831161051a57829003601f168201915b505050505080602001905181019061054f9190610b9f565b60408051338152855160208083019190915286015115158183015290519192507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1919081900360600190a16105a634156008610614565b80516105be906001600160a01b031633146009610614565b6105ea604080516060810182526000818301818152825282516020818101909452908152909182015290565b60208083015182516001600160a01b03909116905281015143905261060e81610652565b50505050565b8161013a5760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b6000610648838530856106af565b90505b9392505050565b6040805160208101909152600081528151516001600160a01b031680825260046000554360015560408051602081019290925201604051602081830303815290604052600290805190602001906106aa9291906107e3565b505050565b604080516001600160a01b0385811660248301528481166044830152606480830185905283518084039091018152608490920183526020820180516001600160e01b03166323b872dd60e01b17905291516000928392839291891691839161071691610bd4565b60006040518083038185875af1925050503d8060008114610753576040519150601f19603f3d011682016040523d82523d6000602084013e610758565b606091505b509150915061076982826001610789565b508080602001905181019061077e9190610bf0565b979650505050505050565b6060831561079857508161064b565b8251156107a85782518084602001fd5b60405163100960cb60e01b815260048101839052602401610631565b905290565b6040518060400160405280600081526020016107c4610867565b8280546107ef90610b3c565b90600052602060002090601f0160209004810192826108115760008555610857565b82601f1061082a57805160ff1916838001178555610857565b82800160010185558215610857579182015b8281111561085757825182559160200191906001019061083c565b506108639291506108a0565b5090565b60405180602001604052806107c46040805160a08101825260006020820181815292820181905260608201819052608082015290815290565b5b8082111561086357600081556001016108a1565b600060a082840312156108c757600080fd5b50919050565b6000604082840312156108c757600080fd5b6040516020810167ffffffffffffffff8111828210171561091057634e487b7160e01b600052604160045260246000fd5b60405290565b6040805190810167ffffffffffffffff8111828210171561091057634e487b7160e01b600052604160045260246000fd5b6001600160a01b038116811461095c57600080fd5b50565b60006080828403121561097157600080fd5b6040516080810181811067ffffffffffffffff821117156109a257634e487b7160e01b600052604160045260246000fd5b60405290508082356109b381610947565b815260208301356109c381610947565b8060208301525060408301356040820152606083013560608201525092915050565b6000608082840312156109f757600080fd5b61064b838361095f565b60005b83811015610a1c578181015183820152602001610a04565b8381111561060e5750506000910152565b8281526040602082015260008251806040840152610a52816060850160208701610a01565b601f01601f1916919091016060019392505050565b600081830360a0811215610a7a57600080fd5b6040516040810181811067ffffffffffffffff82111715610aab57634e487b7160e01b600052604160045260246000fd5b604052833581526080601f1983011215610ac457600080fd5b610acc6108df565b9150610ad66108df565b610ae3866020870161095f565b8152825260208101919091529392505050565b801515811461095c57600080fd5b600060408284031215610b1657600080fd5b610b1e610916565b823581526020830135610b3081610af6565b60208201529392505050565b600181811c90821680610b5057607f821691505b602082108114156108c757634e487b7160e01b600052602260045260246000fd5b600060208284031215610b8357600080fd5b610b8b6108df565b8251610b9681610947565b81529392505050565b600060408284031215610bb157600080fd5b610bb9610916565b8251610bc481610947565b81526020830151610b3081610947565b60008251610be6818460208701610a01565b9190910192915050565b600060208284031215610c0257600080fd5b815161064b81610af656fea26469706673582212207ea522e9b31001cfd730c58212fb3ba406f028635b835be3cb05168e16c33ce664736f6c634300080c003360806040523480156200001157600080fd5b506040516200108738038062001087833981016040819052620000349162000341565b8551869086906200004d906003906020850190620001ce565b50805162000063906004906020840190620001ce565b506200006f9150503390565b600580546001600160a01b0319166001600160a01b039290921691821790556200009a9083620000e6565b8351620000af906006906020870190620001ce565b508251620000c5906007906020860190620001ce565b506008805460ff191660ff9290921691909117905550620004709350505050565b6001600160a01b038216620001415760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b80600260008282546200015591906200040c565b90915550506001600160a01b03821660009081526020819052604081208054839290620001849084906200040c565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001dc9062000433565b90600052602060002090601f0160209004810192826200020057600085556200024b565b82601f106200021b57805160ff19168380011785556200024b565b828001600101855582156200024b579182015b828111156200024b5782518255916020019190600101906200022e565b50620002599291506200025d565b5090565b5b808211156200025957600081556001016200025e565b634e487b7160e01b600052604160045260246000fd5b600082601f8301126200029c57600080fd5b81516001600160401b0380821115620002b957620002b962000274565b604051601f8301601f19908116603f01168101908282118183101715620002e457620002e462000274565b816040528381526020925086838588010111156200030157600080fd5b600091505b8382101562000325578582018301518183018401529082019062000306565b83821115620003375760008385830101525b9695505050505050565b60008060008060008060c087890312156200035b57600080fd5b86516001600160401b03808211156200037357600080fd5b620003818a838b016200028a565b975060208901519150808211156200039857600080fd5b620003a68a838b016200028a565b96506040890151915080821115620003bd57600080fd5b620003cb8a838b016200028a565b95506060890151915080821115620003e257600080fd5b50620003f189828a016200028a565b9350506080870151915060a087015190509295509295509295565b600082198211156200042e57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200044857607f821691505b602082108114156200046a57634e487b7160e01b600052602260045260246000fd5b50919050565b610c0780620004806000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806342966c681161009757806395d89b411161006657806395d89b41146101de578063a457c2d7146101e6578063a9059cbb146101f9578063dd62ed3e1461020c57600080fd5b806342966c68146101905780635600f04f146101a357806370a08231146101ab57806383197ef0146101d457600080fd5b806323b872dd116100d357806323b872dd1461014d578063313ce56714610160578063392f37e914610175578063395093511461017d57600080fd5b806306fdde03146100fa578063095ea7b31461011857806318160ddd1461013b575b600080fd5b610102610245565b60405161010f9190610a0c565b60405180910390f35b61012b610126366004610a7d565b6102d7565b604051901515815260200161010f565b6002545b60405190815260200161010f565b61012b61015b366004610aa7565b6102ef565b60085460405160ff909116815260200161010f565b610102610313565b61012b61018b366004610a7d565b610322565b61012b61019e366004610ae3565b610361565b6101026103dc565b61013f6101b9366004610afc565b6001600160a01b031660009081526020819052604090205490565b6101dc6103eb565b005b610102610492565b61012b6101f4366004610a7d565b6104a1565b61012b610207366004610a7d565b610533565b61013f61021a366004610b1e565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461025490610b51565b80601f016020809104026020016040519081016040528092919081815260200182805461028090610b51565b80156102cd5780601f106102a2576101008083540402835291602001916102cd565b820191906000526020600020905b8154815290600101906020018083116102b057829003601f168201915b5050505050905090565b6000336102e5818585610541565b5060019392505050565b6000336102fd858285610666565b6103088585856106f8565b506001949350505050565b60606007805461025490610b51565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906102e5908290869061035c908790610ba2565b610541565b6005546000906001600160a01b0316336001600160a01b0316146103be5760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064015b60405180910390fd5b6005546103d4906001600160a01b0316836108c6565b506001919050565b60606006805461025490610b51565b6005546001600160a01b0316336001600160a01b0316146104405760405162461bcd60e51b815260206004820152600f60248201526e36bab9ba1031329031b932b0ba37b960891b60448201526064016103b5565b600254156104845760405162461bcd60e51b81526020600482015260116024820152706d757374206265206e6f20737570706c7960781b60448201526064016103b5565b6005546001600160a01b0316ff5b60606004805461025490610b51565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156105265760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016103b5565b6103088286868403610541565b6000336102e58185856106f8565b6001600160a01b0383166105a35760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016103b5565b6001600160a01b0382166106045760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016103b5565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b0383811660009081526001602090815260408083209386168352929052205460001981146106f257818110156106e55760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016103b5565b6106f28484848403610541565b50505050565b6001600160a01b03831661075c5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016103b5565b6001600160a01b0382166107be5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016103b5565b6001600160a01b038316600090815260208190526040902054818110156108365760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016103b5565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061086d908490610ba2565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516108b991815260200190565b60405180910390a36106f2565b6001600160a01b0382166109265760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016103b5565b6001600160a01b0382166000908152602081905260409020548181101561099a5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016103b5565b6001600160a01b03831660009081526020819052604081208383039055600280548492906109c9908490610bba565b90915550506040518281526000906001600160a01b038516907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90602001610659565b600060208083528351808285015260005b81811015610a3957858101830151858201604001528201610a1d565b81811115610a4b576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114610a7857600080fd5b919050565b60008060408385031215610a9057600080fd5b610a9983610a61565b946020939093013593505050565b600080600060608486031215610abc57600080fd5b610ac584610a61565b9250610ad360208501610a61565b9150604084013590509250925092565b600060208284031215610af557600080fd5b5035919050565b600060208284031215610b0e57600080fd5b610b1782610a61565b9392505050565b60008060408385031215610b3157600080fd5b610b3a83610a61565b9150610b4860208401610a61565b90509250929050565b600181811c90821680610b6557607f821691505b60208210811415610b8657634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610bb557610bb5610b8c565b500190565b600082821015610bcc57610bcc610b8c565b50039056fea2646970667358221220e2b10323a3a61a17e4d29e7ae63dcc50ab30292987eb9e7ef0dc0e1cac7785e864736f6c634300080c0033`,
  BytecodeLen: 8621,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:38:5:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:61:7:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:40:45:after expr stmt semicolon',
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
