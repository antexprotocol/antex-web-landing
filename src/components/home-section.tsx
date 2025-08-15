import { useInViewport } from "ahooks";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import { medias } from "../constant";
// import Image from "astro/components/Image.astro";
import { LogoSpline } from "./splines";
import { I18nLink } from "./I18nLink";
import { ChevronDown } from "lucide-react";
import { cn } from "../utils";

function HomeSection() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const [inViewport] = useInViewport(ref);

  return (
    <div id="home-section" ref={ref} className="px-4 md:px-0 snap-start min-h-screen relative overflow-hidden flex justify-between items-center bg-black">
      <img src="/home/new-home-bg.svg" alt="home" width={1600} height={2095} className=" absolute inset-x-[8.3%] w-[83.33%] z-0" />
      <div className="absolute inset-x-0 top-0 h-[30vh] z-1 bg-gradient-to-b from-black  to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-[32.88vh] z-1 bg-gradient-to-t from-black  to-transparent"></div>
      <div className="pc absolute inset-0 z-2 items-center justify-center -mt-[8%]">
        {/* <video src="/home/antex-logo-animation-alpha.webm" autoPlay muted loop className="brightness-70 size-[400px]  -mt-[80px]" style={{ mixBlendMode: "color-dodge" }} /> */}
        <LogoSpline />
      </div>

      <header className="w-full md:w-[1200px] text-sm absolute z-3 top-10 left-1/2 -translate-x-1/2 flex items-center justify-between h-12 [&_a:not(.hover-none)]:hover:underline">
        <I18nLink href="/" className="hover-none pc">
          <img src="/brand/AnteX-logo-Horizontal-White.svg" alt="logo" width={154} height={37} />
        </I18nLink>
        <div className="hover:bg-black z-20 relative mx-auto h-full gap-8 px-10 inline-flex items-center rounded-full border border-white/20">
          <I18nLink className="text-center w-fit md:w-20" target="_blank" href={medias?.gitbook}>{t("web.home.docs", { defaultValue: "Docs" })}</I18nLink>
          <div className="group relative h-full text-center w-30 md:w-40 cursor-pointer flex items-center gap-1 justify-center" >
            <>
              <p className="relative z-20">{t("web.home.community", { defaultValue: "Community" })}</p>
              <ChevronDown className="size-4 min-size-4 group-hover:rotate-180 transition duration-300 relative z-20" />
            </>
            <div className={cn(
              "flex flex-col text-t3 [&_a]:py-2 [&_a]:md:py-4 pt-[3rem] absolute top-0 w-full border border-t-transparent rounded-b-2xl bg-black",
              "overflow-hidden opacity-0 transition-opacity duration-200 group-hover:opacity-100 max-h-0 transition-[max-height] duration-300 delay-0 group-hover:max-h-[24rem]"
            )}>

              <I18nLink className="hover:text-t1" href={medias.x} target="_blank">X</I18nLink>
              <I18nLink className="hover:text-t1" href={medias.telegram} target="_blank">Telegram</I18nLink>
              <I18nLink className="hover:text-t1" href={medias.discord} target="_blank">Discord</I18nLink>
            </div>
          </div>
          <I18nLink className="flex justify-center w-fit md:w-20" href="/" disabled>
            <div className="relative w-fit">
              <span className="opacity-40">
                {t("web.home.status", { defaultValue: "Status" })}
              </span>
              <div className="text-white bg-brand rounded-[8px] px-2 absolute origin-right top-0 right-0 whitespace-nowrap translate-x-3/8 -translate-y-1/2 scale-60">Soon</div>
            </div>
          </I18nLink>
        </div>
        <I18nLink href="/future" className="pc hover-none hover:bg-brand/80 text-white rounded-full px-5 h-full inline-flex items-center justify-center transition-all bg-[#6552FE]">
          {t("web.home.launch", { defaultValue: "Launch App" })}
        </I18nLink>
      </header>

      <div ref={ref} className="mx-auto max-w-[1200px] text-center z-3 mt-[5%]">
        <h1 className={twMerge("text-4xl md:text-[72px] leading-none md:leading-[80px] text-transparent text-center font-bold bg-clip-text bg-linear-262 from-[#7878FA] from-20% via-white via-44% to-white transition-all duration-700", inViewport ? "translate-y-0" : "translate-y-20")}>
          {t("web.home.title", { defaultValue: "The Blockchain" })}
          <br />
          {t("web.home.title2", { defaultValue: "To Redefine Trading" })}
        </h1>
        {/* <div className="sp items-center justify-center size-[320px] mx-auto -mt-[10%] translate-y-[20%]">
          <LogoSpline />
        </div> */}
        <h2 className={twMerge("text-sm md:text-[18px] max-w-[640px] mx-auto mt-6 text-t3 leading-[22px] md:leading-[27px] transition-all duration-700 delay-200", inViewport ? "translate-y-0" : "translate-y-20")}>
          {t("web.home.subtitle", { defaultValue: "Delivering a decentralized, secure full-chain trading platform." })}
          <br />
          {t("web.home.subtitle2", { defaultValue: "Through high-performance blockchain technology - a community-driven, user-owned next-generation financial infrastructure." })}
        </h2>
        <div className={twMerge("transition-all duration-700 delay-400", inViewport ? "translate-y-0" : "translate-y-20")}>
          <button
            className={twMerge("shiny-cta mt-12")}
            onClick={() => {
              window.location.href = "/future";
            }}
          >
            <span>{t("web.home.get_started", { defaultValue: "Get Started" })}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
