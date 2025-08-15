import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

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

export default function FeatureSection() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);
  const [lastLeave, setLastLeave] = useState(0);
  return (
    <section
      id="feature-section"
      className="snap-start relative h-screen bg-black overflow-auto no-scrollbar snap-y snap-mandatory"
      onScroll={(e) => {
        const scrollTop = (e.target as HTMLElement).scrollTop;
        const clientHeight = (e.target as HTMLElement).clientHeight;
        const scrollPercent = scrollTop / clientHeight;
        setActive(Math.min(features.length - 1, Math.round(scrollPercent)));
        const $container = document.getElementById("feature-section");

        if (scrollPercent - (features.length - 1) > 0.005) {
          if (new Date().getTime() - lastLeave > 500) {
            setLastLeave(new Date().getTime());
            setTimeout(() => {
              if ($container) {
                $container.scrollTo({
                  top: 0,
                  behavior: "instant",
                });
              }
            }, 800);
            const $tradeSection = document.getElementById("trade-section");
            if ($tradeSection) {
              $tradeSection.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }
        }
      }}
    >
      {features.map((item, idx) => (
        <div key={idx} className="h-screen snap-start px-[120px] py-[80px] flex justify-between items-center">
          <div className="max-w-[566px]">
            <div className="text-[80px] leading-[88px] font-light tracking-widest mb-14">{t("web.home.trade.feature", { defaultValue: "Core Features" })}</div>
            <h2 className={twMerge("text-[44px] font-bold text-transparent mb-4 bg-clip-text bg-gradient-to-r from-0% from-white via-brand via-46.43% to-brand transition-all duration-700", idx === active ? "translate-y-0" : "translate-y-20")}>{t(item.title)}</h2>
            <h3 className={twMerge("text-2xl text-t3 leading-[140%] min-h-[102px] mb-14 transition-all duration-700 delay-200", idx === active ? "translate-y-0" : "translate-y-20")}>{t(item.desc)}</h3>
            <div className={twMerge("space-x-4 pager transition-all duration-700 delay-400", idx === active ? "translate-y-0" : "translate-y-20")}>
              <button
                className={twMerge(" rounded-xl size-12 inline-flex items-center justify-center transition-all cursor-pointer", idx === 0 ? "border border-b1 hover:bg-white/10" : " bg-brand hover:bg-brand/80")}
                onClick={() => {
                  const $container = document.getElementById("feature-section");
                  if (idx == 0) {
                    const $homeSection = document.getElementById("home-section");
                    if ($homeSection) {
                      $homeSection.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                    if ($container) {
                      $container.scrollTo({
                        top: 0,
                        behavior: "instant",
                      });
                    }
                    return;
                  }
                  if ($container) {
                    $container.scrollTo({
                      top: (active - 1) * $container.clientHeight,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                <ChevronLeft className="size-6" />
              </button>
              <button
                className={twMerge(" rounded-xl size-12 inline-flex items-center justify-center transition-all cursor-pointer", idx === features.length - 1 ? "border border-b1 hover:bg-white/10" : " bg-brand hover:bg-brand/80")}
                onClick={() => {
                  const $container = document.getElementById("feature-section");
                  if (idx == features.length - 1) {
                    const $tradeSection = document.getElementById("trade-section");
                    if ($tradeSection) {
                      $tradeSection.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                    if ($container) {
                      $container.scrollTo({
                        top: 0,
                        behavior: "instant",
                      });
                    }
                    return;
                  }
                  if ($container) {
                    $container.scrollTo({
                      top: (active + 1) * $container.clientHeight,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                <ChevronRight className="size-6" />
              </button>
            </div>
          </div>
          <div className={twMerge("size-[512px] mr-10 inline-flex justify-center items-center bg-p2 rounded-[30px] transition-all duration-700", idx === active ? "translate-y-0" : "translate-y-20")}>
            <Image src={`/home/feature-${idx + 1}.png`} alt={t(item.title)} width={320} height={320} />
          </div>
        </div>
      ))}
      <div className=" sticky inset-0 w-full h-full inline-flex justify-end items-center pointer-events-none">
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
