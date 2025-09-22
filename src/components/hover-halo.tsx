import { useEffect } from 'react'

export const HoverHalo = () => {
  const updatePosition = e => {
    document.documentElement.style.setProperty('--x', e.clientX + 'px')
    document.documentElement.style.setProperty('--y', e.clientY + 'px')
  }
  useEffect(() => {
    document.addEventListener('mousemove', updatePosition)

    return () => {
      document.removeEventListener('mousemove', updatePosition)
    }
  }, [])

  return <div className='halo' />
}
