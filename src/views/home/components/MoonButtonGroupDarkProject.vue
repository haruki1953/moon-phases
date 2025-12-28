<script setup lang="ts">
import { useDark } from '@vueuse/core'

const isDark = useDark()
</script>

<template>
  <div>
    <!-- 明暗切换 -->
    <div class="m-4 cursor-pointer" @click="isDark = !isDark">
      <RiMoonLine v-if="isDark" size="30px"></RiMoonLine>
      <RiSunLine v-else size="30px"></RiSunLine>
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
</template>

<style lang="scss" scoped></style>
