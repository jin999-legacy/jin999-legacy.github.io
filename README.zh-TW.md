# jin-999

網站使用 [vuepress](https://vuepress.vuejs.org/) 和 [vuepress-theme-plume](https://github.com/pengzhanbo/vuepress-theme-plume) 構建生成。

## Install

```sh
npm i
```

## Usage

```sh
# 啟動開發服務
npm run docs:dev
# 構建生產包
npm run docs:build
# 本地預覽生產服務
npm run docs:preview
# 更新 vuepress 和主題
npm run vp-update
```

## 部署到 GitHub Pages

主題已創建 github actions: `.github/workflows/docs-deploy.yml`，你還需要在 github 倉庫中進行以下設置：

- [ ] `settings > Actions > General`，拉到頁面底部，在 `Workflow permissions` 下，勾選 `Read and write permissions`，並點擊保存按鈕

- [ ] `settings > Pages`, 在 `Build and deployment` 中，`Source` 選擇 `Deploy from a branch`, `Branch` 選擇 `gh-pages`，並點擊保存按鈕
  (首次創建可能沒有`gh-pages`分支，你可以先完成上面的設置後，推送一次代碼到主分支，等待 `github actions` 完成後再進行設置)

- [ ] 修改 `docs/.vuepress/config.ts` 中的 `base` 選項：
  - 如果你準備發佈到 `https://<USERNAME>.github.io/` ，你可以省略這一步，因為  `base` 默認就是 `"/"` 。
  - 如果你準備發佈到 `https://<USERNAME>.github.io/<REPO>/` ，也就是說你的倉庫地址是 `https://github.com/<USERNAME>/<REPO>` ，則將 `base` 設置為 `"/<REPO>/"`。

如需要自定義域名，請查看 [Github Pages 文檔](https://docs.github.com/zh/pages/configuring-a-custom-domain-for-your-github-pages-site/about-custom-domains-and-github-pages)

## 文檔

- [vuepress](https://vuepress.vuejs.org/)
- [vuepress-theme-plume](https://theme-plume.vuejs.press/)
