import { useTranslation } from 'react-i18next'
import { useRef } from 'react'
import { useInViewport } from 'ahooks'
import { twMerge } from 'tailwind-merge'

function TradeSection() {
  const { t } = useTranslation()
  const ref = useRef<HTMLDivElement>(null)
  const [inViewport] = useInViewport(ref)
  return (
    <section
      id='trade-section'
      className='bg-top-center flex min-h-screen snap-start flex-col items-center justify-center bg-contain bg-no-repeat px-[120px] py-20'
      style={{ backgroundImage: `url(/home/trade-section-bg.svg)` }}
    >
      <h3
        ref={ref}
        className={twMerge(
          'mb-6 text-center text-[64px] leading-[64px] font-medium transition-all duration-700',
          inViewport ? 'translate-y-0' : 'translate-y-20'
        )}
      >
        {t('web.home.trade.title', { defaultValue: 'Trade anytime, anywhere' })}
      </h3>
      <h4
        className={twMerge(
          'text-t2 text-lg font-light transition-all delay-200 duration-700',
          inViewport ? 'translate-y-0' : 'translate-y-20'
        )}
      >
        {t('web.home.trade.sub_title', {
          defaultValue: 'User-Owned Secure and Fair Decentralized Exchange',
        })}
      </h4>
      <img
        src='/home/trade-screenshot-2.png'
        className={twMerge(
          'mt-14 max-w-[60vw] transition-all delay-400 duration-700',
          inViewport ? 'translate-y-0' : 'translate-y-20'
        )}
        alt='trade screenshot'
        width={1200}
        height={670}
      />
    </section>
  )
}

export default TradeSection
