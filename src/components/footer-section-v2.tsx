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

        <div className='text-brand absolute -bottom-1/10 left-1/2 mx-auto w-[84%] max-w-[1440px] -translate-x-1/2 opacity-10'>
          <svg
            viewBox='0 0 154 37'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M16.0433 0C16.7647 1.21252e-05 17.4018 0.363534 17.7845 0.918633C18.7824 0.948912 19.7674 1.17809 20.6816 1.59586C21.8477 2.1287 22.8606 2.95096 23.6255 3.98578C24.3137 4.91684 24.7807 5.99265 24.9934 7.13027C29.7509 9.55975 33.0632 14.4474 33.2852 20.1356H33.2973V36H26.0325V33.7778C23.7393 35.1876 21.0449 36 18.1622 36C9.80333 36 3.02704 29.1704 3.02704 20.7457C3.02705 17.0924 4.30146 13.7391 6.4265 11.1125C6.08008 10.8494 5.70149 10.6306 5.299 10.4626C4.88574 10.2901 4.45274 10.1733 4.01128 10.1139C3.66227 10.8104 2.94605 11.2881 2.11895 11.2881C0.948715 11.2881 1.92697e-05 10.332 0 9.15258C0 7.97312 0.948704 7.01695 2.11895 7.01695C2.69881 7.01696 3.22418 7.25182 3.60677 7.63219C4.50604 7.66538 5.39308 7.86005 6.22581 8.2077C6.90647 8.49186 7.54097 8.87427 8.11001 9.3416C10.7831 6.94643 14.3041 5.49152 18.1622 5.49152C19.5028 5.49153 20.8026 5.66745 22.0404 5.99719C21.9335 5.80592 21.8144 5.62105 21.6835 5.44395C21.1634 4.74027 20.4746 4.181 19.6817 3.81867C19.0805 3.54396 18.4343 3.38932 17.7786 3.36082C17.3954 3.91123 16.7611 4.27112 16.0433 4.27113C14.873 4.27113 13.9243 3.31507 13.9243 2.13562C13.9243 0.956169 14.873 0 16.0433 0ZM18.1622 12.8135C13.8156 12.8135 10.292 16.3649 10.292 20.7457C10.292 25.1265 13.8156 28.6779 18.1622 28.6779C22.5088 28.6779 26.0325 25.1265 26.0325 20.7457C26.0325 20.0264 25.9374 19.3295 25.7594 18.667C25.0379 19.5629 23.9367 20.1356 22.7027 20.1356C20.5294 20.1356 18.7675 18.3599 18.7675 16.1695C18.7675 14.9258 19.3357 13.8158 20.2246 13.0887C19.5673 12.9093 18.8758 12.8135 18.1622 12.8135Z'
              fill='currentColor'
            />
            <path
              d='M129.984 36.0012L138.176 21.9786L130.064 8.19434H136.058L141.612 18.2445H142.331L147.885 8.19434H153.879L145.767 21.9786L153.958 36.0012H147.965L142.331 25.7127H141.612L135.978 36.0012H129.984Z'
              fill='currentColor'
            />
            <path
              d='M117.871 36.5567C115.9 36.5567 114.155 36.1462 112.637 35.3252C111.145 34.4778 109.973 33.2993 109.12 31.7898C108.295 30.2538 107.882 28.4529 107.882 26.3873V25.9106C107.882 23.8449 108.295 22.0574 109.12 20.5478C109.946 19.0118 111.105 17.8334 112.597 17.0124C114.088 16.1649 115.82 15.7412 117.791 15.7412C119.736 15.7412 121.427 16.1782 122.866 17.0521C124.304 17.8996 125.423 19.0913 126.222 20.6273C127.021 22.1368 127.421 23.8979 127.421 25.9106V27.6187H112.996C113.05 28.9693 113.556 30.0684 114.515 30.9158C115.474 31.7633 116.646 32.187 118.031 32.187C119.443 32.187 120.482 31.8825 121.147 31.2733C121.813 30.6642 122.32 29.9889 122.666 29.2474L126.781 31.3925C126.408 32.0811 125.862 32.8358 125.143 33.6568C124.451 34.4513 123.518 35.1398 122.346 35.7225C121.174 36.2786 119.682 36.5567 117.871 36.5567ZM113.036 23.8847H122.306C122.2 22.7459 121.734 21.8322 120.908 21.1437C120.109 20.4551 119.056 20.1109 117.751 20.1109C116.393 20.1109 115.314 20.4551 114.515 21.1437C113.716 21.8322 113.223 22.7459 113.036 23.8847Z'
              fill='currentColor'
            />
            <path
              d='M98.9134 36.0004C97.6081 36.0004 96.5426 35.6031 95.7168 34.8087C94.9177 33.9877 94.5181 32.9019 94.5181 31.5513V20.4285H89.5635V16.2972H94.5181V10.1797H99.5527V16.2972H104.987V20.4285H99.5527V30.6773C99.5527 31.4718 99.9256 31.8691 100.671 31.8691H104.507V36.0004H98.9134Z'
              fill='currentColor'
            />
            <path
              d='M67.2451 36.0005V16.2973H72.1998V18.8794H72.919C73.2386 18.1908 73.838 17.542 74.717 16.9329C75.5961 16.2973 76.928 15.9795 78.7127 15.9795C80.2577 15.9795 81.6029 16.337 82.7483 17.052C83.9204 17.7406 84.8261 18.7072 85.4654 19.9519C86.1047 21.1701 86.4244 22.6002 86.4244 24.2421V36.0005H81.3898V24.6394C81.3898 23.1563 81.0169 22.044 80.271 21.3025C79.5518 20.561 78.5129 20.1903 77.1544 20.1903C75.6094 20.1903 74.4107 20.7067 73.5583 21.7395C72.7059 22.7458 72.2797 24.1627 72.2797 25.99V36.0005H67.2451Z'
              fill='currentColor'
            />
            <path
              d='M39.8438 36.0012L47.1958 8.19434H56.3858L63.7379 36.0012H58.3038L56.7854 29.8837H46.7962L45.2779 36.0012H39.8438ZM48.0349 25.0374H55.5468L52.1504 11.4914H51.4312L48.0349 25.0374Z'
              fill='currentColor'
            />
          </svg>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
