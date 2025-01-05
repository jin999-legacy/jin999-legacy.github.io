<script lang="ts" setup>
import VPPagination from 'vuepress-theme-plume/components/Blog/VPPagination.vue'
import VPPostItem from 'vuepress-theme-plume/components/Blog/VPPostItem.vue'
import VPTransitionDrop from 'vuepress-theme-plume/components/Blog/VPTransitionDrop.vue'
import { computed } from 'vue'
import { usePostListControl } from 'vuepress-theme-plume/lib/client/composables/index.js'

const props = defineProps<{
  homeBlog?: boolean
}>()

const {
  postList,
  page,
  totalPage,
  pageRange,
  isLastPage,
  isFirstPage,
  isPaginationEnabled,
  changePage,
} = usePostListControl(computed(() => !!props.homeBlog))

// 按照文章創建時間進行排序，從舊到新
const sortedPostList = computed(() => {
  return postList.value.sort((a, b) => new Date(a.createTime) - new Date(b.createTime))
})
</script>

<template>
  <div class="vp-blog-post-list">
    <slot name="blog-post-list-before" />
    <template v-for="(post, index) in sortedPostList" :key="post.path">
      <VPTransitionDrop appear :delay="index * 0.025">
        <VPPostItem
          :key="post.path"
          :post="post"
          :index="index"
        />
      </VPTransitionDrop>
    </template>
    <slot name="blog-post-list-after" />
    <VPPagination
      v-if="isPaginationEnabled"
      :page="page"
      :total-page="totalPage"
      :page-range="pageRange"
      :is-last-page="isLastPage"
      :is-first-page="isFirstPage"
      @change="changePage"
    />
    <slot name="blog-post-list-pagination-after" />
  </div>
</template>

<style scoped>
.vp-blog-post-list {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 16px;
  margin: 0 auto;
}

@media (min-width: 419px) {
  .vp-blog-post-list {
    gap: 24px;
    padding-bottom: 24px;
  }
}
</style>
