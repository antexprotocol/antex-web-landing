
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import { KLineSpline } from "./splines";

const features = [
  {
    title: "web.home.trade.advantages.transparent.title",
    desc: "web.home.trade.advantages.transparent",
  },
  {
    title: "web.home.trade.advantages.lowLatency.title",
    desc: "web.home.trade.advantages.lowLatency",
  },
  {
    title: "web.home.trade.advantages.decentralization.title",
    desc: "web.home.trade.advantages.decentralization",
  },
  {
    title: "web.home.trade.advantages.lowFees.title",
    desc: "web.home.trade.advantages.lowFees",
  },
  {
    title: "web.home.trade.advantages.multiChainAssets.title",
    desc: "web.home.trade.advantages.multiChainAssets",
  },
  {
    title: "web.home.trade.advantages.userFriendly.title",
    desc: "web.home.trade.advantages.userFriendly",
  },
];

export default function FeatureSectionV2() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const item = features[active];
  const idx = active;
  const handleActiveChange = (newActive: number) => {
    setIsAnimating(true);
    setTimeout(() => {
      setActive(newActive);
      setTimeout(() => {
        setIsAnimating(false);
      }, 100);
    }, 200);
  };

  return (
    <section id="feature-section" className="snap-start relative md:h-screen bg-black ">
      <div key={idx} className={twMerge("md:h-screen px-4 md:px-[120px] md:py-[80px] flex flex-col md:flex-row md:justify-between justify-center items-center gap-6 ")}>
        <div className="max-w-screen md:max-w-[566px]">
          {/* <div className="hidden md:block text-[80px] leading-[88px] font-light tracking-widest mb-14">{t("web.home.trade.feature")}</div> */}
          <h2 className={twMerge("text-center md:text-left text-[24px] md:text-[44px] font-bold text-transparent mb-4 bg-clip-text bg-gradient-to-r from-0% from-white via-brand via-46.43% to-brand transition-all duration-100", isAnimating ? "opacity-0" : "opacity-100")}>{t(item.title)}</h2>
          <h3 className={twMerge("text-sm leading-[16px] md:text-2xl text-t3 md:leading-[140%] md:min-h-[238px] md:mb-14 transition-all duration-100 delay-50", isAnimating ? "opacity-0" : "opacity-100")}>{t(item.desc)}</h3>
          <div className={twMerge("pc space-x-4 pager")}>
            <button
              className={twMerge(" rounded-xl size-12 inline-flex items-center justify-center transition-all cursor-pointer", idx === 0 ? "border border-b1 pointer-events-none" : " bg-brand hover:bg-brand/80")}
              onClick={() => {
                handleActiveChange(active - 1);
              }}
            >
              <ChevronLeft className="size-6" />
            </button>
            <button
              className={twMerge(" rounded-xl size-12 inline-flex items-center justify-center transition-all cursor-pointer", idx === features.length - 1 ? "border border-b1 pointer-events-none" : " bg-brand hover:bg-brand/80")}
              onClick={() => {
                handleActiveChange(active + 1);
              }}
            >
              <ChevronRight className="size-6" />
            </button>
          </div>
        </div>
        <div className={twMerge("size-[16rem] md:size-[512px] md:mr-10 inline-flex justify-center items-center bg-p2 rounded-[30px] select-none transition-all duration-100 delay-100", isAnimating ? "opacity-0" : "opacity-100")}>{idx == 0 ? <KLineSpline className="z-[1]" /> : <img src={`/home/feature-${idx + 1}.png`} alt={t(item.title)} width={320} height={320} />}</div>

        <div className={twMerge("sp space-x-4 pager")}>
          <button
            className={twMerge(" rounded-xl size-12 inline-flex items-center justify-center transition-all cursor-pointer", idx === 0 ? "border border-b1 pointer-events-none" : " bg-brand hover:bg-brand/80")}
            onClick={() => {
              handleActiveChange(active - 1);
            }}
          >
            <ChevronLeft className="size-6" />
          </button>
          <button
            className={twMerge(" rounded-xl size-12 inline-flex items-center justify-center transition-all cursor-pointer", idx === features.length - 1 ? "border border-b1 pointer-events-none" : " bg-brand hover:bg-brand/80")}
            onClick={() => {
              handleActiveChange(active + 1);
            }}
          >
            <ChevronRight className="size-6" />
          </button>
        </div>
      </div>
      <div className="pc absolute inset-0 w-full h-full inline-flex justify-end items-center pointer-events-none">
        <div className="absolute right-[120px] inset-y-0 w-10 h-full  pointer-events-auto inline-flex flex-col justify-center items-end">
          <div className="w-fit h-fit relative inline-flex flex-col gap-1 justify-center items-end">
            {features.map((item, idx) => (
              <div key={idx} className={twMerge("w-[2px] h-15 bg-t5")}></div>
            ))}
            <div
              className="w-[2px] h-15 bg-brand transition-all absolute right-0"
              style={{
                top: active * 64,
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
