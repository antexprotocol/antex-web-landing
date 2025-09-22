import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'
import { KLineSpline } from './splines'

const features = [
  {
    title: 'web.home.trade.advantages.transparent.title',
    desc: 'web.home.trade.advantages.transparent',
  },
  {
    title: 'web.home.trade.advantages.lowLatency.title',
    desc: 'web.home.trade.advantages.lowLatency',
  },
  {
    title: 'web.home.trade.advantages.decentralization.title',
    desc: 'web.home.trade.advantages.decentralization',
  },
  {
    title: 'web.home.trade.advantages.lowFees.title',
    desc: 'web.home.trade.advantages.lowFees',
  },
  {
    title: 'web.home.trade.advantages.multiChainAssets.title',
    desc: 'web.home.trade.advantages.multiChainAssets',
  },
  {
    title: 'web.home.trade.advantages.userFriendly.title',
    desc: 'web.home.trade.advantages.userFriendly',
  },
]

export default function FeatureSectionV2() {
  const { t } = useTranslation()
  const [active, setActive] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const item = features[active]
  const idx = active
  const handleActiveChange = (newActive: number) => {
    setIsAnimating(true)
    setTimeout(() => {
      setActive(newActive)
      setTimeout(() => {
        setIsAnimating(false)
      }, 100)
    }, 200)
  }

  return (
    <section
      id='feature-section'
      className='relative snap-start bg-black md:h-screen'
    >
      <div
        key={idx}
        className={twMerge(
          'flex flex-col items-center justify-center gap-6 px-4 md:h-screen md:flex-row md:justify-between md:px-[120px] md:py-[80px]'
        )}
      >
        <div className='max-w-screen md:max-w-[566px]'>
          {/* <div className="hidden md:block text-[80px] leading-[88px] font-light tracking-widest mb-14">{t("web.home.trade.feature")}</div> */}
          <h2
            className={twMerge(
              'via-brand via-46.43% to-brand mb-4 bg-gradient-to-r from-white from-0% bg-clip-text text-center text-[24px] font-bold text-transparent transition-all duration-100 md:text-left md:text-[44px]',
              isAnimating ? 'opacity-0' : 'opacity-100'
            )}
          >
            {t(item.title)}
          </h2>
          <h3
            className={twMerge(
              'text-t3 text-sm leading-[16px] transition-all delay-50 duration-100 md:mb-14 md:min-h-[238px] md:text-2xl md:leading-[140%]',
              isAnimating ? 'opacity-0' : 'opacity-100'
            )}
          >
            {t(item.desc)}
          </h3>
          <div className={twMerge('pc pager space-x-4')}>
            <button
              className={twMerge(
                'inline-flex size-12 cursor-pointer items-center justify-center rounded-xl transition-all',
                idx === 0
                  ? 'border-b1 pointer-events-none border'
                  : 'bg-brand hover:bg-brand/80'
              )}
              onClick={() => {
                handleActiveChange(active - 1)
              }}
            >
              <ChevronLeft className='size-6' />
            </button>
            <button
              className={twMerge(
                'inline-flex size-12 cursor-pointer items-center justify-center rounded-xl transition-all',
                idx === features.length - 1
                  ? 'border-b1 pointer-events-none border'
                  : 'bg-brand hover:bg-brand/80'
              )}
              onClick={() => {
                handleActiveChange(active + 1)
              }}
            >
              <ChevronRight className='size-6' />
            </button>
          </div>
        </div>
        <div
          className={twMerge(
            'bg-p2 inline-flex size-[16rem] items-center justify-center rounded-[30px] transition-all delay-100 duration-100 select-none md:mr-10 md:size-[512px]',
            isAnimating ? 'opacity-0' : 'opacity-100'
          )}
        >
          {idx == 0 ? (
            <KLineSpline className='z-[1]' />
          ) : (
            <img
              src={`/home/feature-${idx + 1}.png`}
              alt={t(item.title)}
              width={320}
              height={320}
            />
          )}
        </div>

        <div className={twMerge('sp pager space-x-4')}>
          <button
            className={twMerge(
              'inline-flex size-12 cursor-pointer items-center justify-center rounded-xl transition-all',
              idx === 0
                ? 'border-b1 pointer-events-none border'
                : 'bg-brand hover:bg-brand/80'
            )}
            onClick={() => {
              handleActiveChange(active - 1)
            }}
          >
            <ChevronLeft className='size-6' />
          </button>
          <button
            className={twMerge(
              'inline-flex size-12 cursor-pointer items-center justify-center rounded-xl transition-all',
              idx === features.length - 1
                ? 'border-b1 pointer-events-none border'
                : 'bg-brand hover:bg-brand/80'
            )}
            onClick={() => {
              handleActiveChange(active + 1)
            }}
          >
            <ChevronRight className='size-6' />
          </button>
        </div>
      </div>
      <div className='pc pointer-events-none absolute inset-0 inline-flex h-full w-full items-center justify-end'>
        <div className='pointer-events-auto absolute inset-y-0 right-[120px] inline-flex h-full w-10 flex-col items-end justify-center'>
          <div className='relative inline-flex h-fit w-fit flex-col items-end justify-center gap-1'>
            {features.map((item, idx) => (
              <div key={idx} className={twMerge('bg-t5 h-15 w-[2px]')}></div>
            ))}
            <div
              className='bg-brand absolute right-0 h-15 w-[2px] transition-all'
              style={{
                top: active * 64,
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
