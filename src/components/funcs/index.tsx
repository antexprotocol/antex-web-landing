import { cn } from '@/utils'
import { useState } from 'react'

const carouselConfig = [
  {
    title: 'User Asset Self-Custody',
    src: '/home/func/513.svg',
    description:
      'Assets secured by PoS validators, fully verifiable and always user-controlled.',
  },
  {
    title: 'Seamless Cross-Chain Interoperability',
    src: '/home/func/516.svg',
    description:
      'Native protocol enables secure transfers across major blockchains.',
  },
  {
    title: 'Premier Liquidity & Ultra-Low Slippage',
    src: '/home/func/512.svg',
    description:
      'ALP-powered deep liquidity ensures efficient trades with minimal slippage.',
  },
  {
    title: 'Forced Withdrawal Protocol',
    src: '/home/func/515.svg',
    description:
      'On-chain safeguard guaranteeing asset recovery under any failure.',
  },
]

const Card = ({
  title,
  src,
  description,
  isActive = false,
  index,
  currentIndex,
  onClick,
}: any) => {
  const isPrevious =
    index === (currentIndex - 1 + carouselConfig.length) % carouselConfig.length
  const isNext = index === (currentIndex + 1) % carouselConfig.length

  return (
    <div
      className={cn(
        'absolute top-1/2 left-1/2 flex aspect-[430/600] w-[26.875rem] -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out',
        isActive ? 'z-[5]' : 'z-[1]',
        isPrevious && 'previous-item -translate-x-[calc(50%+60px)] scale-85',
        isNext && 'next-item translate-x-[calc(-50%+60px)] scale-85'
      )}
    >
      <div
        className={cn(
          'group glow-effect h-full w-full cursor-pointer rounded-[32px] after:!bg-linear-to-l after:!from-[#000000] after:!to-[#1C1C1C]',
          isActive && 'glow-animation'
        )}
        onClick={onClick}
      >
        <div
          className={cn(
            'relative z-[4] flex h-full w-full flex-col items-center justify-center'
          )}
        >
          <div
            className={cn(
              'mb-14 text-center text-2xl',
              isActive ? 'text-inherit' : 'group-hover:text-[#6451fb]'
            )}
          >
            {title}
          </div>
          <img
            className={cn(
              'size-75 grayscale-100 transition-all duration-400',
              isActive ? 'gray-scale-animation' : 'group-hover:grayscale-0'
            )}
            src={src}
          />
          <p className='text-t3 max-w-5/8 text-center text-xl font-light'>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
const Union = ({ className }: { className: string }) => {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
    >
      <path
        d='M14 10H24V14H14V24H10V14H0V10H10V0H14V10Z'
        fill='white'
        fillOpacity='0.3'
      />
    </svg>
  )
}
export const Funcs = () => {
  const [current, setCurrent] = useState(0)

  const handleNext = () => {
    setCurrent(prev => (prev + 1) % carouselConfig.length)
  }

  const handlePrevious = () => {
    setCurrent(
      prev => (prev - 1 + carouselConfig.length) % carouselConfig.length
    )
  }

  const handleCardClick = (index: number) => {
    setCurrent(index)
  }

  return (
    <div className='py-4 md:py-30'>
      <div className='mb-16 flex flex-col items-center gap-4'>
        <p className='text-[64px]'>Unparalleled Security</p>
      </div>

      <div className='relative overflow-hidden'>
        <div className='absolute top-1/2 z-0 size-full -translate-y-1/2 text-[120px]'>
          <div className='scroll-bg h-full'></div>
        </div>
        <div className='absolute top-1/2 z-[1] size-full -translate-y-1/2 bg-[linear-gradient(to_right,rgba(255,255,255,0.3)_3px,rgba(0,0,0,0.1)_1px),linear-gradient(to_bottom,rgba(255,255,255,0.3)_3px,rgba(0,0,0,0.1)_1px)] bg-[length:34px_34px] bg-repeat backdrop-blur-[4px]'></div>
        <div className='absolute top-1/2 z-[2] size-full -translate-y-1/2 bg-radial from-black/70 from-0% to-black/95 to-70%' />

        <div className='relative z-[3] mx-auto flex h-full max-w-[1440px] items-center justify-center px-4 md:px-30'>
          <>
            <Union className='absolute top-1/12 right-1/8 opacity-60' />
            <Union className='absolute top-1/3 right-1/16 opacity-60' />
            <Union className='absolute top-3/4 right-1/8 opacity-60' />
            <Union className='absolute top-1/4 left-1/8 opacity-60' />
            <Union className='absolute top-3/4 left-1/16 opacity-40' />
          </>

          <div className='relative flex h-[600px] w-full items-center justify-center'>
            <div className='relative flex h-full w-full max-w-[600px] items-center justify-center'>
              {/* Custom Carousel Container */}
              <div className='relative flex h-full w-full items-center justify-center'>
                {carouselConfig?.map((item, index) => {
                  const isActive = index === current
                  return (
                    <Card
                      key={item.title}
                      src={item.src}
                      title={item.title}
                      description={item.description}
                      isActive={isActive}
                      index={index}
                      currentIndex={current}
                      onClick={() => handleCardClick(index)}
                    />
                  )
                })}
              </div>

              {/* Navigation Buttons */}
              <button
                onClick={handleNext}
                className='absolute top-1/2 left-4 z-[4] flex h-8 w-8 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/50 transition-all duration-200 hover:bg-black/70'
              >
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='text-white'
                >
                  <path
                    d='M15 18L9 12L15 6'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>

              <button
                onClick={handlePrevious}
                className='absolute top-1/2 right-4 z-[4] flex h-8 w-8 -translate-y-1/2 transform cursor-pointer items-center justify-center rounded-full border border-white/20 bg-black/50 transition-all duration-200 hover:bg-black/70'
              >
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  className='text-white'
                >
                  <path
                    d='M9 18L15 12L9 6'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
