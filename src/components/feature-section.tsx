import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { twMerge } from 'tailwind-merge'

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

export default function FeatureSection() {
  const { t } = useTranslation()
  const [active, setActive] = useState(0)
  const [lastLeave, setLastLeave] = useState(0)
  return (
    <section
      id='feature-section'
      className='no-scrollbar relative h-screen snap-y snap-mandatory snap-start overflow-auto bg-black'
      onScroll={e => {
        const scrollTop = (e.target as HTMLElement).scrollTop
        const clientHeight = (e.target as HTMLElement).clientHeight
        const scrollPercent = scrollTop / clientHeight
        setActive(Math.min(features.length - 1, Math.round(scrollPercent)))
        const $container = document.getElementById('feature-section')

        if (scrollPercent - (features.length - 1) > 0.005) {
          if (new Date().getTime() - lastLeave > 500) {
            setLastLeave(new Date().getTime())
            setTimeout(() => {
              if ($container) {
                $container.scrollTo({
                  top: 0,
                  behavior: 'instant',
                })
              }
            }, 800)
            const $tradeSection = document.getElementById('trade-section')
            if ($tradeSection) {
              $tradeSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              })
            }
          }
        }
      }}
    >
      {features.map((item, idx) => (
        <div
          key={idx}
          className='flex h-screen snap-start items-center justify-between px-[120px] py-[80px]'
        >
          <div className='max-w-[566px]'>
            <div className='mb-14 text-[80px] leading-[88px] font-light tracking-widest'>
              {t('web.home.trade.feature', { defaultValue: 'Core Features' })}
            </div>
            <h2
              className={twMerge(
                'via-brand via-46.43% to-brand mb-4 bg-gradient-to-r from-white from-0% bg-clip-text text-[44px] font-bold text-transparent transition-all duration-700',
                idx === active ? 'translate-y-0' : 'translate-y-20'
              )}
            >
              {t(item.title)}
            </h2>
            <h3
              className={twMerge(
                'text-t3 mb-14 min-h-[102px] text-2xl leading-[140%] transition-all delay-200 duration-700',
                idx === active ? 'translate-y-0' : 'translate-y-20'
              )}
            >
              {t(item.desc)}
            </h3>
            <div
              className={twMerge(
                'pager space-x-4 transition-all delay-400 duration-700',
                idx === active ? 'translate-y-0' : 'translate-y-20'
              )}
            >
              <button
                className={twMerge(
                  'inline-flex size-12 cursor-pointer items-center justify-center rounded-xl transition-all',
                  idx === 0
                    ? 'border-b1 border hover:bg-white/10'
                    : 'bg-brand hover:bg-brand/80'
                )}
                onClick={() => {
                  const $container = document.getElementById('feature-section')
                  if (idx == 0) {
                    const $homeSection = document.getElementById('home-section')
                    if ($homeSection) {
                      $homeSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      })
                    }
                    if ($container) {
                      $container.scrollTo({
                        top: 0,
                        behavior: 'instant',
                      })
                    }
                    return
                  }
                  if ($container) {
                    $container.scrollTo({
                      top: (active - 1) * $container.clientHeight,
                      behavior: 'smooth',
                    })
                  }
                }}
              >
                <ChevronLeft className='size-6' />
              </button>
              <button
                className={twMerge(
                  'inline-flex size-12 cursor-pointer items-center justify-center rounded-xl transition-all',
                  idx === features.length - 1
                    ? 'border-b1 border hover:bg-white/10'
                    : 'bg-brand hover:bg-brand/80'
                )}
                onClick={() => {
                  const $container = document.getElementById('feature-section')
                  if (idx == features.length - 1) {
                    const $tradeSection =
                      document.getElementById('trade-section')
                    if ($tradeSection) {
                      $tradeSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                      })
                    }
                    if ($container) {
                      $container.scrollTo({
                        top: 0,
                        behavior: 'instant',
                      })
                    }
                    return
                  }
                  if ($container) {
                    $container.scrollTo({
                      top: (active + 1) * $container.clientHeight,
                      behavior: 'smooth',
                    })
                  }
                }}
              >
                <ChevronRight className='size-6' />
              </button>
            </div>
          </div>
          <div
            className={twMerge(
              'bg-p2 mr-10 inline-flex size-[512px] items-center justify-center rounded-[30px] transition-all duration-700',
              idx === active ? 'translate-y-0' : 'translate-y-20'
            )}
          >
            <img
              src={`/home/feature-${idx + 1}.png`}
              alt={t(item.title)}
              width={320}
              height={320}
            />
          </div>
        </div>
      ))}
      <div className='pointer-events-none sticky inset-0 inline-flex h-full w-full items-center justify-end'>
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
