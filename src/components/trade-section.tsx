import { useTranslation } from "react-i18next";
import Image from "next/image";
import { useRef } from "react";
import { useInViewport } from "ahooks";
import { twMerge } from "tailwind-merge";

function TradeSection() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const [inViewport] = useInViewport(ref);
  return (
    <section id="trade-section" className="snap-start min-h-screen flex flex-col items-center justify-center py-20 px-[120px] bg-top-center bg-no-repeat bg-contain" style={{ backgroundImage: `url(/home/trade-section-bg.svg)` }}>
      <h3 ref={ref} className={twMerge("text-[64px] leading-[64px] mb-6 font-medium text-center transition-all duration-700", inViewport ? "translate-y-0" : "translate-y-20")}>
        {t("web.home.trade.title")}
      </h3>
      <h4 className={twMerge("text-t2 text-lg font-light transition-all duration-700 delay-200", inViewport ? "translate-y-0" : "translate-y-20")}>{t("web.home.trade.sub_title")}</h4>
      <Image src="/home/trade-screenshot-2.png" className={twMerge("max-w-[60vw] mt-14 transition-all duration-700 delay-400", inViewport ? "translate-y-0" : "translate-y-20")} alt="trade screenshot" width={1200} height={670} />
    </section>
  );
}

export default TradeSection;
