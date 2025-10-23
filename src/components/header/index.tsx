import React, { useRef, useState } from 'react'
import { tradeUrl } from '../../constant'
import { headerNavConfig } from '../../constant/nav'
import { useIsMobile } from '../ui/use-mobile'

export const HeaderNav: React.FC<{ navConfig: any[] }> = ({ navConfig }) => {
  return (
    <nav className='flex items-center space-x-6 text-sm'>
      {navConfig.map((item, idx) => (
        <NavItem key={idx} item={item} />
      ))}
    </nav>
  )
}

const MobileDrawer: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null)

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[90] bg-black/50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`bg-c2 fixed top-0 right-0 z-[100] h-full w-[280px] backdrop-blur-lg transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className='hover:text-brand absolute top-5 right-5 p-2 text-white transition-colors'
        >
          <svg
            className='h-6 w-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>

        {/* Navigation items */}
        <nav className='mt-20 px-6'>
          {headerNavConfig.map((item, idx) => {
            const hasChildren = item.children && item.children.length > 0
            const isExpanded = expandedItem === idx

            return (
              <div key={idx} className='border-b border-white/10 py-4'>
                {typeof item.link === 'string' && !hasChildren ? (
                  <a
                    href={item.link}
                    className='hover:text-brand flex items-center justify-between text-white transition-colors'
                    onClick={onClose}
                  >
                    <span className='font-medium'>{item.displayName}</span>
                  </a>
                ) : (
                  <>
                    <button
                      onClick={() => setExpandedItem(isExpanded ? null : idx)}
                      className='hover:text-brand flex w-full items-center justify-between text-white transition-colors'
                    >
                      <span className='font-medium'>{item.displayName}</span>
                      {hasChildren && (
                        <svg
                          className={`size-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M19 9l-7 7-7-7'
                          />
                        </svg>
                      )}
                    </button>

                    {/* Submenu */}
                    {hasChildren && (
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isExpanded ? 'mt-3 max-h-[500px]' : 'max-h-0'
                        }`}
                      >
                        {item.children.map((child, i) => (
                          <a
                            key={i}
                            href={child.link}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='hover:text-brand block py-2 pl-4 text-sm text-white/80 transition-colors'
                            onClick={onClose}
                          >
                            {child.displayName}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>
            )
          })}
        </nav>
      </div>
    </>
  )
}

const NavItem: React.FC<{ item: any }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement | null>(null)
  // const timerRef = useRef<number | null>(null);

  const hasChildren = item.children && item.children.length > 0

  return (
    <div
      ref={wrapRef}
      className='relative z-2'
      onMouseMove={() => {
        if (!hasChildren) return
        setIsOpen(true)
      }}
      onMouseLeave={e => {
        if (!hasChildren) return
        const related = e.relatedTarget as Node | null

        if (wrapRef.current && related && wrapRef.current.contains(related)) {
          return
        }
        setIsOpen(false)
      }}
    >
      {/* 主菜单项 */}
      {typeof item.link === 'string' ? (
        <a
          href={item.link}
          className='hover:text-brand flex items-center gap-1 px-3 py-2 font-medium text-white transition-colors'
        >
          {item.displayName}
          {hasChildren && (
            <svg
              className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 9l-7 7-7-7'
              />
            </svg>
          )}
        </a>
      ) : (
        <div className='hover:text-brand flex cursor-pointer items-center gap-1 px-3 py-2 font-medium text-white transition-colors'>
          {item.displayName}
          {hasChildren && (
            <svg
              className={`size-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M19 9l-7 7-7-7'
              />
            </svg>
          )}
        </div>
      )}

      {/* 子菜单 */}
      {hasChildren && (
        <div
          className={`absolute top-full left-0 z-[100] ${isOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
        >
          <div
            className={`border-px mt-2 w-[120px] overflow-hidden rounded-xl border border-white/20 bg-black shadow-lg transition-opacity duration-200`}
          >
            {item.children.map((child: any, i: number) => (
              <a
                key={i}
                href={child.link}
                target='_blank'
                rel='noopener noreferrer'
                className='block px-4 py-2 text-white transition-colors hover:bg-[#6451fb]'
              >
                {child.displayName}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export const Header = () => {
  const isMobile = useIsMobile()
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <div className='px-6 py-5 md:px-[7.5rem]'>
      <div className='mx-auto flex max-w-[1440px] items-center justify-between'>
        <div className='flex items-center gap-10'>
          <img
            className='w-[6.25rem]'
            src='/brand/AntX-logo-Horizontal-White.svg'
          />

          {/* Desktop Navigation - Hidden on mobile */}
          {!isMobile && <HeaderNav navConfig={headerNavConfig} />}
        </div>

        <div className='flex items-center gap-4'>
          {/* Launch App Button - Always visible */}
          <a href={tradeUrl} className='cursor-pointer'>
            <button className='flex cursor-pointer items-center justify-center gap-1 rounded-xl border border-[#8678FD] bg-[#8678FD] px-6 py-2 transition-all'>
              <span className='text-sm'>Launch App</span>
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

          {/* Mobile Menu Button - Only visible on mobile */}
          {isMobile && (
            <button
              onClick={() => setDrawerOpen(true)}
              className='hover:text-brand p-2 text-white transition-colors'
            >
              <svg
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobile && (
        <MobileDrawer
          isOpen={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        />
      )}
    </div>
  )
}
