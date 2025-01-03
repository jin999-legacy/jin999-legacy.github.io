import { defineThemeConfig } from 'vuepress-theme-plume'
import { enNavbar, zhTWNavbar, zhCNNavbar } from './navbar'
import { enNotes, zhTWNotes, zhCNNotes } from './notes'

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

  /* 站点页脚 */
  // footer: {
  //   message: 'Power by <a target="_blank" href="https://v2.vuepress.vuejs.org/">VuePress</a> & <a target="_blank" href="https://theme-plume.vuejs.press">vuepress-theme-plume</a>',
  //   copyright: '',
  // },

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
  // transition: {
  //   page: true,        // 启用 页面间跳转过渡动画
  //   postList: true,    // 启用 博客文章列表过渡动画
  //   appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  // },

  locales: {
    '/': {
      blogText: '文章',
      archiveText: '封存',
      /**
       * @see https://theme-plume.vuejs.press/config/basic/#profile
       */
      profile: {
        avatar: 'https://theme-plume.vuejs.press/plume.png',
        name: 'jin999',
        description: 'jin999',
        // circle: true,
        // location: '',
        // organization: '',
      },

      navbar: zhTWNavbar,
      notes: zhTWNotes,

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
    '/en/': {
      profile: {
        avatar: 'https://theme-plume.vuejs.press/plume.png',
        name: 'jin999',
        description: 'jin999',
      },
      navbar: enNavbar,
      notes: enNotes,
    },
    '/cn/': {
      profile: {
        avatar: 'https://theme-plume.vuejs.press/plume.png',
        name: 'jin999',
        description: 'jin999',
      },
      navbar: zhCNNavbar,
      notes: zhCNNotes,
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