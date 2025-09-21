import { cn } from "../../utils";

export const Solar = ({
    duration,
    start,
    className,
    children,
}: {
    duration;
    start;
    className;
    children;
}) => {
    return (
        <div
            style={
                {
                    ["--start" as any]: `${start}deg`,
                    animationDuration: `${duration}s`,
                } as React.CSSProperties
            }
            className={cn(
                "border-[#a397ff]/30 rounded-full border relative origin-center solar-rotator",
                className
            )}
        >
            <div className="absolute top-0 left-1/2 -translate-1/2 overflow-hidden rounded-full">
                {children}
            </div>
        </div>
    );
};

export const SolarLayout = () => {
    return (
        <div className="relative flex items-center justify-center">
            <div className="z-[2] w-full absolute top-1/2 left-1/2 -translate-1/2 gap-8 flex flex-col items-center">
                <p className="text-[68px] leading-[1.1]">
                    The Blockchain to<br /> Redefine Trading
                </p>
                <span className="text-xl">Trade Anywhere. Own Everything. Stay Secure.</span>
                <button className="px-7 py-4 rounded-xl flex items-center justify-center border border-white gap-1">
                    <span>Enter AnteX Testnet</span>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.2857 13L12.2857 1.21429L10.6573 1.21429L0.499992 1.21429" stroke="white" stroke-width="1.4" />
                        <path d="M12.2857 1.21434L1.07455 12.4255" stroke="white" stroke-width="1.4" />
                    </svg>
                </button>
            </div>
            <div className="w-screen h-screen overflow-hidden rounded-b-[90px] bg-linear-to-t from-[#6451fb] to-[#000000] relative ">
                <div className="absolute bg-[url(/home/solar-background.svg)] size-full"></div>
                <div className="size-full relative flex items-center justify-center translate-y-[60%] z-[1]">
                    <Solar
                        duration={Math.random() * 10 + 20}
                        start={Math.random() * 360}
                        className="absolute w-[60%] aspect-square"
                        children={
                            <div className="bg-black">
                                <img className="size-6" src="/brand/AnteX-Symbol-White-NoBG.svg" />
                            </div>
                        }
                    />
                    <Solar
                        duration={Math.random() * 10 + 30}
                        start={Math.random() * 360}
                        className="absolute w-[70%] aspect-square"
                        children={
                            <img
                                className="size-6"
                                src="https://testnet.antex.ai/logos/SOL.png"
                            />
                        }
                    />
                    <Solar
                        duration={Math.random() * 10 + 40}
                        start={Math.random() * 360}
                        className="absolute w-[80%] aspect-square"
                        children={
                            <img
                                className="size-6"
                                src="https://testnet.antex.ai/logos/ETH.png"
                            />
                        }
                    />
                    <Solar
                        duration={Math.random() * 10 + 50}
                        start={Math.random() * 360}
                        className="absolute w-[90%] aspect-square"
                        children={
                            <img
                                className="size-6"
                                src="https://testnet.antex.ai/logos/BTC.png"
                            />
                        }
                    />
                </div>
            </div>
        </div>
    );
};
