import { useInViewport } from 'ahooks'

import { useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'
import { env, medias } from '../constant'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@radix-ui/react-accordion'
import { I18nLink } from './I18nLink'

const products = [
  // { name: "Buy Crypto", href: "#" },
  { name: 'Futures', href: '/future' },
  { name: 'Explorer', href: '/explorer' },
  { name: 'Referral', href: '/referral' },
  { name: 'Media Kit', href: '/brand' },
  // { name: "Spot", href: "#" },
  // { name: "Margin", href: "#" },
]

const services = [
  { name: 'Help Center', href: '#' },
  // { name: "VIP Services", href: "#" },
  // { name: "Download Data", href: "#" },
  // { name: "Fee Schedule", href: "#" },
]

const community = [
  // { name: "Doc", href: medias.gitbook },
  { name: 'Telegram', href: medias.telegram },
  { name: 'X', href: medias.x },
  { name: 'Discord', href: medias.discord },
  { name: 'Gitbook', href: medias.gitbook },
  // { name: "Crypto Wiki", href: "#" },
  // { name: "Crypto Directory", href: "#" },
]

const socials = [
  { icon: '/icons/x.svg', alt: 'X', href: medias.x },
  { icon: '/icons/telegram.svg', alt: 'Telegram', href: medias.telegram },
  { icon: '/icons/medium.svg', alt: 'Medium', href: medias.medium },
  { icon: '/icons/discord.svg', alt: 'Discord', href: medias.discord },
  // { icon: "/icons/reddit.svg", alt: "Reddit", href: "#" },
  // { icon: "/icons/github.svg", alt: "GitHub", href: "#" },
]

function FooterSection() {
  const { t } = useTranslation()
  const ref = useRef<HTMLDivElement>(null)
  const [inViewport] = useInViewport(ref)

  return (
    <footer
      id='footer'
      className={twMerge(
        'relative z-20 shadow-[0_0px_50px_25px_#000000ee]',
        'text-t3 snap-start bg-gradient-to-b from-[#070113] to-[#630DFF] px-4 text-sm md:px-0'
      )}
    >
      <div className='bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--brand)_40%,transparent)_1.5px,transparent_1.5px)] bg-[length:40px_40px] bg-repeat'>
        <div className='mx-auto flex max-w-[1200px] flex-col py-20 md:flex-row md:gap-0'>
          {/* Logo and Description */}
          <div
            className={twMerge(
              'flex flex-col gap-2 transition-all duration-700 md:w-1/4 md:gap-6',
              inViewport ? 'translate-y-0' : 'translate-y-20'
            )}
            ref={ref}
          >
            <div className='flex items-center gap-3'>
              <img
                src='/brand/AnteX-logo-Horizontal-White.svg'
                className='w-[120px] md:w-[154px]'
                alt='logo'
              />
            </div>
            <div className='text-sm leading-relaxed md:text-base'>
              {t('web.home.title', { defaultValue: 'The Blockchain' })},{' '}
              {t('web.home.title2', { defaultValue: 'To Redefine Trading' })}
            </div>
          </div>
          {/* Links */}
          <div
            className={twMerge(
              'pc ml-auto grid grid-cols-1 justify-end gap-8 transition-all delay-200 duration-700 sm:min-w-[616px] sm:grid-cols-[repeat(auto-fill,minmax(184px,1fr))]',
              inViewport ? 'translate-y-0' : 'translate-y-20'
            )}
          >
            <div>
              <div className='mb-4 text-lg font-semibold'>
                {t('Products', { defaultValue: 'Products' })}
              </div>
              <ul className='space-y-4'>
                {products.map(item => (
                  <li key={item.name}>
                    <I18nLink
                      href={item.href}
                      className='transition hover:text-white'
                    >
                      {item.name}
                    </I18nLink>
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
              <div className='mb-4 text-lg font-semibold'>
                {t('community', { defaultValue: 'Community' })}
              </div>
              <ul className='space-y-4'>
                {community.map(item => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      target='_blank'
                      className='transition hover:text-white'
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className={twMerge(
              'sp grid-rows-[repeat(3, 1fr)] mt-6 grid grid-cols-1 gap-8 transition-all delay-200 duration-700 sm:min-w-[616px] sm:grid-cols-[repeat(auto-fill,minmax(184px,1fr))] md:ml-auto md:grid-rows-none',
              inViewport ? 'translate-y-0' : 'translate-y-20'
            )}
          >
            <Accordion
              type='single'
              collapsible
              className='w-full'
              defaultValue='item-1'
            >
              <AccordionItem value='item-1'>
                <AccordionTrigger className='text-base font-semibold'>
                  {t('Products', { defaultValue: 'Products' })}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className='space-y-4'>
                    {products.map(item => (
                      <li key={item.name}>
                        <I18nLink
                          href={item.href}
                          className='text-sm transition hover:text-white'
                        >
                          {item.name}
                        </I18nLink>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              {/* <AccordionItem value="item-2">
                <AccordionTrigger className="text-base font-semibold">{t("Services", { defaultValue: "Services" })}</AccordionTrigger>
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
              </AccordionItem> */}
              <AccordionItem value='item-3'>
                <AccordionTrigger className='text-base font-semibold'>
                  {t('community', { defaultValue: 'Community' })}
                </AccordionTrigger>
                <AccordionContent>
                  <ul className='space-y-4'>
                    {community.map(item => (
                      <li key={item.name}>
                        <a
                          href={item.href}
                          target='_blank'
                          className='text-sm transition hover:text-white'
                        >
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
        <div className='border-p1 text-t1 mx-auto flex max-w-[1200px] flex-col items-center justify-between border-t py-6 md:flex-row'>
          <div>
            © {new Date().getFullYear()}
            <span className='uppercase'>{env?.SYSTEM_NAME}</span>
          </div>
          <div className='mt-4 flex gap-4 md:mt-0'>
            {socials.map(s => (
              <a
                key={s.alt}
                href={s.href}
                target='_blank'
                rel='noopener noreferrer'
                className='text-t1'
              >
                <img src={s.icon} alt={s.alt} width={24} height={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
