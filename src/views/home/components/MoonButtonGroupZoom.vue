<script setup lang="ts">
import type { ZoomControlType } from './dependencies'

const props = defineProps<{
  zoomControl: ZoomControlType
}>()

const { canZoomIn, canZoomOut, controlZoomIn, controlZoomOut } =
  props.zoomControl
</script>

<template>
  <div>
    <!-- 缩小 -->
    <div
      class="m-4"
      :class="{
        'cursor-pointer text-color-text': canZoomOut,
        'cursor-not-allowed text-color-text-soft': !canZoomOut,
      }"
      @click="controlZoomOut"
    >
      <RiZoomOutLine size="30px"></RiZoomOutLine>
    </div>
    <!-- 放大 -->
    <div
      class="m-4"
      :class="{
        'cursor-pointer text-color-text': canZoomIn,
        'cursor-not-allowed text-color-text-soft': !canZoomIn,
      }"
      @click="controlZoomIn"
    >
      <RiZoomInLine size="30px"></RiZoomInLine>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
