import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { cn } from '@/utils'

const carouselConfig = [
  {
    title: 'User Asset Self-Custody',
    src: '/home/func/513.svg',
  },
  {
    title: 'Forced Withdrawal Protocol',
    src: '/home/func/512.svg',
  },
  {
    title: 'Premier Liquidity & Ultra-Low Slippage',
    src: '/home/func/516.svg',
  },
]

const Card = ({ title, src }: any) => {
  return (
    <div className='group glow-effect relative z-[1] mx-auto aspect-[430/600] w-[26.875rem] rounded-[32px] after:!bg-linear-to-l after:!from-[#000000] after:!to-[#1C1C1C]'>
      <div className='absolute top-1/2 left-1/2 z-[1] flex w-full -translate-1/2 flex-col items-center'>
        <div className='mb-14 text-center text-2xl text-[#E2E6EE] transition-all duration-400 group-hover:text-[#6451fb]'>
          {title}
        </div>
        <img
          className='size-75 grayscale-100 transition-all duration-400 group-hover:grayscale-0'
          src={src}
        />
        <p className='text-t3 max-w-5/8 text-center text-xl font-light'>
          Assets secured by PoS validators, fully verifiable and always
          user-controlled.
        </p>
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
  const handlePrev = () => {}
  const handleNext = () => {}
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

          <div>
            <Carousel
              className='w-full max-w-[calc(28rem*1.5)]'
              opts={{ align: 'center' }}
            >
              <CarouselContent>
                {carouselConfig?.map((i, index) => {
                  return (
                    <CarouselItem
                      className={cn(
                        'max-w-fit p-0',
                        index == 0 && 'translate-x-3/4',
                        index == carouselConfig?.length - 1 &&
                          '-translate-x-3/4'
                      )}
                      key={i.title}
                    >
                      <Card src={i.src} title={i.title} />
                    </CarouselItem>
                  )
                })}
              </CarouselContent>
              <CarouselPrevious
                onClick={handlePrev}
                className='size-8 border-none [&>svg]:!size-8'
              />
              <CarouselNext
                onClick={handleNext}
                className='size-8 border-none [&>svg]:!size-8'
              />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  )
}
