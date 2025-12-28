export const useZoomControl = () => {
  // 控制缩放
  const controlZoomVal = ref(1)
  const controlZoomValMax = computed(() => 3)
  const controlZoomValMin = computed(() => 1)
  const controlZoomValStep = computed(() => 0.5)

  const canZoomIn = computed(
    () => controlZoomVal.value < controlZoomValMax.value
  )
  const controlZoomIn = () => {
    controlZoomVal.value = controlZoomVal.value + controlZoomValStep.value
    if (controlZoomVal.value > controlZoomValMax.value) {
      controlZoomVal.value = controlZoomValMax.value
    }
  }
  const canZoomOut = computed(
    () => controlZoomVal.value > controlZoomValMin.value
  )
  const controlZoomOut = () => {
    controlZoomVal.value = controlZoomVal.value - controlZoomValStep.value
    if (controlZoomVal.value < controlZoomValMin.value) {
      controlZoomVal.value = controlZoomValMin.value
    }
  }

  return {
    controlZoomVal,
    canZoomIn,
    controlZoomIn,
    canZoomOut,
    controlZoomOut,
  }
}

export type ZoomControlType = ReturnType<typeof useZoomControl>
