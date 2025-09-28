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
  {
    icon: (
      <svg
        width='17'
        height='15'
        viewBox='0 0 17 15'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M13.3875 0H15.9945L10.2996 6.35325L17 15H11.7543L7.64274 9.75685L2.94344 15H0.333932L6.42479 8.20223L0 0.0011914H5.37929L9.09016 4.79272L13.3875 0ZM12.4708 13.4773H13.9158L4.59002 1.44349H3.04058L12.4708 13.4773Z'
          fill='currentColor'
        />
      </svg>
    ),
    alt: 'X',
    href: medias.x,
  },
  {
    icon: (
      <svg
        width='18'
        height='15'
        viewBox='0 0 18 15'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M7.06305 9.886L6.7653 14.074C7.19131 14.074 7.37581 13.891 7.59707 13.6712L9.59436 11.7625L13.733 14.7932C14.492 15.2162 15.0267 14.9935 15.2315 14.095L17.9481 1.36605L17.9488 1.3653C18.1896 0.243303 17.5431 -0.195445 16.8035 0.0798037L0.835653 6.19302C-0.254123 6.61602 -0.237622 7.22352 0.650399 7.49877L4.73275 8.76851L14.2152 2.83529C14.6615 2.53979 15.0672 2.70329 14.7335 2.99879L7.06305 9.886Z'
          fill='currentColor'
        />
      </svg>
    ),
    alt: 'Telegram',
    href: medias.telegram,
  },
  {
    icon: (
      <svg
        width='19'
        height='15'
        viewBox='0 0 19 15'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M17.484 1.76289L19 0.316579V0H13.7481L10.0051 9.29053L5.74671 0H0.239875V0.316579L2.01083 2.44263C2.18342 2.59974 2.27367 2.82947 2.25071 3.06079V11.4158C2.30533 11.7166 2.20717 12.0261 1.995 12.2447L0 14.6558V14.9684H5.65646V14.6518L3.66146 12.2447C3.44533 12.0253 3.34321 11.7213 3.38675 11.4158V4.18895L8.35208 14.9724H8.92921L13.1987 4.18895V12.7792C13.1987 13.0058 13.1987 13.0524 13.0498 13.2008L11.514 14.6826V15H18.9652V14.6834L17.4848 13.2379C17.3549 13.14 17.2876 12.9758 17.3153 12.8163V2.18447C17.2876 2.02421 17.3541 1.86 17.484 1.76289Z'
          fill='currentColor'
        />
      </svg>
    ),
    alt: 'Medium',
    href: medias.medium,
  },
  {
    icon: (
      <svg
        width='20'
        height='15'
        viewBox='0 0 20 15'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          d='M16.9309 1.24343C15.6562 0.667926 14.2892 0.243898 12.86 0.00101906C12.834 -0.00367016 12.8079 0.00805289 12.7945 0.0314606C12.6187 0.339143 12.424 0.740494 12.2876 1.05598C10.7504 0.829513 9.22102 0.829513 7.71531 1.05598C7.57891 0.733499 7.37711 0.339143 7.20051 0.0314606C7.18711 0.00882162 7.16109 -0.00290144 7.13508 0.00101906C5.70664 0.243091 4.33968 0.667119 3.06413 1.24343C3.05308 1.24812 3.04363 1.25592 3.03734 1.26607C0.444522 5.0776 -0.265791 8.79546 0.0826467 12.4672C0.0842092 12.4852 0.0944827 12.5023 0.108662 12.5132C1.81933 13.7494 3.47644 14.4998 5.10273 14.9973C5.12875 15.0051 5.15632 14.9957 5.17289 14.9746C5.55758 14.4577 5.90051 13.9126 6.19453 13.3394C6.21187 13.3059 6.19531 13.2661 6.15984 13.2528C5.6159 13.0497 5.09797 12.8022 4.59972 12.5211C4.56031 12.4985 4.55714 12.443 4.59343 12.4164C4.69828 12.3391 4.80316 12.2587 4.90328 12.1775C4.9214 12.1626 4.94664 12.1595 4.96793 12.1689C8.24106 13.6393 11.7846 13.6393 15.0191 12.1689C15.0404 12.1587 15.0656 12.1619 15.0845 12.1767C15.1847 12.2579 15.2895 12.3391 15.3952 12.4164C15.4314 12.4429 15.429 12.4984 15.3897 12.5211C14.8914 12.8076 14.3735 13.0497 13.8288 13.252C13.7933 13.2652 13.7775 13.3058 13.7949 13.3394C14.0952 13.9118 14.4382 14.4569 14.8158 14.9738C14.8315 14.9957 14.8599 15.0051 14.8859 14.9972C16.5201 14.4998 18.1772 13.7494 19.8879 12.5132C19.9029 12.5023 19.9123 12.4859 19.9139 12.4679C20.3309 8.22299 19.2154 4.53561 16.9568 1.2668C16.9514 1.25592 16.9419 1.24812 16.9309 1.24343ZM6.6834 10.2315C5.69797 10.2315 4.88597 9.3413 4.88597 8.24802C4.88597 7.15474 5.68218 6.26455 6.6834 6.26455C7.69242 6.26455 8.49656 7.16258 8.48078 8.24802C8.48078 9.3413 7.68453 10.2315 6.6834 10.2315ZM13.329 10.2315C12.3436 10.2315 11.5316 9.3413 11.5316 8.24802C11.5316 7.15474 12.3278 6.26455 13.329 6.26455C14.3381 6.26455 15.1422 7.16258 15.1264 8.24802C15.1264 9.3413 14.3381 10.2315 13.329 10.2315Z'
          fill='currentColor'
        />
      </svg>
    ),
    alt: 'Discord',
    href: medias.discord,
  },
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
        'relative z-20',
        'text-t3 snap-start px-4 text-sm md:px-0'
      )}
    >
      <div className='relative overflow-hidden bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--brand)_40%,transparent)_2px,transparent_2px)] bg-[length:24px_24px] bg-repeat pt-20'>
        <div className='absolute top-0 left-0 size-full bg-gradient-to-b from-transparent to-[#000]' />
        <div className='relative z-[1] mx-auto flex max-w-[1200px] flex-col py-20 pb-36 md:flex-row md:gap-0'>
          {/* Logo and Description */}
          <div
            className={twMerge(
              'flex flex-col gap-2 transition-all duration-700 md:w-1/4 md:gap-8',
              inViewport ? 'translate-y-0' : 'translate-y-20'
            )}
            ref={ref}
          >
            <div className='flex items-center gap-3'>
              <img
                src='/brand/AnteX-logo-Horizontal-White.svg'
                className='w-[120px] md:w-[229px]'
                alt='logo'
              />
            </div>
            <div className='text-xl leading-relaxed md:text-base'>
              A Next-Gen DeFi Infrastructure Delivering Custody Freedom & CEX
              Performance
            </div>
            <div className='mt-4 flex gap-4 md:mt-0'>
              {socials.map(s => (
                <a
                  key={s.alt}
                  href={s.href}
                  target='_blank'
                  rel='noopener noreferrer nofollow'
                  className='hover:text-brand text-[#454545]'
                >
                  {s.icon}
                </a>
              ))}
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
              <div className='mb-4 text-lg font-semibold text-white'>
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
              <div className='mb-4 text-lg font-semibold text-white'>
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

        <div className='text-brand absolute -bottom-1/6 left-1/2 mx-auto w-[90%] max-w-[1440px] -translate-x-1/2 opacity-10'>
        <svg viewBox="0 0 763 200" fill="none" xmlns="http://www.w3.org/2000/svg" >
          <path d="M249.659 200H100.929L118.267 172.384H232.322L249.659 200ZM149.845 40.248L50.4023 199.876H0L124.582 0L149.845 40.248ZM603.615 82.0156C609.931 82.0156 615.876 83.3781 621.201 86.1025C626.526 88.827 630.984 92.5421 634.699 97.124C638.414 101.83 641.139 107.155 642.749 113.1C644.359 119.044 644.854 125.36 643.863 131.923H584.173C584.916 135.019 586.154 137.744 587.888 140.097C589.621 142.573 591.851 144.431 594.451 145.917C597.052 147.403 600.149 148.146 603.492 148.146C606.96 148.145 610.179 147.403 613.027 145.669C615.876 143.935 618.229 141.583 620.21 138.734L640.52 143.44C637.176 150.747 632.222 156.567 625.659 161.272C619.096 165.978 611.789 168.208 603.615 168.208C596.061 168.208 589.25 166.227 583.059 162.388C576.867 158.549 571.913 153.347 568.321 146.783C564.73 140.22 562.749 133.037 562.749 125.111C562.749 119.167 563.864 113.595 565.969 108.394C568.074 103.192 571.046 98.6102 574.761 94.6475C578.476 90.6846 582.811 87.5885 587.765 85.3594C592.718 83.1304 598.043 82.0157 603.615 82.0156ZM460.394 82.0156C466.338 82.0157 471.787 83.5023 476.616 86.3506C481.446 89.1989 485.533 93.1617 488.381 98.1152C491.229 103.069 492.715 108.394 492.715 114.462V166.103H472.901V119.663C472.901 116.443 472.158 113.471 470.548 110.87C468.938 108.27 466.833 106.165 464.232 104.555C461.632 102.945 458.659 102.201 455.439 102.201C452.22 102.201 449.248 102.945 446.647 104.555C444.047 106.165 441.941 108.146 440.331 110.87C438.721 113.595 437.979 116.443 437.979 119.663V166.103H418.04L417.917 84.2451H437.854L437.979 91.5518C440.703 88.5796 444.047 86.2261 448.01 84.6162C451.973 83.0064 455.935 82.0156 460.394 82.0156ZM401.609 166.038H380.433L373.003 145.729H323.962L316.656 166.038H295.479L336.966 51.6113H360L401.609 166.038ZM708.45 91.6113L737.553 51.6113H762.196L720.834 108.453L762.691 166.038H737.924L708.45 125.543L678.977 166.038H654.209L696.066 108.453L654.704 51.6113H679.348L708.45 91.6113ZM537.119 84.2744H552.971V104.213H537.119V166.009H517.181V104.213H505.045V84.2744H517.181V58.6396H537.119V84.2744ZM207.059 131.889H143.777L175.356 80.9902L207.059 131.889ZM331.269 125.79H365.696L348.482 78.6074L331.269 125.79ZM603.615 99.4775C600.396 99.4776 597.3 100.22 594.575 101.83C591.851 103.44 589.374 105.422 587.517 108.022C585.659 110.623 584.297 113.595 583.554 116.938H623.802C623.183 113.719 621.943 110.747 619.962 108.022C617.98 105.298 615.628 103.316 612.779 101.706C609.931 100.22 606.835 99.4775 603.615 99.4775Z" fill="currentColor"/>
        </svg>

        </div>
      </div>
    </footer>
  )
}

export default FooterSection
