import { defineNavbarConfig } from 'vuepress-theme-plume'

export const zhTWNavbar = defineNavbarConfig([
  { text: '首頁', link: '/' },
  { text: '竹林靜語', link: '/blog/' },
  { text: '靈學探微', link: '/blog/' },
  {
    text: '網友精采文章',
    items: [{ text: '範例', link: '/notes/demo/README.md' }]
  },
  { text: '標籤', link: '/blog/tags/' },
  // { text: '封存', link: '/blog/archives/' },
  // {
  //   text: '筆記',
  //   items: [{ text: '範例', link: '/notes/demo/README.md' }]
  // },
])

export const zhCNNavbar = defineNavbarConfig([
  { text: '首页', link: '/cn/' },
  { text: '博客', link: '/cn/blog/' },
  { text: '标签', link: '/cn/blog/tags/' },
  { text: '归档', link: '/cn/blog/archives/' },
  {
    text: '笔记',
    items: [{ text: '示例', link: '/cn/notes/demo/README.md' }]
  },
])

export const enNavbar = defineNavbarConfig([
  { text: 'Home', link: '/en/' },
  { text: 'Blog', link: '/en/blog/' },
  { text: 'Tags', link: '/en/blog/tags/' },
  { text: 'Archives', link: '/en/blog/archives/' },
  {
    text: 'Notes',
    items: [{ text: 'Demo', link: '/en/notes/demo/README.md' }]
  },
])

export const jaNavbar = defineNavbarConfig([
  { text: 'ホーム', link: '/ja/' },
  { text: 'ブログ', link: '/ja/blog/' },
  { text: 'タグ', link: '/ja/blog/tags/' },
  { text: 'アーカイブ', link: '/ja/blog/archives/' },
  {
    text: 'ノート',
    items: [{ text: 'デモ', link: '/ja/notes/demo/README.md' }]
  },
])

