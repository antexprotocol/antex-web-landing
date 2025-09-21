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
    );
};
