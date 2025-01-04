import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  base: '/',
  lang: 'zh-TW',
  locales: {
    '/': {
      title: '靜竹林心靈網站',
      lang: 'zh-TW',
      description: `靜竹林心靈網站－起源於各大網路討論區，
      以心靈、人文、哲學及宗教為主題，提供網友們一個交流的平台。
      曾匯聚數百網友，無論是尋求心靈慰藉或人際交流，皆有所應。
      現轉型為靜態文章形式，以便緣深者尋跡探索，傳遞精神交流的火種。`,
    },
    '/cn/': {
      title: '静竹林心灵网站',
      lang: 'zh-CN',
      description: `静竹林心灵网站－起源于各大网络讨论区，
      以心灵、人文、哲学及宗教为主题，提供网友们一个交流的平台。
      曾汇聚数百网友，无论是寻求心灵慰藉或人际交流，皆有所应。
      现转型为静态文章形式，以便缘深者寻迹探索，传递精神交流的火种。`,
    },
    '/en/': {
      title: 'Jin999 - The Spiritual Serenity',
      lang: 'en-US',
      description: `Originating from various online forums,
      Jin999 focuses on themes of spirituality, humanities, philosophy, and religion,
      providing a platform for meaningful communication among netizens.
      Once a vibrant community that welcomed hundreds of members
      —whether in search of spiritual solace or interpersonal connections
      —it now serves as a repository of static articles.
      This transformation preserves its legacy,
      inviting those with a shared bond to explore,
      reflect, and carry forward the spark of spiritual exchange.`,
    },
    '/ja/': {
      title: '静竹林スピリチュアルウェブ',
      lang: 'ja-JP',
      description: `静竹林は、さまざまなネットフォーラムから発祥し、
      霊性、人文、哲学、宗教をテーマにしたネットユーザーの交流プラットフォームとして成長しました。
      かつては数百人のユーザーが集まり、精神的な慰めや人間関係のつながりを求める方々を温かく迎えていました。
      現在、このサイトは静的な記事形式へと姿を変え、縁ある方々がその足跡をたどりながら、
      精神交流の火種を未来へとつなげる場として存在しています。`,
    },
  },

  bundler: viteBundler(),
  shouldPrefetch: false,
  theme: plumeTheme({
    article: '/article/',
    cache: 'filesystem',
    /* 新增您的部署域名, 有助於 SEO, 生成 sitemap */
    // hostname: 'https://your_site_url',

    /* 文檔倉庫設定，用於 editLink */
    // docsRepo: '',
    // docsDir: 'docs',
    // docsBranch: '',

    /* 頁内資訊 */
    // editLink: true,
    // lastUpdated: true,
    // contributors: true,
    // changelog: false,

    /**
     * 部落格
     * @see https://theme-plume.vuejs.press/config/basic/#blog
     */
    // blog: false, // 禁用部落格
    // blog: {
    //   postList: true, // 是否啟用文章列表頁
    //   tags: true, // 是否啟用標籤頁
    //   archives: true, // 是否啟用歸檔頁
    //   categories: true, // 是否启用分類頁
    //   postCover: 'right', // 文章封面位置
    //   pagination: 15, // 每頁顯示文章數量
    // },

    /**
     * 为 markdown 文件自動添加 frontmatter 設定
     * @see https://theme-plume.vuejs.press/config/basic/#autofrontmatter
     */
    // autoFrontmatter: {
    //   permalink: true,  // 是否生成永久連結
    //   createTime: true, // 是否生成創建時間
    //   title: true,      // 是否生成標題
    // },
    plugins: {
      /**
       * Shiki 程式高亮顯示
       * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
       */
      // shiki: {
      //   // 強烈建議預設代碼塊高亮語言，插件默認加載所有語言會產生不必要的時間開銷
      //   languages: ['shell', 'bash', 'typescript', 'javascript'],
      //   twoslash: true, // 啟用 twoslash
      //   whitespace: true, // 啟用 空格/Tab 高亮
      //   lineNumbers: true, // 啟用行號
      // },

      /* 本地搜索, 默認啟用 */
      search: false,

      /**
       * Algolia DocSearch
       * 啟用此搜索需要將 本地搜索 search 設置為 false
       * @see https://theme-plume.vuejs.press/config/plugins/search/#algolia-docsearch
       */
      // docsearch: {
      //   appId: '',
      //   apiKey: '',
      //   indexName: '',
      // },

      /* 文章字數統計、閱讀時間，設置為 false 則禁用 */
      // readingTime: true,

      /**
       * markdown enhance
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/
       */
      // markdownEnhance: {
      //   demo: true,
      //   chartjs: true,
      //   echarts: true,
      //   mermaid: true,
      //   flowchart: true,
      // },

      /**
       *  markdown power
       * @see https://theme-plume.vuejs.press/config/plugin/markdown-power/
       */
      // markdownPower: {
      //   pdf: true,          // 啟用 PDF 嵌入 @[pdf](/xxx.pdf)
      //   caniuse: true,      // 啟用 caniuse 語法  @[caniuse](feature_name)
      //   plot: true,         // 啟用隱秘文本語法 !!xxxx!!
      //   bilibili: true,     // 啟用嵌入 bilibili視頻 語法 @[bilibili](bid)
      //   youtube: true,      // 啟用嵌入 youtube視頻 語法 @[youtube](video_id)
      //   artPlayer: true,    // 啟用嵌入 artPlayer 本地視頻 語法 @[artPlayer](url)
      //   audioReader: true,  // 啟用嵌入音頻朗讀功能 語法 @[audioReader](url)
      //   icons: true,        // 啟用內置圖標語法  :[icon-name]:
      //   codepen: true,      // 啟用嵌入 codepen 語法 @[codepen](user/slash)
      //   replit: true,       // 啟用嵌入 replit 語法 @[replit](user/repl-name)
      //   codeSandbox: true,  // 啟用嵌入 codeSandbox 語法 @[codeSandbox](id)
      //   jsfiddle: true,     // 啟用嵌入 jsfiddle 語法 @[jsfiddle](user/id)
      //   npmTo: true,        // 啟用 npm-to 容器  ::: npm-to
      //   repl: {             // 啟用 代碼演示容器
      //     go: true,         // ::: go-repl
      //     rust: true,       // ::: rust-repl
      //     kotlin: true,     // ::: kotlin-repl
      //   },
      //   imageSize: 'local', // 啟用 自動填充 圖片寬高屬性，避免頁面抖動
      // },

      /**
       * 在 Markdown 文件中導入其他 markdown 文件內容。
       * @see https://theme-plume.vuejs.press/guide/markdown/include/
       */
      // markdownInclude: true,

      /**
       * Markdown 數學公式
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-math/
       */
      // markdownMath: {
      //   type: 'katex',
      // },

      /**
       * 水印
       * @see https://theme-plume.vuejs.press/guide/features/watermark/
       */
      watermark: true,

      /**
       * 評論 comments
       * @see https://theme-plume.vuejs.press/guide/features/comments/
       */
      // comment: {
      //   provider: '', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
      //   comment: true,
      //   repo: '',
      //   repoId: '',
      //   category: '',
      //   categoryId: '',
      //   mapping: 'pathname',
      //   reactionsEnabled: true,
      //   inputPosition: 'top',
      // },
    },

    /**
     * 加密功能
     * @see https://theme-plume.vuejs.press/guide/features/encryption/
     */
    encrypt: {},
  }),
})
