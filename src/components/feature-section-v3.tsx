import tradePage from '../assets/antex-trade.png'
import { cn } from '../utils'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

const FeatureItem = React.forwardRef<
  HTMLDivElement,
  { className: string; title: string; description: string }
>(({ className, title, description }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'glow-effect absolute z-5 h-[112px] w-[180px] cursor-pointer rounded-[12px] drop-shadow-lg [--inset:1px] after:z-6',
        className
      )}
    >
      <div className='hover-[linear-gradient(291deg,rgba(0,0,0,0.80)_0%,rgba(28,28,28,0.80)_100%)] hover:[&>h3]:text-brand absolute inset-0.5 z-7 space-y-3 rounded-[10px] bg-[linear-gradient(130deg,rgba(28,28,28,0.80)_0%,rgba(0,0,0,0.80)_100%)] py-6 text-center'>
        <h3 className='text-base leading-4 transition-all'>{title}</h3>
        <div className='text-t3 mx-auto max-w-[136px] text-xs leading-3'>
          {description}
        </div>
      </div>
    </div>
  )
})

FeatureItem.displayName = 'FeatureItem'

export default function FeatureSectionV3() {
  const sectionRef = useRef<HTMLElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const svgRef = useRef<SVGSVGElement>(null)
  const linkContainerRef = useRef<HTMLDivElement>(null)
  const svgOverlayRef = useRef<HTMLDivElement>(null)
  const featureItem1Ref = useRef<HTMLDivElement>(null)
  const featureItem2Ref = useRef<HTMLDivElement>(null)
  const featureItem3Ref = useRef<HTMLDivElement>(null)
  const featureItem4Ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (
      imgRef.current &&
      sectionRef.current &&
      svgRef.current &&
      svgOverlayRef.current &&
      linkContainerRef.current &&
      featureItem1Ref.current &&
      featureItem2Ref.current &&
      featureItem3Ref.current &&
      featureItem4Ref.current
    ) {
      // Set initial states
      gsap.set(imgRef.current, { width: '1200px' })
      gsap.set(svgRef.current, { opacity: 0 })
      gsap.set(svgOverlayRef.current, { scaleX: 1 })
      gsap.set(linkContainerRef.current, { opacity: 0 })

      // Set initial x translate for feature items
      gsap.set(featureItem1Ref.current, { x: -500 }) // Left items start off-screen left
      gsap.set(featureItem2Ref.current, { x: 500 }) // Right items start off-screen right
      gsap.set(featureItem3Ref.current, { x: -500 }) // Left items start off-screen left
      gsap.set(featureItem4Ref.current, { x: 500 }) // Right items start off-screen right

      // Create timeline for sequential animations
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: '40% center',
          end: 'bottom center',
          scrub: 1,
          pin: true,
        },
      })

      // First: animate image width
      tl.to(imgRef.current, {
        width: '38%',
        duration: 0.4,
        ease: 'power2.out',
      })
        // Then: animate SVG opacity to 100% immediately
        .to(
          svgRef.current,
          {
            opacity: 1,
            duration: 0.1,
            ease: 'power2.out',
          },
          '-=0.05'
        )
        // Finally: animate svgOverlay scaleX from 1 to 0
        .to(
          svgOverlayRef.current,
          {
            scaleX: 0,
            duration: 0.5,
            ease: 'power2.out',
          },
          '-=0.02'
        )
        // Then: animate linkContainer opacity from 0 to 1
        .to(
          linkContainerRef.current,
          {
            opacity: 1,
            duration: 0.3,
            ease: 'power2.out',
          },
          '-=0.2'
        )
        // Finally: animate all feature items translateX to 0
        .to(
          [
            featureItem1Ref.current,
            featureItem2Ref.current,
            featureItem3Ref.current,
            featureItem4Ref.current,
          ],
          {
            x: 0,
            duration: 0.4,
            ease: 'power2.out',
          },
          '-=0.1'
        )
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <>
      <h2 className='mx-auto mt-[260px] max-w-[1200px] text-center text-[64px]'>
        Decentralized Exchange with Ultra-Fast Seamless Trading Experience
      </h2>
      <section
        ref={sectionRef}
        id='feature-section-v3'
        className='relative z-1 flex min-h-svh w-full items-center justify-center overflow-x-hidden'
      >
        <img
          ref={imgRef}
          src={tradePage.src}
          id='trade-page-img'
          alt='trade page'
          className='absolute top-1/2 left-1/2 z-3 w-[38%] -translate-1/2'
        />
        <svg
          ref={svgRef}
          className='flow-svg absolute inset-0 m-auto h-full w-full'
          xmlns='http://www.w3.org/2000/svg'
          width={1440}
          height={320}
          viewBox='0 0 1440 320'
          fill='none'
        >
          <path
            d='M432 320L431.69 319.996C425.309 319.835 420.166 314.691 420.004 308.31L420 308L420 168C401.081 168 366.755 171.211 328.994 179.908C291.228 188.607 250.11 202.775 217.554 224.641C165.028 259.919 98.5205 270.241 71.7939 271L2.81277e-06 271L2.92757e-06 269L71.7373 269L73.0078 268.958C100.295 267.921 165.144 257.432 216.438 222.981C249.278 200.924 290.66 186.686 328.545 177.96C366.435 169.233 400.912 166 420 166L420 160.875L9.13432e-06 160.875L9.24913e-06 158.875L420 158.875L420 153C400.912 153 366.435 149.767 328.545 141.04C290.66 132.314 249.278 118.076 216.438 96.0196C165.144 61.568 100.295 51.0789 73.0078 50.0421L71.7373 50.0001L1.54989e-05 50.0001L1.56137e-05 48.0001L71.794 48.0001C98.5205 48.7589 165.028 59.0811 217.554 94.3595C250.11 116.226 291.228 130.393 328.994 139.092C366.755 147.789 401.081 151 420 151L420 12.0001C420 5.47624 425.206 0.1682 431.69 0.00401614L432 0.000109935L1008 0.000186624C1014.63 0.000187506 1020 5.37278 1020 12.0002L1020 151C1038.92 151 1073.24 147.789 1111.01 139.092C1148.77 130.393 1189.89 116.226 1222.45 94.3596C1274.97 59.0812 1341.48 48.759 1368.21 48.0002L1440 48.0002L1440 50.0002L1368.26 50.0002L1366.99 50.0422C1339.7 51.079 1274.86 61.5682 1223.56 96.0197C1190.72 118.076 1149.34 132.314 1111.46 141.04C1073.57 149.767 1039.09 153 1020 153L1020 158.125L1440 158.125L1440 160.125L1020 160.125L1020 166C1039.09 166 1073.57 169.233 1111.46 177.96C1149.34 186.686 1190.72 200.924 1223.56 222.981C1274.86 257.432 1339.7 267.921 1366.99 268.958L1368.26 269L1440 269L1440 271L1368.21 271C1341.48 270.241 1274.97 259.919 1222.45 224.641C1189.89 202.775 1148.77 188.607 1111.01 179.908C1073.24 171.211 1038.92 168 1020 168L1020 308L1020 308.31C1019.83 314.794 1014.52 320 1008 320L432 320ZM1008 318C1013.52 318 1018 313.523 1018 308L1018 12.0002C1018 6.47736 1013.52 2.00019 1008 2.00019L432 2.00011C426.477 2.00011 422 6.47731 422 12.0001L422 308C422 313.523 426.477 318 432 318L1008 318Z'
            fill='#7878FA'
          />
        </svg>
        <div
          ref={svgOverlayRef}
          className='svg-overlay bg-background absolute inset-0 z-2 h-full w-full scale-x-0'
        ></div>

        <div
          ref={linkContainerRef}
          id='link-container'
          className='absolute top-1/2 left-1/2 z-4 flex aspect-[1200/619] w-[38%] -translate-1/2 items-center justify-center bg-black/60'
        >
          <a
            href='https://testnet.antex.ai'
            className='flex cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-white bg-white px-7 py-4 text-base text-black transition-all hover:border-[#8678FD] hover:bg-[#8678FD] hover:text-black hover:shadow-[0_0_100px_100px_rgba(134,120,253,0.03)]'
          >
            <span>Enter AnteX Testnet</span>
            <svg
              width={13}
              height={13}
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
          </a>
        </div>
        <div className='absolute top-1/2 left-1/2 z-5'>
          <FeatureItem
            ref={featureItem1Ref}
            className='feature-left right-[30vw] bottom-[100px]'
            title='Perpetual Trading'
            description='High-leverage, low-latency perpetual contract matching'
          />
          <FeatureItem
            ref={featureItem2Ref}
            className='feature-right bottom-[100px] left-[30vw]'
            title='Spot Trading'
            description='Professional-grade order book spot trading experience'
          />
          <FeatureItem
            ref={featureItem3Ref}
            className='feature-left top-[100px] right-[30vw]'
            title='ALP Liquidity Pool'
            description='Multi-esset unified liquidity pool, reducing slippage'
          />
          <FeatureItem
            ref={featureItem4Ref}
            className='feature-right top-[100px] left-[30vw]'
            title='DeFi Ecosystem'
            description='High-performance L1 supporting lending, options, adex products'
          />
        </div>
      </section>
    </>
  )
}
