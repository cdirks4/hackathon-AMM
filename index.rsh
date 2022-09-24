'reach 0.1'

const main = Reach.App(()=>{
    const Deployer = Participant('Deployer', {
        swapReady:Fun([],String)
    })
    
    const TLE = Events({ tokenLaunch: [] });

    const tokSupply = Object({
        tok: Token,
        supply: UInt
    })

    const SwapperApi = API('Swapper',{
        deposit: Fun([], Array(tokSupply,tokSupply)),
        withdraw: Fun([], tokSupply),
        swapAtoB: Fun([], tokSupply),
        swapBtoA: Fun([], tokSupply)   
    })
    init()
    const supply = UInt256.max
    const lpTok = new Token({
         supply
    })
    
    TLE.tokenLaunch();
    Deployer.interact.swapReady(lpTok.id)
    D.publish()
    commit()

    const [LPtot,Abal,Bbal] = parallelReduce([ supply,0,0 ])
      .paySpec([lpTokId])
      .invariant(supply>0)
      .while(true)
      .api(Swapper.deposit, (tokAandBSupply)=>{
        check(tokAandBSupply[0].supply > 0, "tokAsupply insufficient")
        check(tokAandBSupply[1].supply > 0, "tokBsupply insufficient")
            const Ain = tokAandBSupply[0].supply
            const Bin = tokAandBSupply[1].supply
            const AbalPrime = Abal + Ain
            const BbalPrime = Bbal + Bin
            const denominator = AbalPrime * BbalPrime
            const z =  muldiv(Ain,Bin,denominator)
            const LPout = LPtot == 0 ? sqrt(tokAandBSupply[0].supply * tokAandBSupply[1].supply) : z/100 * LPtot 
            const LPtotPrime = LPtot + LPout
            
            return [[0,[LPout,lpTokId]],(alert) =>{
                alert(null)
                return [LPtotPrime,AbalPrime,BbalPrime]
            }]
      })
})