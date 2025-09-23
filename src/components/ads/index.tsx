import { tradeUrl } from '../../constant'

export const LaunchAd = () => {
  return (
    <div className='relative max-h-34 overflow-hidden bg-[#7878FA]'>
      <div className='mx-auto flex max-w-[1440px] items-center justify-between px-4 md:px-30'>
        <div>
          <p className='text-xl'>Unlock Financial Freedom</p>
          <p className='text-base font-light'>
            Self-Custody · Omnichain Liquidity · CEX-Level Experience
          </p>
        </div>

        <div className='flex max-h-34 items-center gap-30'>
          <img className='w-[14.625rem]' src={'/home/antex-3d-icon.png'} />
          <a href={tradeUrl} className='cursor-pointer'>
            <button className='flex cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-white px-7 py-4 text-base text-black transition-all duration-700 hover:bg-[#e5e5e5]'>
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
      </div>
    </div>
  )
}
