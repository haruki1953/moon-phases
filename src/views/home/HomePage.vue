<script setup lang="ts">
import { useDark, useWindowSize } from '@vueuse/core'
import { MoonPhasesCalendarWheel } from './components'

// 宽屏
// 左右需空出的距离
const layoutBigXDistanceNeedFree = 100 as const
// 上下需空出的距离
const layoutBigYDistanceNeedFree = 20 as const

const windowSize = useWindowSize()

// width 负责保证左右空出
// width: 'calc(100% - 200px)'
// maxWidth 负责保证上下空出
// maxWidth: contentMaxWidthOnLayoutBig
const contentWidthOnLayoutBig = computed(() => {
  const layoutBigXDistanceNeedFreeX2 = layoutBigXDistanceNeedFree * 2
  return `calc(100% - ${layoutBigXDistanceNeedFreeX2}px)` as const
})
const contentMaxWidthOnLayoutBig = computed(() => {
  const layoutBigYDistanceNeedFreeX2 = layoutBigYDistanceNeedFree * 2
  const maxWidthNum = windowSize.height.value - layoutBigYDistanceNeedFreeX2
  if (maxWidthNum <= 0) {
    return undefined
  }
  return `${maxWidthNum}px` as const
})

const isDark = useDark()
</script>

<template>
  <div>
    <!-- 宽屏 中间为内容 两侧为按钮 -->
    <div>
      <div class="flex h-screen items-center justify-center">
        <!-- 左侧按钮 -->
        <div class="text-color-text">
          <!-- 左单箭头 日期轮走1格 -->
          <div class="m-4 cursor-pointer">
            <RiArrowLeftSLine size="30px"></RiArrowLeftSLine>
          </div>
          <!-- 左双箭头 日期轮走8格 即一个月 -->
          <div class="m-4 cursor-pointer">
            <RiArrowLeftDoubleLine size="30px"></RiArrowLeftDoubleLine>
          </div>
          <!-- 逆时针旋转 整体逆时针旋转45度 -->
          <div class="m-4 cursor-pointer">
            <RiResetLeftLine size="30px"></RiResetLeftLine>
          </div>
          <!-- 明暗切换 -->
          <div class="m-4 cursor-pointer" @click="isDark = !isDark">
            <RiMoonLine v-if="isDark" size="30px"></RiMoonLine>
            <RiSunLine v-else size="30px"></RiSunLine>
          </div>
        </div>
        <!-- 内容 -->
        <div
          class=""
          :style="{
            width: contentWidthOnLayoutBig,
            maxWidth: contentMaxWidthOnLayoutBig,
          }"
        >
          <MoonPhasesCalendarWheel></MoonPhasesCalendarWheel>
          <!-- <div
            class="aspect-square bg-cover bg-center"
            :style="{
              backgroundImage: `url('${app_26_Moon_Calendar_Color_Wheel_3}')`,
            }"
          ></div> -->
        </div>
        <!-- 右侧按钮 -->
        <div class="text-color-text">
          <!-- 右单箭头 -->
          <div class="m-4 cursor-pointer">
            <RiArrowRightSLine size="30px"></RiArrowRightSLine>
          </div>
          <!-- 右双箭头 -->
          <div class="m-4 cursor-pointer">
            <RiArrowRightDoubleLine size="30px"></RiArrowRightDoubleLine>
          </div>
          <!-- 顺时针旋转 -->
          <div class="m-4 cursor-pointer">
            <RiResetRightLine size="30px"></RiResetRightLine>
          </div>
          <!-- 项目地址 -->
          <a
            class="m-4 block cursor-pointer"
            href="https://github.com/haruki1953/moon-phases"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiGithubLine size="30px"></RiGithubLine>
          </a>
        </div>
      </div>
    </div>
    <!-- 窄屏 上半部分为内容 下半部分为按钮 整体居中 TODO -->
    <!-- <div></div> -->
  </div>
</template>

<style lang="scss" scoped></style>
