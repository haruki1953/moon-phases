<script setup lang="ts">
import {
  app_26_Moon_Calendar_Color_Wheel_1,
  app_26_Moon_Calendar_Color_Wheel_2,
  app_26_Moon_Calendar_Color_Wheel_3,
  appNasaLogo,
} from '@/config'

console.log(appNasaLogo)

const nasaBackGroundImage = computed(() => {
  // 这是svg，很特殊，不能用单引号，只能用双引号，
  // 这导致其不能在template中写，改为在script setup中写即可
  return `url(\"${appNasaLogo}\")`
})
</script>

<template>
  <div class="aspect-square">
    <div class="relative h-full">
      <!-- 图片未加载完成就会显示最底部的加载动画 -->
      <div class="absolute bottom-0 left-0 right-0 top-0">
        <div class="flex h-full items-center justify-center">
          <div class="aspect-[1] w-[95%]">
            <div class="h-full rounded-full bg-color-background-soft"></div>
          </div>
        </div>
      </div>
      <!-- <div class="absolute bottom-0 left-0 right-0 top-0">
        <div class="flex h-full items-center justify-center">
          <div class="aspect-[1] w-[80%]">
            <div class="h-full text-color-background-mute">
              <RiLoader2Line
                size="100%"
                class="loading-spinner-2s"
              ></RiLoader2Line>
            </div>
          </div>
        </div>
      </div> -->
      <!-- 月相日历主要的三个图层 -->
      <div class="absolute bottom-0 left-0 right-0 top-0">
        <div class="relative h-full">
          <!-- 日期轮 -->
          <div class="absolute bottom-0 left-0 right-0 top-0">
            <div
              class="relative h-full bg-cover bg-center"
              :style="{
                'background-image': `url('${app_26_Moon_Calendar_Color_Wheel_3}')`,
              }"
            ></div>
          </div>
          <!-- 月相轮 -->
          <div class="absolute bottom-0 left-0 right-0 top-0">
            <div
              class="relative h-full bg-cover bg-center"
              :style="{
                'background-image': `url('${app_26_Moon_Calendar_Color_Wheel_2}')`,
              }"
            ></div>
          </div>
          <!-- 视图轮 -->
          <div class="absolute bottom-0 left-0 right-0 top-0">
            <div
              class="relative h-full bg-cover bg-center"
              :style="{
                'background-image': `url('${app_26_Moon_Calendar_Color_Wheel_1}')`,
              }"
            ></div>
          </div>
        </div>
      </div>
      <!-- 中心nasa -->
      <div class="absolute bottom-0 left-0 right-0 top-0">
        <div class="flex h-full items-center justify-center">
          <div class="aspect-[2] w-[12%]">
            <a
              class="flow-root h-full w-full cursor-pointer overflow-hidden rounded-full bg-[#dcad00]"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.jpl.nasa.gov/edu/resources/project/make-a-moon-phases-calendar-and-calculator/"
            >
              <div class="mx-[15%] flex h-full items-stretch">
                <div
                  class="nasa-logo flex-1 bg-cover bg-center"
                  :style="{
                    'background-image': nasaBackGroundImage,
                  }"
                ></div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
