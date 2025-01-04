import { defineThemeConfig } from 'vuepress-theme-plume'
import { enNavbar, zhTWNavbar, zhCNNavbar, jaNavbar } from './navbar'
import { enNotes, zhTWNotes, zhCNNotes, jaNotes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://theme-plume.vuejs.press/plume.png',
  appearance: true,  // 配置 深色模式
  // social: [
  //   { icon: 'github', link: '/' },
  // ],
  // navbarSocialInclude: ['github'], // 允许显示在导航栏的 social 社交链接
  // aside: true, // 页内侧边栏， 默认显示在右侧
  // outline: [2, 3], // 页内大纲， 默认显示 h2, h3

  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  // copyright: true,

  // prevPage: true,   // 是否启用上一页链接
  // nextPage: true,   // 是否启用下一页链接
  // createTime: true, // 是否显示文章创建时间



  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
  // transition: {
  //   page: true,        // 启用 页面间跳转过渡动画
  //   postList: true,    // 启用 博客文章列表过渡动画
  //   appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  // },

  locales: {
    '/': {
      profile: {
        avatar: 'https://theme-plume.vuejs.press/plume.png',
        name: '靜竹林',
        description: '網站創辦人',
        location: '台灣',
        // organization: '靜曄人文教育協會',
      },
      navbar: zhTWNavbar,
      notes: zhTWNotes,
      blogText: '文章',
      archiveText: '封存',
      footer: {
        message: '© 2025 本網站由靜曄人文教育協會維護，內文僅供非商業性用途及禁止重製',
        copyright: 'Licensed under CC BY-NC-ND 4.0.',
      },

    },
    '/en/': {
      /**
      * @see https://theme-plume.vuejs.press/config/basic/#profile
      */
      profile: {
        avatar: 'https://theme-plume.vuejs.press/plume.png',
        name: 'jin999',
        description: 'jin999',
      },
      navbar: enNavbar,
      notes: enNotes,
      footer: {
        message: '© 2025 Jin999 - The Spiritual Serenity. All rights reserved. ',
        copyright: 'Licensed under CC BY-NC-ND 4.0.',
      },
      /**
       * 公告板
       * @see https://theme-plume.vuejs.press/guide/features/bulletin/
       */
      // bulletin: {
      //   layout: 'top-right',
      //   contentType: 'markdown',
      //   title: '',
      //   content: '',
      // },
    },
    '/cn/': {
      profile: {
        avatar: 'https://theme-plume.vuejs.press/plume.png',
        name: 'jin999',
        description: 'jin999',
      },
      navbar: zhCNNavbar,
      notes: zhCNNotes,
      footer: {
        message: '© 2025 本网站由静曄人文教育协会维护，内容仅供非商业用途，禁止转载或复制。',
        copyright: 'Licensed under CC BY-NC-ND 4.0.',
      },
    },
    '/ja/': {
      profile: {
        avatar: 'https://theme-plume.vuejs.press/plume.png',
        name: 'jin999',
        description: 'jin999',
      },
      navbar: jaNavbar,
      notes: jaNotes,
      footer: {
        message: '© 2025 本ウェブサイトは静曄人文教育協会によって運営されています。内容は非商業目的での利用に限り、無断転載および複製を禁止します。',
        copyright: 'Licensed under CC BY-NC-ND 4.0.',
      },
    },
  },
})

const zhTwLocale = {
  selectLanguageName: '繁體中文',
  selectLanguageText: '選擇語言',

  appearanceText: '外觀',
  lightModeSwitchTitle: '切換為淺色主題',
  darkModeSwitchTitle: '切換為深色主題',

  outlineLabel: '此頁內容',
  returnToTopLabel: '返回頂部',
  editLinkText: '編輯此頁',
  contributorsText: '貢獻者',
  prevPageLabel: '上一頁',
  nextPageLabel: '下一頁',
  lastUpdatedText: '最後更新於',

  changelogText: '變更歷史',
  changelogOnText: '於',
  changelogButtonText: '查看全部變更歷史',

  copyrightText: '版權所有',
  copyrightAuthorText: '版權歸屬：',
  copyrightCreationOriginalText: '本文連結：',
  copyrightCreationTranslateText: '本文翻譯自：',
  copyrightCreationReprintText: '本文轉載自：',
  copyrightLicenseText: '許可證：',

  notFound: {
    code: '404',
    title: '頁面未找到',
    quote: '但是，如果你不改變方向，並且一直尋找，最終可能會到達你要去的地方。',
    linkText: '返回首頁',
  },

  homeText: '首頁',
  blogText: '文章',
  tagText: '標籤',
  archiveText: '封存',
  categoryText: '分類',
  archiveTotalText: '{count} 篇',

  encryptButtonText: '確認',
  encryptPlaceholder: '請輸入密碼',
  encryptGlobalText: '本站只允許密碼訪問',
  encryptPageText: '本頁面只允許密碼訪問',

  footer: {
    message:
      'Powered by <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a>',
  },
}