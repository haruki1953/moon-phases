<script setup lang="ts">
import type { MoonRotationType } from './dependencies'

const props = defineProps<{
  moonRotation: MoonRotationType
}>()

const {
  rotationOverallDecrease,
  rotationWheelBaseDecrease,
  rotationWheelQuickDecrease,
  canRotationWheelBaseDecrease,
  canRotationWheelQuickDecrease,
} = props.moonRotation
</script>

<template>
  <div>
    <!-- 左单箭头 日期轮走1格 -->
    <div
      class="m-4"
      :class="{
        'cursor-pointer text-color-text': canRotationWheelBaseDecrease,
        'cursor-not-allowed text-color-text-soft':
          !canRotationWheelBaseDecrease,
      }"
      @click="rotationWheelBaseDecrease"
    >
      <RiArrowLeftSLine size="30px"></RiArrowLeftSLine>
    </div>
    <!-- 左双箭头 日期轮走8格 即一个月 -->
    <div
      class="m-4"
      :class="{
        'cursor-pointer text-color-text': canRotationWheelQuickDecrease,
        'cursor-not-allowed text-color-text-soft':
          !canRotationWheelQuickDecrease,
      }"
      @click="rotationWheelQuickDecrease"
    >
      <RiArrowLeftDoubleLine size="30px"></RiArrowLeftDoubleLine>
    </div>
    <!-- 逆时针旋转 整体逆时针旋转45度 -->
    <div
      class="m-4 cursor-pointer text-color-text"
      @click="rotationOverallDecrease"
    >
      <RiResetLeftLine size="30px"></RiResetLeftLine>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
