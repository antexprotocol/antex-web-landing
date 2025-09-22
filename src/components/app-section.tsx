import { useTranslation } from 'react-i18next'
import { useRef } from 'react'
import { useInViewport } from 'ahooks'
import { twMerge } from 'tailwind-merge'
import { I18nLink } from './I18nLink'

function AppSection() {
  const { t } = useTranslation()
  const ref = useRef<HTMLDivElement>(null)
  const [inViewport] = useInViewport(ref)
  return (
    <section
      id='app-section'
      className='flex min-h-screen snap-start items-center justify-center px-4 py-20 text-center md:justify-between md:px-[120px] md:text-left'
    >
      <div className='flex max-w-[500px] flex-col'>
        <h3
          ref={ref}
          className={twMerge(
            'mb-4 text-3xl leading-none font-light normal-case transition-all duration-700 md:mb-8 md:text-[54px] md:leading-[1.3]',
            inViewport ? 'translate-y-0' : 'translate-y-20'
          )}
        >
          {t('Secure & Seamless Trading, Always at Your Fingertips', {
            defaultValue:
              'Secure & Seamless Trading, Always at Your Fingertips',
          })}
        </h3>
        <h4
          className={twMerge(
            'text-t3 mb-6 text-sm leading-none font-normal transition-all delay-200 duration-700 md:mb-16 md:text-xl md:leading-[28px]',
            inViewport ? 'translate-y-0' : 'translate-y-20'
          )}
        >
          {t('web.home.app.sub_title', {
            defaultValue:
              'Experience decentralized derivatives trading anytime, anywhere.',
          })}
        </h4>

        <img
          src='/home/app-section.png'
          alt='app'
          width={670}
          height={477}
          className={twMerge(
            'sp mb-6 w-full max-w-screen transition-all duration-700',
            inViewport ? 'translate-y-0' : 'translate-y-20'
          )}
        />

        <div
          className={twMerge(
            'flex flex-wrap items-center gap-2 transition-all delay-400 duration-700 md:space-x-4',
            inViewport ? 'translate-y-0' : 'translate-y-20'
          )}
        >
          <I18nLink
            href='/future'
            className='bg-brand hover:bg-brand/80 inline-flex h-8 flex-1 items-center justify-center rounded-md text-xs text-white md:h-16 md:min-w-[200px] md:rounded-xl md:text-lg'
          >
            {t('web.home.app.button_1', { defaultValue: 'Trade Now' })}
          </I18nLink>
          <I18nLink
            href='/app'
            className='border-b1 bg-c2 text-t4 pointer-events-none relative z-1 inline-flex h-8 flex-1 items-center justify-center rounded-md border text-xs md:h-16 md:min-w-[200px] md:rounded-xl md:text-lg'
          >
            {t('web.home.app.button_2', { defaultValue: 'Download App' })}
            <span className='border-b1 bg-c1 absolute -top-4 left-[66%] z-2 flex h-8 origin-left scale-50 items-center justify-center rounded-full border px-4 text-xs text-nowrap md:left-[150px] md:scale-100'>
              <span className='bg-gradient-to-r from-[#FF5090] via-[#6F80FF] via-83% to-[#6F80FF] bg-clip-text text-transparent'>
                {t('web.home.app.button_2_sub', {
                  defaultValue: 'Coming Soon',
                })}
              </span>
            </span>
          </I18nLink>
        </div>
      </div>
      <img
        src='/home/app-section.png'
        alt='app'
        width={670}
        height={477}
        className={twMerge(
          'pc max-w-[55vw] transition-all duration-700',
          inViewport ? 'translate-y-0' : 'translate-y-20'
        )}
      />
    </section>
  )
}

export default AppSection
