import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Card = ({title, src}: any)=>{
    return (<div className="group after:!bg-linear-to-l after:!from-[#000000] after:!to-[#1C1C1C] relative z-[1] w-[26.875rem] aspect-[430/600] glow-effect rounded-[32px]">
        <div className="w-full z-[1] absolute top-1/2 left-1/2 -translate-1/2 flex flex-col items-center">
            <div className="text-center transition-all duration-400  group-hover:text-[#6451fb] text-2xl text-[#E2E6EE] mb-14">{title}</div>
            <img className="grayscale-100 group-hover:grayscale-0 transition-all duration-400 size-75" src={src} />
            <p className="text-t3 text-xl font-light max-w-5/8 text-center">Assets secured by PoS validators, fully verifiable and always user-controlled.</p>
        </div>
    </div>)
}
const Union = ({ className }: { className: string }) => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M14 10H24V14H14V24H10V14H0V10H10V0H14V10Z"
                fill="white"
                fillOpacity="0.3"
            />
        </svg>
    );
};
export const Funcs = () => {
    return (
        <div className=" py-4 md:py-30">
            <div className="flex flex-col items-center gap-4 mb-16">
                <p className="text-[64px]">Unparalleled Security</p>
            </div>

            <div
                className="relative overflow-hidden"
            >
                <div className="absolute z-0 top-1/2 -translate-y-1/2 size-full text-[120px]">
                    <div className="scroll-bg h-full"></div>
                </div>
                <div className="absolute z-[1] top-1/2 -translate-y-1/2 size-full backdrop-blur-[4px] bg-[linear-gradient(to_right,rgba(255,255,255,0.3)_3px,rgba(0,0,0,0.1)_1px),linear-gradient(to_bottom,rgba(255,255,255,0.3)_3px,rgba(0,0,0,0.1)_1px)] bg-[length:34px_34px] bg-repeat"></div>
                <div className="absolute z-[2] top-1/2 -translate-y-1/2 size-full bg-radial from-black/70 from-0% to-black/95 to-70%" />

                <div className="z-[3] px-4 md:px-30 max-w-[1440px] mx-auto relative h-full flex items-center justify-center">
                    <>
                        <Union className="absolute top-1/12 right-1/8 opacity-60" />
                        <Union className="absolute top-1/3 right-1/16 opacity-60" />
                        <Union className="absolute top-3/4 right-1/8 opacity-60" />
                        <Union className="absolute top-1/4 left-1/8 opacity-60" />
                        <Union className="absolute top-3/4 left-1/16 opacity-40" />
                    </>


                    <div>

                        <Carousel className="w-full max-w-md">
                            <CarouselContent className="">
                                <CarouselItem><Card src="/home/func/513.svg" title="User Asset Self-Custody"/></CarouselItem>
                                <CarouselItem><Card src="/home/func/512.svg" title="Forced Withdrawal Protocol"/></CarouselItem>
                                <CarouselItem><Card src="/home/func/516.svg" title="Premier Liquidity & Ultra-Low Slippage"/></CarouselItem>
                            </CarouselContent>
                            <CarouselPrevious className="size-8 [&>svg]:!size-8 border-none" />
                            <CarouselNext className="size-8 [&>svg]:!size-8 border-none" />
                        </Carousel>
                    </div>
                    {/* <img className="w-[35.5rem]" src="/home/funcs-example.png"/> */}
                </div>
            </div>
        </div>
    );
};
