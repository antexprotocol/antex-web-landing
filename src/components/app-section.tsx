import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { useInViewport } from "ahooks";
import { twMerge } from "tailwind-merge";
import { I18nLink } from "./I18nLink";

function AppSection() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const [inViewport] = useInViewport(ref);
  return (
    <section id="app-section" className="px-4 snap-start min-h-screen flex items-center justify-center md:justify-between py-20 md:px-[120px] text-center md:text-left">
      <div className="max-w-[500px] flex flex-col ">
        <h3 ref={ref} className={twMerge("normal-case text-3xl md:text-[54px] leading-none md:leading-[1.3] mb-4 md:mb-8 font-light transition-all duration-700", inViewport ? "translate-y-0" : "translate-y-20")}>
          {t("Secure & Seamless Trading, Always at Your Fingertips", { defaultValue: "Secure & Seamless Trading, Always at Your Fingertips" })}
        </h3>
        <h4 className={twMerge("text-t3 text-sm md:text-xl leading-none md:leading-[28px] font-normal mb-6 md:mb-16 transition-all duration-700 delay-200", inViewport ? "translate-y-0" : "translate-y-20")}>{t("web.home.app.sub_title", { defaultValue: "Experience decentralized derivatives trading anytime, anywhere." })}</h4>

        <img src="/home/app-section.png" alt="app" width={670} height={477} className={twMerge("sp mb-6 w-full max-w-screen transition-all duration-700", inViewport ? "translate-y-0" : "translate-y-20")} />

        <div className={twMerge("flex items-center gap-2 md:block md:space-x-4 transition-all duration-700 delay-400", inViewport ? "translate-y-0" : "translate-y-20")}>
          <I18nLink href="/future" className="flex-1 bg-brand hover:bg-brand/80 text-white md:min-w-[200px] h-8 md:h-16 rounded-md md:rounded-xl inline-flex items-center justify-center text-xs md:text-lg">
            {t("web.home.app.button_1", { defaultValue: "Trade Now" })}
          </I18nLink>
          <I18nLink href="/app" className="flex-1 border border-b1 bg-c2 text-t4 pointer-events-none md:min-w-[200px] h-8 md:h-16 rounded-md md:rounded-xl inline-flex items-center justify-center relative z-1 text-xs md:text-lg">
            {t("web.home.app.button_2", { defaultValue: "Download App" })}
            <span className="origin-left scale-50 md:scale-100 absolute z-2 -top-4 left-[66%] md:left-[150px] h-8 px-4 flex items-center justify-center text-nowrap rounded-full border border-b1 text-xs bg-c1 ">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FF5090] via-[#6F80FF] via-83% to-[#6F80FF]">{t("web.home.app.button_2_sub", { defaultValue: "Coming Soon" })}</span>
            </span>
          </I18nLink>
        </div>
      </div>
      <img src="/home/app-section.png" alt="app" width={670} height={477} className={twMerge("pc max-w-[55vw] transition-all duration-700", inViewport ? "translate-y-0" : "translate-y-20")} />
    </section>
  );
}

export default AppSection;
