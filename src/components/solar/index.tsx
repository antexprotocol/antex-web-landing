import { useEffect } from 'react'
import { tradeUrl } from '../../constant'
import { cn } from '../../utils'

export const Solar = ({
  duration,
  start,
  className,
  children,
  direction,
}: {
  duration
  start
  className
  children
  direction
}) => {
  return (
    <div
      style={
        {
          // ["--direction"]: direction,
          ['--start' as any]: `${direction * start}deg`,
          ['--to' as any]: `${direction * start + direction * 360}deg`,
          animationDuration: `${duration}s`,
        } as React.CSSProperties
      }
      className={cn(
        'solar-rotator relative origin-center rounded-full border border-[#a397ff]/30',
        className
      )}
    >
      <div className='absolute top-0 left-1/2 -translate-1/2 overflow-hidden rounded-full'>
        {children}
      </div>
    </div>
  )
}

export const XRayPanel = ({ className }: { className: string }) => {
  const updatePosition = e => {
    const circle = document.getElementById('mask-circle')

    circle.setAttribute('cx', e.clientX + 0 + 'px')
    circle.setAttribute('cy', e.clientY + 0 + 'px')
    // document.documentElement.style.setProperty('--x', e.clientX + 'px');
    // document.documentElement.style.setProperty('--y', e.clientY + 'px');
  }
  useEffect(() => {
    document.addEventListener('mousemove', updatePosition)

    return () => {
      document.removeEventListener('mousemove', updatePosition)
    }
  }, [])
  return (
    <>
      <svg
        width='100%'
        height='100%'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={cn(className, '')}
      >
        <rect
          width='100%'
          height='100%'
          fill='url(#pattern0_4823_31859)'
          fillOpacity='0.08'
        />

        <rect
          width='100%'
          height='100%'
          fill='url(#pattern-highlight)'
          mask='url(#mask)'
        />

        <defs>
          <pattern
            id='pattern0_4823_31859'
            patternUnits='userSpaceOnUse'
            patternTransform='matrix(48 0 0 48 712 442)'
            preserveAspectRatio='none'
            viewBox='1.39876e-06 1.39876e-06 96 96'
            width='1'
            height='1'
          >
            <g id='pattern0_4823_31859_inner'>
              <path
                d='M17 17L17 32L15 32L15 17L6.55671e-07 17L7.43094e-07 15L15 15L15 6.55671e-07L17 7.43094e-07L17 15L32 15L32 17L17 17Z'
                fill='#fff'
              />
            </g>
          </pattern>

          <pattern
            id='pattern-highlight'
            patternUnits='userSpaceOnUse'
            patternTransform='matrix(48 0 0 48 712 442)'
            preserveAspectRatio='none'
            viewBox='1.39876e-06 1.39876e-06 96 96'
            width='1'
            height='1'
          >
            <g id='pattern0_4823_31859_panel'>
              <path
                d='M17 17L17 32L15 32L15 17L0 17L0 15L15 15L15 0L17 0L17 15L32 15L32 17L17 17Z'
                fill='rgba(101,81,251,0.3)'
              />
            </g>
          </pattern>
          <mask id='mask'>
            <rect width='1440' height='900' fill='black' />
            <circle id='mask-circle' r='200' fill='white' cx='-200' cy='-200' />
          </mask>
        </defs>
      </svg>
    </>
  )
}

export const SolarLayout = () => {
  return (
    <div className='relative flex items-center justify-center'>
      <div className='absolute top-1/2 left-1/2 z-[2] -mt-10 flex w-full -translate-1/2 flex-col items-center gap-8 text-white'>
        <p className='text-center text-[72px] leading-[1.1] uppercase max-md:text-[32px]'>
          Redefine Trading <br /> with Blockchain
        </p>
        <span className='text-xl font-light text-white/80 max-md:text-xs'>
          Trade Anywhere. Own Everything. Stay Secure.
        </span>
        <a href={tradeUrl} className='cursor-pointer'>
          <button className='flex cursor-pointer items-center justify-center gap-1 rounded-xl border border-white px-7 py-4 transition-all hover:border-[#8678FD] hover:bg-[#8678FD] hover:text-black'>
            <span className='text-base'>Enter AnteX Testnet</span>
            <svg
              width='13'
              height='13'
              viewBox='0 0 13 13'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M12.2857 13L12.2857 1.21429L10.6573 1.21429L0.499992 1.21429'
                stroke='currentColor'
                strokeWidth='1.4'
              />
              <path
                d='M12.2857 1.21434L1.07455 12.4255'
                stroke='currentColor'
                strokeWidth='1.4'
              />
            </svg>
          </button>
        </a>
      </div>
      <div className='relative h-[calc(100vh-78px)] w-screen overflow-hidden rounded-b-[90px] bg-linear-to-t from-[#6451fb] to-[#000000] max-md:h-[calc(100vh-70px)] max-md:rounded-b-[80px]'>
        <XRayPanel className='absolute size-full' />
        <div className='relative z-[1] flex size-full translate-y-[60%] items-center justify-center opacity-40'>
          <Solar
            direction={1}
            duration={Math.random() * 10 + 10}
            start={Math.random() * 90}
            className='absolute aspect-square w-[40%]'
            children={
              <div className='bg-black'>
                <img className='size-6' src='/home/brand-icon/ANTEX.svg' />
              </div>
            }
          />
          <Solar
            direction={-1}
            duration={Math.random() * 10 + 10}
            start={Math.random() * 90}
            className='absolute aspect-square w-[50%]'
            children={
              <div className='bg-black'>
                <img className='size-6' src='/home/brand-icon/USDT.svg' />
              </div>
            }
          />
          <Solar
            direction={1}
            duration={Math.random() * 10 + 10}
            start={Math.random() * 90}
            className='absolute aspect-square w-[60%]'
            children={
              <div className='bg-black'>
                <img className='size-6' src='/home/brand-icon/USDC.svg' />
              </div>
            }
          />
          <Solar
            direction={-1}
            duration={Math.random() * 10 + 10}
            start={Math.random() * 90}
            className='absolute aspect-square w-[70%]'
            children={
              <div className='bg-black'>
                <img className='size-6' src='/home/brand-icon/SOL.svg' />
              </div>
            }
          />
          <Solar
            direction={1}
            duration={Math.random() * 10 + 10}
            start={Math.random() * 90}
            className='absolute aspect-square w-[80%]'
            children={
              <div className='bg-black'>
                <img className='size-6' src='/home/brand-icon/ETH.svg' />
              </div>
            }
          />
          <Solar
            direction={-1}
            duration={Math.random() * 10 + 10}
            start={Math.random() * 90}
            className='absolute aspect-square w-[90%]'
            children={
              <div className='bg-black'>
                <img className='size-6' src='/home/brand-icon/BTC.svg' />
              </div>
            }
          />
        </div>
      </div>
    </div>
  )
}
