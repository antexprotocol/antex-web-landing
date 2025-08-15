import { useInViewport } from "ahooks";

import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import { env, medias } from "../constant";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@radix-ui/react-accordion";

const products = [
  // { name: "Buy Crypto", href: "#" },
  { name: "Futures", href: "/future" },
  { name: "Explorer", href: "/explorer" },
  { name: "Referral", href: "/referral" },
  { name: "Media Kit", href: '/brand' },
  // { name: "Spot", href: "#" },
  // { name: "Margin", href: "#" },
];

const services = [
  { name: "Help Center", href: "#" },
  // { name: "VIP Services", href: "#" },
  // { name: "Download Data", href: "#" },
  // { name: "Fee Schedule", href: "#" },
];

const community = [
  // { name: "Doc", href: medias.gitbook },
  { name: "Telegram", href: medias.telegram },
  { name: "X", href: medias.x },
  // { name: "Discord Apps Center", href: "#" },
  { name: "Gitbook", href: medias.gitbook },
  // { name: "Crypto Wiki", href: "#" },
  // { name: "Crypto Directory", href: "#" },
];

const socials = [
  { icon: "/icons/x.svg", alt: "X", href: medias.x },
  { icon: "/icons/telegram.svg", alt: "Telegram", href: medias.telegram },
  { icon: "/icons/medium.svg", alt: "Medium", href: medias.medium },
  // { icon: "/icons/discord.svg", alt: "Discord", href: "#" },
  // { icon: "/icons/reddit.svg", alt: "Reddit", href: "#" },
  // { icon: "/icons/github.svg", alt: "GitHub", href: "#" },
];

function FooterSection() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const [inViewport] = useInViewport(ref);

  return (
    <footer id="footer" className={twMerge("px-4 md:px-0 snap-start bg-gradient-to-b from-[#070113] to-[#630DFF] text-t3 text-sm ")}>
      <div className="bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--brand)_40%,transparent)_1.5px,transparent_1.5px)] bg-[length:40px_40px] bg-repeat">
        <div className="max-w-[1200px] mx-auto py-20 flex flex-col md:flex-row md:gap-0">
          {/* Logo and Description */}
          <div className={twMerge("md:w-1/4 flex flex-col gap-2 md:gap-6 transition-all duration-700", inViewport ? "translate-y-0" : "translate-y-20")} ref={ref}>
            <div className="flex items-center gap-3">
              <img src="/brand/AnteX-logo-Horizontal-White.svg" alt="logo" width={154} height={37} />
            </div>
            <div className="text-sm md:text-base leading-relaxed">
              {t("web.home.title")}, {t("web.home.title2")}
            </div>
          </div>
          {/* Links */}
          <div className={twMerge("justify-end pc ml-auto sm:min-w-[616px] grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(184px,1fr))] gap-8 transition-all duration-700 delay-200", inViewport ? "translate-y-0" : "translate-y-20")}>
            <div>
              <div className="text-lg font-semibold mb-4">{t("Products")}</div>
              <ul className="space-y-4">
                {products.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className=" hover:text-white transition">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* <div>
              <div className="text-lg font-semibold mb-4">{t("Services")}</div>
              <ul className="space-y-4">
                {services.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className=" hover:text-white transition">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div> */}
            <div>
              <div className="text-lg font-semibold mb-4">{t("community")}</div>
              <ul className="space-y-4">
                {community.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} target="_blank" className=" hover:text-white transition">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={twMerge("sp grid-rows-[repeat(3, 1fr)] md:grid-rows-none md:ml-auto sm:min-w-[616px] grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(184px,1fr))] gap-8 transition-all duration-700 delay-200", inViewport ? "translate-y-0" : "translate-y-20")}>
            <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-base font-semibold">{t("Products")}</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-4">
                    {products.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className=" hover:text-white transition text-sm">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-base font-semibold">{t("Services")}</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-4">
                    {services.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className=" hover:text-white transition text-sm">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-base font-semibold">{t("community")}</AccordionTrigger>
                <AccordionContent>
                  <ul className="space-y-4">
                    {community.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} target="_blank" className=" hover:text-white transition text-sm">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className="border-t border-p1 py-6 flex flex-col md:flex-row items-center justify-between max-w-[1200px] mx-auto text-t1">
          <div>
            © {new Date().getFullYear()}
            <span className="uppercase">{env?.SYSTEM_NAME}</span>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            {socials.map((s) => (
              <a key={s.alt} href={s.href} target="_blank" rel="noopener noreferrer" className="text-t1">
                <img src={s.icon} alt={s.alt} width={24} height={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
