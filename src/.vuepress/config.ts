import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'SeeRay Lens',
  description: '轻量、自托管、隐私优先的产品分析平台',
  base: process.env.GITHUB_REPOSITORY ? `/${process.env.GITHUB_REPOSITORY.split('/')[1]}/` : '/',
  head: [['link', { rel: 'icon', href: '/favicon.svg' }]],
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: '/logo.svg',
    navbar: [
      { text: '产品能力', link: '/features/' },
      { text: '快速开始', link: '/guide/' },
      { text: 'English', link: '/en/' },
      { text: '文档', link: 'https://github.com/seeray-lens/seeray-lens' },
    ],
    sidebar: {
      '/guide/': ['/guide/', '/guide/installation'],
      '/features/': ['/features/', '/features/analytics', '/features/privacy'],
      '/en/guide/': ['/en/guide/', '/en/guide/installation'],
      '/en/features/': ['/en/features/', '/en/features/analytics', '/en/features/privacy'],
    },
    repo: 'seeray-lens/seeray-lens',
    editLink: false,
  }),
})
