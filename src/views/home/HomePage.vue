<script setup lang="ts">
import { useDark, useWindowSize } from '@vueuse/core'
import {
  MoonButtonGroupDarkProject,
  MoonButtonGroupLeft,
  MoonButtonGroupRight,
  MoonButtonGroupZoom,
  MoonPhasesCalendarWheel,
} from './components'
import { useMoonRotation, useZoomControl } from './composables'

// 宽屏
// 左右需空出的距离
const layoutBigXDistanceNeedFree = 100 as const
// 上下需空出的距离
const layoutBigYDistanceNeedFree = 20 as const

const windowSize = useWindowSize()

// 控制缩放
const zoomControl = useZoomControl()
const { controlZoomVal } = zoomControl

// 控制旋转
const moonRotation = useMoonRotation()

// 内容布局
// width 负责保证左右空出
// maxWidth 负责保证上下空出
const contentWidthOnLayoutBig = computed(() => {
  const layoutBigXDistanceNeedFreeX2 = layoutBigXDistanceNeedFree * 2
  const widthNum = windowSize.width.value - layoutBigXDistanceNeedFreeX2
  if (widthNum <= 0) {
    return undefined
  }
  const widthNumWithZoom = widthNum * controlZoomVal.value
  return `${widthNumWithZoom}px` as const
  // return 'calc(100% - 200px)' as const
})
const contentMaxWidthOnLayoutBig = computed(() => {
  const layoutBigYDistanceNeedFreeX2 = layoutBigYDistanceNeedFree * 2
  const maxWidthNum = windowSize.height.value - layoutBigYDistanceNeedFreeX2
  if (maxWidthNum <= 0) {
    return undefined
  }
  const maxWidthNumWithZoom = maxWidthNum * controlZoomVal.value
  return `${maxWidthNumWithZoom}px` as const
})
</script>

<template>
  <div>
    <!-- 宽屏 中间为内容 两侧为按钮 -->
    <div>
      <div
        class="relative flex min-h-screen w-max min-w-full items-center justify-center"
      >
        <!-- 左侧按钮 -->
        <div>
          <MoonButtonGroupLeft
            :moonRotation="moonRotation"
          ></MoonButtonGroupLeft>
        </div>
        <!-- 内容 -->
        <div
          class="my-4 shrink-0 transition-all duration-500"
          :style="{
            width: contentWidthOnLayoutBig,
            maxWidth: contentMaxWidthOnLayoutBig,
          }"
        >
          <MoonPhasesCalendarWheel
            :moonRotation="moonRotation"
          ></MoonPhasesCalendarWheel>
        </div>
        <!-- 右侧按钮 -->
        <div>
          <MoonButtonGroupRight
            :moonRotation="moonRotation"
          ></MoonButtonGroupRight>
        </div>
        <!-- 明暗切换与项目地址按钮 -->
        <div class="absolute bottom-0 right-0">
          <MoonButtonGroupDarkProject></MoonButtonGroupDarkProject>
        </div>
        <!-- 缩放按钮组 -->
        <div class="absolute bottom-0 left-0">
          <MoonButtonGroupZoom :zoomControl="zoomControl"></MoonButtonGroupZoom>
        </div>
      </div>
    </div>
    <!-- 窄屏 上半部分为内容 下半部分为按钮 整体居中 TODO -->
    <!-- <div></div> -->
  </div>
</template>

<style lang="scss" scoped></style>
