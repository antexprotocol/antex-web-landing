import { tradeUrl } from "../../constant";
import { cn } from "../../utils";

export const Solar = ({
    duration,
    start,
    className,
    children,
    direction
}: {
    duration;
    start;
    className;
    children;
    direction
}) => {
    return (
        <div
            style={
                {
                    // ["--direction"]: direction,
                    ["--start" as any]: `${direction * start}deg`,
                    ["--to" as any]: `${direction * start + (direction * 360)}deg`,
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
            <div className="text-white z-[2] w-full absolute top-1/2 left-1/2 -translate-1/2 gap-8 flex flex-col items-center">
                <p className="text-center uppercase text-[72px] leading-[1.1]">
                    Redefine Trading <br /> with Blockchain
                </p>
                <span className="font-light text-xl text-white/80 ">
                    Trade Anywhere. Own Everything. Stay Secure.
                </span>
                <a href={tradeUrl} className="cursor-pointer">
                    <button className="transition-all hover:bg-[#8678FD] hover:text-black hover:border-[#8678FD] cursor-pointer px-7 py-4 rounded-xl flex items-center justify-center border border-white gap-1">
                        <span>Enter AnteX Testnet</span>
                        <svg
                            width="13"
                            height="13"
                            viewBox="0 0 13 13"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.2857 13L12.2857 1.21429L10.6573 1.21429L0.499992 1.21429"
                                stroke="currentColor"
                                stroke-width="1.4"
                            />
                            <path
                                d="M12.2857 1.21434L1.07455 12.4255"
                                stroke="currentColor"
                                stroke-width="1.4"
                            />
                        </svg>
                    </button>
                </a>
            </div>
            <div className="w-screen h-screen overflow-hidden rounded-b-[90px] bg-linear-to-t from-[#6451fb] to-[#000000] relative ">
                <div className="absolute bg-[url(/home/solar-background.svg)] size-full"></div>
                <div className="size-full relative flex items-center justify-center translate-y-[60%] z-[1] opacity-40">
                    <Solar
                        direction={1}
                        duration={Math.random() * 10 + 10}
                        start={Math.random() * 90}
                        className="absolute w-[60%] aspect-square"
                        children={
                            <div className="bg-black">
                                <img className="size-6" src="/home/brand-icon/ANTEX.svg" />
                            </div>
                        }
                    />
                    <Solar
                        direction={-1}
                        duration={Math.random() * 10 + 10}
                        start={Math.random() * 90}
                        className="absolute w-[70%] aspect-square"
                        children={
                            <div className="bg-black">
                                <img className="size-6" src="/home/brand-icon/SOL.svg" />
                            </div>
                        }
                    />
                    <Solar
                        direction={1}
                        duration={Math.random() * 10 + 10}
                        start={Math.random() * 90}
                        className="absolute w-[80%] aspect-square"
                        children={
                            <div className="bg-black">
                                <img className="size-6" src="/home/brand-icon/ETH.svg" />
                            </div>
                        }
                    />
                    <Solar
                        direction={-1}
                        duration={Math.random() * 10 + 10}
                        start={Math.random() * 90}
                        className="absolute w-[90%] aspect-square"
                        children={
                            <div className="bg-black">
                                <img className="size-6" src="/home/brand-icon/BTC.svg" />
                            </div>
                        }
                    />
                </div>
            </div>
        </div>
    );
};
