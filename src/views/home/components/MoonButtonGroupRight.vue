<script setup lang="ts">
import type { MoonRotationType } from './dependencies'

const props = defineProps<{
  moonRotation: MoonRotationType
}>()

const {
  rotationOverallIncrease,
  rotationWheelBaseIncrease,
  rotationWheelQuickIncrease,
  canRotationWheelBaseIncrease,
  canRotationWheelQuickIncrease,
} = props.moonRotation
</script>

<template>
  <div>
    <!-- 右单箭头 -->
    <div
      class="m-4"
      :class="{
        'cursor-pointer text-color-text': canRotationWheelBaseIncrease,
        'cursor-not-allowed text-color-text-soft':
          !canRotationWheelBaseIncrease,
      }"
      @click="rotationWheelBaseIncrease"
    >
      <RiArrowRightSLine size="30px"></RiArrowRightSLine>
    </div>
    <!-- 右双箭头 -->
    <div
      class="m-4"
      :class="{
        'cursor-pointer text-color-text': canRotationWheelQuickIncrease,
        'cursor-not-allowed text-color-text-soft':
          !canRotationWheelQuickIncrease,
      }"
      @click="rotationWheelQuickIncrease"
    >
      <RiArrowRightDoubleLine size="30px"></RiArrowRightDoubleLine>
    </div>
    <!-- 顺时针旋转 -->
    <div
      class="m-4 cursor-pointer text-color-text"
      @click="rotationOverallIncrease"
    >
      <RiResetRightLine size="30px"></RiResetRightLine>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
