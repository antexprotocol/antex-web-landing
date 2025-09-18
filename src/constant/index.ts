export const isProd = false;

export const medias = {
    telegram: 'https://t.me/AnteX_Official',
    x: 'https://x.com/AntexAi',
    twitter: 'https://x.com/AntexAi',
    medium: 'https://medium.com/@antexai',
    gitbook: 'https://antex-1.gitbook.io/doc/',
    linkTr: 'https://linktr.ee/antex.ai',
    discord: 'https://discord.com/invite/AnteX'
}

export const env = {
    SYSTEM_NAME: 'AnteX'
}

export const tradeUrl = isProd ? "https://app.antex.ai" : "https://testnet.antex.ai"


// src/config/seo.ts
export const SEO_CONFIG = {
    title: "AnteX",
    description: "Delivering a decentralized, secure full-chain trading platform.",
    url: "https://antex.ai/",
    image: "https://raw.githubusercontent.com/antexprotocol/brand/refs/heads/main/media/AnteX_poster.png",
    type: "website",
    locale: "en_US",
    twitter: {
      card: "summary_large_image",
      site: "https://antex.ai/",
      creator: "@AntexAi",
    },
    apple: {
      appName: "AnteX",
      appId: "com.antex.app",
    },
    robots: "index, follow",
  };
  
