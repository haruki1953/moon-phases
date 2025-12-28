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
// 窄屏
// 左右需空出的距离
const layoutSmallXDistanceNeedFree = 20 as const
// 上下需空出的距离
const layoutSmallYDistanceNeedFree = 20 as const

const windowSize = useWindowSize()

// 控制缩放
const zoomControl = useZoomControl()
const { controlZoomVal } = zoomControl

// 控制旋转
const moonRotation = useMoonRotation()

// 内容布局
const isLayoutBig = computed(() => {
  const ratio = windowSize.width.value / windowSize.height.value
  return ratio > 1.3 && windowSize.width.value > 600
})

const contentSizeOnLayoutBig = computed(() => {
  const usableWidth = windowSize.width.value - layoutBigXDistanceNeedFree * 2
  const usableHeight = windowSize.height.value - layoutBigYDistanceNeedFree * 2

  const baseSize = Math.min(usableWidth, usableHeight)
  if (baseSize <= 0) return undefined

  return `${baseSize * controlZoomVal.value}px` as const
})

const contentSizeOnLayoutSmall = computed(() => {
  const usableWidth = windowSize.width.value - layoutSmallXDistanceNeedFree * 2
  const usableHeight =
    windowSize.height.value - layoutSmallYDistanceNeedFree * 2

  const baseSize = Math.min(usableWidth, usableHeight)
  if (baseSize <= 0) return undefined

  return `${baseSize * controlZoomVal.value}px` as const
})
</script>

<template>
  <div>
    <!-- 宽屏 中间为内容 两侧为按钮 -->
    <!-- 响应式TODO -->
    <!-- 屏幕宽除以高大于某值可配置 且 屏幕宽度需大于 600 -->
    <div v-if="isLayoutBig">
      <!-- w-max 目的就是在放大时让内容撑开，以显示横向滚动条 -->
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
            width: contentSizeOnLayoutBig,
          }"
        >
          <!-- MoonPhasesCalendarWheel 中有比例显示，所以不需要显式得设置高度，根据计算指定maxWidth来控制高度已实现 -->
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
    <!-- 窄屏 内容 按钮 需整体居中 TODO -->
    <!-- 需根据缩放值缩放（1到3倍） -->
    <!-- 内容默认宽度为屏幕宽度（有一些边距） -->
    <!-- 按钮在内容下方，为三列 -->
    <!-- 左列 -->
    <!-- 中列 MoonButtonGroupZoom MoonButtonGroupDarkProject -->
    <!-- 右列 -->
    <div v-else>
      <div class="relative w-max min-w-full">
        <div class="flex min-h-screen items-center justify-center">
          <div
            class="transition-all duration-500"
            :style="{
              width: contentSizeOnLayoutSmall,
            }"
          >
            <!-- 内容 -->
            <div class="">
              <div class="mx-4 mb-10 mt-4">
                <MoonPhasesCalendarWheel :moonRotation="moonRotation" />
              </div>
            </div>
            <!-- 按钮组 -->
            <div v-if="false">
              <div class="flex items-center justify-center">
                <!-- 左列 -->
                <div>
                  <MoonButtonGroupLeft :moonRotation="moonRotation" />
                </div>
                <!-- 中列 MoonButtonGroupZoom MoonButtonGroupDarkProject -->
                <div>
                  <MoonButtonGroupZoom :zoomControl="zoomControl" />
                </div>
                <div>
                  <MoonButtonGroupDarkProject />
                </div>
                <!-- 右列 -->
                <div>
                  <MoonButtonGroupRight :moonRotation="moonRotation" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 按钮组 -->
        <div class="absolute bottom-0 left-0 right-0">
          <div class="flex items-end justify-between">
            <!-- 左 -->
            <div class="flex items-end">
              <div>
                <MoonButtonGroupLeft :moonRotation="moonRotation" />
              </div>
              <div>
                <MoonButtonGroupZoom :zoomControl="zoomControl" />
              </div>
            </div>
            <!-- 右 -->
            <div class="flex items-end">
              <div>
                <MoonButtonGroupDarkProject />
              </div>
              <div>
                <MoonButtonGroupRight :moonRotation="moonRotation" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
