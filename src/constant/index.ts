export const isProd = false

export const medias = {
  telegram: 'https://t.me/AnteX_Official',
  x: 'https://x.com/AntexAi',
  twitter: 'https://x.com/AntexAi',
  medium: 'https://medium.com/@antexai',
  gitbook: 'https://docs.antex.ai/',
  linkTr: 'https://linktr.ee/antex.ai',
  discord: 'https://discord.gg/AnteX',
}

export const env = {
  SYSTEM_NAME: 'AnteX',
}

export const tradeUrl = isProd
  ? 'https://app.antex.ai'
  : 'https://testnet.antex.ai'

// src/config/seo.ts
export const SEO_CONFIG = {
  title: 'AnteX | Fully On-Chain Perpetual Exchange with Orderbook & Native Oracle',
  description:
    'AnteX is a fully decentralized perpetual exchange powered by an on-chain orderbook, oracle network, and cross-chain protocol. Trade with CEX-like performance, while keeping full custody of your assets.',
  keywords: 'AnteX, AnteX Exchange, Decentralized Perpetual Exchange, Perp DEX, On-chain Orderbook, Native Oracle Network, Cross-chain Liquidity, Trade Crypto Perps, Self-Custody Crypto Trading',
  url: 'https://antex.ai/',
  image:
    'https://antex.ai/poster/AnteX_poster.png',
  type: 'website',
  locale: 'en_US',
  twitter: {
    card: 'summary_large_image',
    site: 'https://antex.ai/',
    creator: '@AntexAi',
  },
  apple: {
    appName: 'AnteX',
    appId: 'com.antex.app',
  },
  robots: 'index, follow',
}
