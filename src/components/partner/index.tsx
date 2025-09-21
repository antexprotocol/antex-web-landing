
const partnerConfig = [
    {
        name: 'Solana',
        icon: <img className="h-8" src="/partner/SolanaFoundation.svg"/>
    },
    {
        name: 'Certik',
        icon: <img className="h-8" src="/partner/Certik Security.svg"/>
    },
    {
        name: 'MoonPay',
        icon: <img className="h-8" src="/partner/MoonPay.svg"/>
    },
    {
        name: 'CoinMarketCap',
        icon: <img className="h-8" src="/partner/CoinMarketCap.svg"/>
    },
    {
        name: 'CoinGecko',
        icon: <img className="h-12" src="/partner/CoinGecko.svg"/>
    },
]
export const Partner = () => {
    return (
        <div className="relative py-4 md:py-30 mb-16">
            <div className="relative bg-[radial-gradient(circle_at_center,color-mix(in_oklab,white_40%,transparent)_2px,transparent_2px)] bg-[length:24px_24px] bg-repeat">
                <div className="z-0 absolute top-0 left-0 size-full bg-gradient-to-b from-black via-black/40 to-black" /> 
                <div className="relative z-[1] pt-18 pb-10 flex flex-col items-center gap-4 max-w-[1440px] mx-auto px-4 md:px-30 ">
                    <p className="text-[64px]">Partners</p>
                </div>
                <div className="relative z-[1] flex items-center max-w-[1440px] mx-auto pb-18 px-4 md:px-30">
                    {
                        partnerConfig.map(i=>{
                            return <div className="flex-1 flex items-center justify-center flex-wrap" key={i.name}>{i.icon}</div>
                        })
                    }
                </div>

            </div>
        </div>
    );
};
