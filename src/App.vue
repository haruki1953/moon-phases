<script setup lang="ts">
import { useDark } from '@vueuse/core'
import { computed, ref } from 'vue'
import { darkTheme, lightTheme } from 'naive-ui'
import {
  provideAppMainElScrollbar,
  useFirstDataLoadingAndAnimationMaskClose,
  type AppMainElScrollbar,
} from './composables'
import type { ElScrollbar } from 'element-plus'
import { appName } from './config'
import { useSeoMeta } from '@unhead/vue'

useSeoMeta({
  titleTemplate: (titleChunk) => {
    const siteName = appName
    if (titleChunk == null) {
      return siteName
    }
    return `${titleChunk} - ${siteName}`
  },
})

// 控制首次数据的加载，以及加载动画遮罩的关闭
useFirstDataLoadingAndAnimationMaskClose({
  dataFirstLoadService: async () => {},
})

const isDark = useDark()

// el滚动条的组件实例。【251017】不再使用HTML页面级滚动，使用el滚动条
const appMainElScrollbar: AppMainElScrollbar = ref(null)
provideAppMainElScrollbar(appMainElScrollbar)
</script>

<template>
  <!-- NConfigProvider 主题控制 国际化控制 -->
  <NConfigProvider
    :theme="isDark ? darkTheme : lightTheme"
  >
    <!-- ElConfigProvider 国际化控制 -->
    <ElConfigProvider>
      <ElScrollbar
        ref="appMainElScrollbar"
        height="100vh"
        class="appMainElScrollbar"
      >
        <RouterView></RouterView>
      </ElScrollbar>
    </ElConfigProvider>
  </NConfigProvider>
</template>

<style scoped lang="scss"></style>
