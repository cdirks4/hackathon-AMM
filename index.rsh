'reach 0.1'


const tokenSupplyObj = Struct([
        ['firstTok', Token],
        ['secondTok', Token],
        ['secondSupply', UInt],
        ['firstSupply', UInt]
]
    )
const singleTokenSupplyObj = Struct([
        ['firstTok', Token],
        ['secondTok', Token],
]
    )


export const main = Reach.App(()=>{
    const Deployer = Participant('Deployer', {
        swapReady:Fun([Token],Null)
        tokA; 
    })
    const SwapperApi = API('Swapper',{
        deposit: Fun([tokenSupplyObj], Bytes(5)),
        // withdraw: Fun([singleTokenSupplyObj],Null ),
        // swapAtoB: Fun([singleTokenSupplyObj], Null),
        // swapBtoA: Fun([singleTokenSupplyObj], Null)   
    })
  
    init()
    const supply = UInt.max
  
    Deployer.publish()
    const lpTok = Token.new({
        supply
    })
    Deployer.interact.swapReady(lpTok)
    commit()
    Deployer.publish()
    const [LPtot,Abal,Bbal] = parallelReduce([ supply,0,0 ])
      .paySpec([lpTok])
      .invariant(supply>0)
      .while(true)
      .api(SwapperApi.deposit, (obj,alert)=>{
          const tokenStruct = tokenSupplyObj.fromObject(obj)
          const tokenObj = tokenSupplyObj.toObject(obj)
          const Ain = tokenObj.firstSupply
          const Bin = tokenObj.secondSupply
          const Atok = tokenObj.firstTok
          const Btok = tokenObj.secondTok
        return [0,[[Ain,Atok],[Bin,Btok]],(alert)=>{
            const AbalPrime = Abal + Ain
            const BbalPrime = Bbal + Bin
            const denominator = AbalPrime * BbalPrime
            const z =  muldiv(Ain,Bin,denominator)
            const LPout = LPtot == 0 ? sqrt(Ain* Bin) : z/100 * LPtot 
            const LPtotPrime = LPtot + LPout
          
            alert(null)
            return [LPtotPrime,AbalPrime,BbalPrime]
        }]
        
        // check(Ain > 0, "tokAsupply insufficient")
        // check(Bin > 0, "tokBsupply insufficient")
      })
      commit()
      exit()
})