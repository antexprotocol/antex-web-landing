import { useInViewport } from 'ahooks'
import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'
import { medias } from '../constant'
// import Image from "astro/components/Image.astro";
import { ChevronDown } from 'lucide-react'
import { useIsMobile } from '../hooks/use-is-mobile'
import { cn } from '../utils'
import { I18nLink } from './I18nLink'
import { LogoSpline } from './splines'

function HomeSection() {
  const { t } = useTranslation()
  const ref = useRef<HTMLDivElement>(null)
  const [inViewport] = useInViewport(ref)

  const isMobile = useIsMobile()
  const [visible, setVisible] = useState(false)

  return (
    <div
      id='home-section'
      ref={ref}
      className='relative flex min-h-screen snap-start items-center justify-between overflow-hidden bg-black px-4 md:px-0'
    >
      <img
        src='/home/new-home-bg.svg'
        alt='home'
        width={1600}
        height={2095}
        className='absolute inset-x-[8.3%] z-0 w-[83.33%]'
      />
      <div className='absolute inset-x-0 top-0 z-1 h-[30vh] bg-gradient-to-b from-black to-transparent'></div>
      <div className='absolute inset-x-0 bottom-0 z-1 h-[32.88vh] bg-gradient-to-t from-black to-transparent'></div>
      <div className='pc absolute inset-0 z-2 -mt-[8%] items-center justify-center'>
        {/* <video src="/home/antex-logo-animation-alpha.webm" autoPlay muted loop className="brightness-70 size-[400px]  -mt-[80px]" style={{ mixBlendMode: "color-dodge" }} /> */}
        <LogoSpline />
      </div>

      <header className='absolute top-10 left-1/2 z-[4] flex h-12 w-full -translate-x-1/2 items-center justify-between text-sm md:w-[1200px] [&_a:not(.hover-none)]:hover:underline'>
        <I18nLink href='/' className='hover-none pc'>
          <img
            src='/brand/AnteX-logo-Horizontal-White.svg'
            alt='logo'
            width={154}
            height={37}
          />
        </I18nLink>
        <div className='relative z-20 mx-auto inline-flex h-full items-center gap-8 rounded-full border border-white/20 px-10 hover:bg-black'>
          <I18nLink
            className='w-fit text-center md:w-20'
            target='_blank'
            href={medias?.gitbook}
          >
            {t('web.home.docs', { defaultValue: 'Docs' })}
          </I18nLink>
          <div
            onMouseLeave={() => isMobile && setVisible(false)}
            onClick={() => isMobile && setVisible(true)}
            className='group relative flex h-full w-30 cursor-pointer items-center justify-center gap-1 text-center md:w-40'
          >
            <>
              <p className='relative z-20'>
                {t('web.home.community', { defaultValue: 'Community' })}
              </p>
              <ChevronDown className='min-size-4 relative z-20 size-4 transition duration-300 group-hover:rotate-180' />
            </>
            <div
              className={cn(
                'text-t3 absolute top-0 flex w-full flex-col rounded-b-2xl border border-t-transparent bg-black pt-[3rem] [&_a]:py-2 [&_a]:md:py-4',
                'max-h-0 overflow-hidden opacity-0 transition-[max-height] transition-opacity delay-0 duration-200 duration-300 group-hover:max-h-[24rem] group-hover:opacity-100',
                visible && 'max-h-[24rem] opacity-100'
              )}
            >
              <I18nLink
                className='hover:text-t1'
                href={medias.x}
                target='_blank'
              >
                X
              </I18nLink>
              <I18nLink
                className='hover:text-t1'
                href={medias.telegram}
                target='_blank'
              >
                Telegram
              </I18nLink>
              <I18nLink
                className='hover:text-t1'
                href={medias.discord}
                target='_blank'
              >
                Discord
              </I18nLink>
            </div>
          </div>
          <I18nLink
            className='flex w-fit justify-center md:w-20'
            href='/'
            disabled
          >
            <div className='relative w-fit'>
              <span className='opacity-40'>
                {t('web.home.status', { defaultValue: 'Status' })}
              </span>
              <div className='bg-brand absolute top-0 right-0 origin-right translate-x-3/8 -translate-y-1/2 scale-60 rounded-[8px] px-2 whitespace-nowrap text-white'>
                Soon
              </div>
            </div>
          </I18nLink>
        </div>
        <I18nLink
          href='/future'
          className='pc hover-none hover:bg-brand/80 inline-flex h-full items-center justify-center rounded-full bg-[#6552FE] px-5 text-white transition-all'
        >
          {t('web.home.launch', { defaultValue: 'Launch App' })}
        </I18nLink>
      </header>

      <div
        ref={ref}
        className='relative z-[3] mx-auto mt-[5%] max-w-[1200px] text-center'
      >
        <h1
          className={twMerge(
            'bg-linear-262 from-[#7878FA] from-20% via-white via-44% to-white bg-clip-text text-center text-4xl leading-none font-bold text-transparent transition-all duration-700 md:text-[72px] md:leading-[80px]',
            inViewport ? 'translate-y-0' : 'translate-y-20'
          )}
        >
          {t('web.home.title', { defaultValue: 'The Blockchain' })}
          <br />
          {t('web.home.title2', { defaultValue: 'To Redefine Trading' })}
        </h1>
        {/* <div className="sp items-center justify-center size-[320px] mx-auto -mt-[10%] translate-y-[20%]">
          <LogoSpline />
        </div> */}
        <h2
          className={twMerge(
            'text-t3 mx-auto mt-6 max-w-[640px] text-sm leading-[22px] transition-all delay-200 duration-700 md:text-[18px] md:leading-[27px]',
            inViewport ? 'translate-y-0' : 'translate-y-20'
          )}
        >
          {t('web.home.subtitle', {
            defaultValue:
              'Delivering a decentralized, secure full-chain trading platform.',
          })}
          <br />
          {t('web.home.subtitle2', {
            defaultValue:
              'Through high-performance blockchain technology - a community-driven, user-owned next-generation financial infrastructure.',
          })}
        </h2>
        <I18nLink
          href='/future'
          className={twMerge(
            'transition-all delay-400 duration-700',
            inViewport ? 'translate-y-0' : 'translate-y-20'
          )}
        >
          <button className={twMerge('shiny-cta mt-12')}>
            <span>
              {t('web.home.get_started', { defaultValue: 'Get Started' })}
            </span>
          </button>
        </I18nLink>
      </div>
    </div>
  )
}

export default HomeSection
