import { useTranslation } from "react-i18next";
import dynamic from "next/dynamic";
import { Suspense } from "react";
const SymbolList = dynamic(() => import("./symbol-list"), { ssr: false });
import { Spinner } from "@repo/ui/spinner";

function MarketSection() {
  const { t } = useTranslation();
  return (
    <div className=" bg-black relative py-[88px] flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute w-[854px] h-[912px] blur-[250px] bg-brand opacity-50 top-[40.9%] left-[54.2%] z-[0] rounded-[912px]"></div>
      <h3 className="text-[44px] font-bold">{t("web.home.market.title", { defaultValue: "Top Crypto Now" })}</h3>
      <h4 className="mt-6 text-t3 text-xl font-light text-center max-w-[880px]">{t("web.home.market.sub_title", { defaultValue: "Crypto is fragmented today, but it doesn’t need to be.For the first time, build projects, create value, and exchange assets on the same hyper-performant chain." })}</h4>

      <Suspense
        fallback={
          <Spinner loading>
            <div className="h-[696px] w-[1192px]" />
          </Spinner>
        }
      >
        <SymbolList />
      </Suspense>
    </div>
  );
}

export default MarketSection;
