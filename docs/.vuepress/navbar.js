import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhTWNavbar = defineNavbarConfig([
  { text: '首頁', link: '/' },
  { text: '認識我們', link: '/about/' },
  {
    text: '靜竹林文集',
    items: [
      { text: '靜竹林文集(一)', link: '/article/volume_1.md' },
      { text: '靜竹林文集(二)', link: '/article/volume_2.md' },
    ],
  },
  { text: '標籤', link: '/blog/tags/' },
])

export const zhCNNavbar = defineNavbarConfig([
  { text: '首页', link: '/cn/' },
  { text: '认识我们', link: '/cn/about/' },
  {
    text: '静竹林文集',
    items: [
      { text: '静竹林文集(一)', link: '/cn/article/volume_1.md' },
      { text: '静竹林文集(二)', link: '/cn/article/volume_2.md' },
    ],
  },
  { text: '标签', link: '/cn/blog/tags/' },
])

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/en/' },
  { text: 'About Us', link: '/en/about/' },
  {
    text: 'Collections',
    items: [
      { text: 'Volume I', link: '/en/article/volume_1.md' },
      { text: 'Volume II', link: '/en/article/volume_2.md' },
    ],
  },
  { text: 'Tags', link: '/en/blog/tags/' },
])

export const jaNavbar = defineNavbarConfig([
  { text: 'ホーム', link: '/ja/' },
  { text: '私たちについて', link: '/ja/about/' },
  {
    text: '静竹林文集',
    items: [
      { text: '文集（一）', link: '/ja/article/volume_1.md' },
      { text: '文集（二）', link: '/ja/article/volume_2.md' },
    ],
  },
  { text: 'タグ', link: '/ja/blog/tags/' },
])
