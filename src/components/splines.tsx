import { SplineLoader } from './spline-loader'

export function LogoSpline({ className }: { className?: string }) {
  return (
    <SplineLoader className={className} scene='/brand-logos/logo.splinecode' />
  )
}

export const KLineSpline = ({ className }: { className?: string }) => {
  return <SplineLoader className={className} scene='/spline/kline.splinecode' />
}

export const FaucetWaveSpline = ({ className }: { className?: string }) => {
  return <SplineLoader className={className} scene='/spline/wave.splinecode' />
}

export const FaucetBallSpline = ({ className }: { className?: string }) => {
  return <SplineLoader className={className} scene='/spline/ball.splinecode' />
}
export const StatsBgSpline = ({ className }: { className?: string }) => {
  return (
    <SplineLoader className={className} scene='/stats/stats-bg-v2.splinecode' />
  )
}
