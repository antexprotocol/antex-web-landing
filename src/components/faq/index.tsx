import { tradeUrl } from '../../constant'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'

const faqConfig = [
  {
    q: 'How do I start trading on AnteX?',
    a: (
      <>
        Simply connect your crypto wallet (such as MetaMask, Phantom, or
        Backpack) to directly access the trading interface. No account
        registration or identity verification is required.
      </>
    ),
  },
  {
    q: 'How can I get test funds?',
    a: (
      <>
        On{' '}
        <a target='_blank' href={tradeUrl + '/en/faucet'} className='text-brand underline'>
          AnteX Faucet Page
        </a>
        , you can claim 1,000 mock USDT every 24 hours through the Faucet module
        for simulated trading and feature testing.
      </>
    ),
  },
  {
    q: 'What order types does AnteX support?',
    a: (
      <>
        Currently, AnteX supports Market Orders, Limit Orders, Stop-Limit
        Orders, and Stop-Market Orders, providing flexibility for different
        trading strategies.
      </>
    ),
  },
  {
    q: 'What are the trading fees?',
    a: (
      <>
        AnteX adopts a Maker/Taker fee model. Maker orders (adding liquidity)
        incur lower fees, while Taker orders (removing liquidity) are slightly
        higher. Fees are dynamically adjusted based on your trading volume and
        VIP tier.
      </>
    ),
  },
  {
    q: 'Where can I get help if I encounter issues?',
    a: (
      <>
        You can join the official AnteX communities on Discord or Telegram, or
        reach out to our support team at{' '}
        <a
          href='mailto:support@antex.ai'
          target='_blank'
          className='text-brand underline'
        >
          support@antex.ai
        </a>
        .
      </>
    ),
  },
]

export const Faq = () => {
  return (
    <div className='mx-auto max-w-[1440px] px-4 py-4 md:px-30 md:py-30'>
      <div className='mb-16 flex flex-col items-center gap-4'>
        <p className='text-[64px]'>Frequently Asked Questions</p>
        <span className='text-t3 text-2xl font-light'>
          Find answers to the most frequently asked questions about using AnteX.
        </span>
      </div>
      <div className='overflow-hidden rounded-[32px] bg-linear-to-t from-[#000] to-[#666]'>
        <div className='mx-auto mt-px w-[calc(100%-2px)] rounded-[32px] bg-linear-to-t from-[#000] to-[#2f2f2f] px-24 py-14 [&_a]:contents'>
          <Accordion
            type='multiple'
            collapsible
            className='w-full'
            defaultValue='item-1'
          >
            {faqConfig.map(i => {
              return (
                <AccordionItem value={i.q}>
                  <AccordionTrigger
                    className='py-8 text-2xl font-light [&[data-state=open]>svg]:-rotate-45'
                    icon={
                      <svg
                        className='transition'
                        width='41'
                        height='40'
                        viewBox='0 0 41 40'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <circle
                          cx='20.5'
                          cy='20'
                          r='20'
                          fill='url(#paint0_linear_4941_31360)'
                        />
                        <path
                          d='M21 10C21.8286 10 22.5 10.6386 22.5 11.4268V19H30.0732C30.8614 19 31.5 19.6714 31.5 20.5C31.5 21.3286 30.8614 22 30.0732 22H22.5V29.5732C22.5 30.3614 21.8286 31 21 31C20.1714 31 19.5 30.3614 19.5 29.5732V22H11.9268C11.1386 22 10.5 21.3286 10.5 20.5C10.5 19.6714 11.1386 19 11.9268 19H19.5V11.4268C19.5 10.6386 20.1714 10 21 10Z'
                          fill='#7878FA'
                        />
                        <defs>
                          <linearGradient
                            id='paint0_linear_4941_31360'
                            x1='40.5'
                            y1='-5.92593'
                            x2='-25.4259'
                            y2='70'
                            gradientUnits='userSpaceOnUse'
                          >
                            <stop stopOpacity='0' />
                            <stop offset='1' stopColor='#98A0B2' />
                          </linearGradient>
                        </defs>
                      </svg>
                    }
                  >
                    {i.q}
                  </AccordionTrigger>
                  <AccordionContent className='flex flex-col gap-4 text-balance'>
                    {i.a}
                  </AccordionContent>
                </AccordionItem>
              )
            })}
          </Accordion>
        </div>
      </div>
    </div>
  )
}
