export const isProd = false

export const medias = {
  telegram: 'https://t.me/AntX_DEX',
  x: 'https://x.com/AntX_Fi',
  twitter: 'https://x.com/AntX_Fi',
  medium: 'https://medium.com/@AntX_Fi',
  gitbook: 'https://docs.antex.ai/',
  linkTr: 'https://linktr.ee/antex.ai',
  discord: 'https://discord.gg/AntX',
}

export const env = {
  SYSTEM_NAME: 'AntX',
}

export const tradeUrl = isProd
  ? 'https://app.antex.ai'
  : 'https://testnet.antex.ai'

// src/config/seo.ts
export const SEO_CONFIG = {
  title:
    'AntX | Fully On-Chain Perpetual Exchange with Orderbook & Native Oracle',
  description:
    'AntX is a fully decentralized perpetual exchange powered by an on-chain orderbook, oracle network, and cross-chain protocol. Trade with CEX-like performance, while keeping full custody of your assets.',
  keywords:
    'AntX, AntX Exchange, Decentralized Perpetual Exchange, Perp DEX, On-chain Orderbook, Native Oracle Network, Cross-chain Liquidity, Trade Crypto Perps, Self-Custody Crypto Trading',
  url: 'https://antex.ai/',
  image: 'https://antex.ai/poster/AntX_poster.png',
  type: 'website',
  locale: 'en_US',
  twitter: {
    card: 'summary_large_image',
    site: 'https://x.com/AntX_Fi',
    creator: '@AntX_Fi',
  },
  apple: {
    appName: 'AntX',
    appId: 'com.antx.app',
  },
  robots: 'index, follow',
}
