export const useMoonRotation = () => {
  // 基于月相轮与日期轮的旋转
  const rotationWheelVal = ref(0)
  const rotationWheelValMin = computed(() => 0)
  const rotationWheelValMax = computed(() => 100)
  const rotationWheelBaseStep = computed(() => 1)
  const rotationWheelQuickStep = computed(() => 8 * rotationWheelBaseStep.value)

  // rotationWheelVal 增加
  const canRotationWheelBaseIncrease = computed(
    () => rotationWheelVal.value < rotationWheelValMax.value
  )
  const rotationWheelBaseIncrease = () => {
    rotationWheelVal.value =
      rotationWheelVal.value + rotationWheelBaseStep.value
    if (rotationWheelVal.value > rotationWheelValMax.value) {
      rotationWheelVal.value = rotationWheelValMax.value
    }
  }

  // rotationWheelVal 减少 decrease
  const canRotationWheelBaseDecrease = computed(
    () => rotationWheelVal.value > rotationWheelValMin.value
  )
  const rotationWheelBaseDecrease = () => {
    rotationWheelVal.value =
      rotationWheelVal.value - rotationWheelBaseStep.value
    if (rotationWheelVal.value < rotationWheelValMin.value) {
      rotationWheelVal.value = rotationWheelValMin.value
    }
  }

  // rotationWheelVal 快速增加
  const canRotationWheelQuickIncrease = computed(
    () => rotationWheelVal.value < rotationWheelValMax.value
  )
  const rotationWheelQuickIncrease = () => {
    rotationWheelVal.value =
      rotationWheelVal.value + rotationWheelQuickStep.value
    if (rotationWheelVal.value > rotationWheelValMax.value) {
      rotationWheelVal.value = rotationWheelValMax.value
    }
  }

  // rotationWheelVal 快速减少
  const canRotationWheelQuickDecrease = computed(
    () => rotationWheelVal.value > rotationWheelValMin.value
  )
  const rotationWheelQuickDecrease = () => {
    rotationWheelVal.value =
      rotationWheelVal.value - rotationWheelQuickStep.value
    if (rotationWheelVal.value < rotationWheelValMin.value) {
      rotationWheelVal.value = rotationWheelValMin.value
    }
  }

  // 月相轮的角度系数
  const rotationWheelPhasesAngleCoefficient = computed(() => 360 / 8)
  // 月相轮的角度基础偏移
  const rotationWheelPhasesAngleBaseOffset = computed(
    () => 3 * rotationWheelPhasesAngleCoefficient.value
  )
  // 用于月相轮的旋转角度
  const rotationWheelPhasesAngleTransformRotate = computed(() => {
    const num =
      rotationWheelPhasesAngleBaseOffset.value +
      rotationWheelVal.value * rotationWheelPhasesAngleCoefficient.value
    return `${num}deg` as const
  })

  // 日历轮的角度系数
  const rotationWheelCalendarAngleCoefficient = computed(() => -(360 / 103))
  // 日历轮的角度基础偏移
  const rotationWheelCalendarAngleBaseOffset = computed(
    () => 1.5 * rotationWheelCalendarAngleCoefficient.value
  )
  // 用于日历轮的旋转角度
  const rotationWheelCalendarAngleTransformRotate = computed(() => {
    const num =
      rotationWheelCalendarAngleBaseOffset.value +
      rotationWheelVal.value * rotationWheelCalendarAngleCoefficient.value
    return `${num}deg` as const
  })

  // 整体旋转 无大小限制、无基础偏移
  const rotationOverallVal = ref(0)
  const rotationOverallStep = computed(() => 1)

  // rotationOverallVal 增加
  const rotationOverallIncrease = () => {
    rotationOverallVal.value =
      rotationOverallVal.value + rotationOverallStep.value
  }

  // rotationOverallVal 减少
  const rotationOverallDecrease = () => {
    rotationOverallVal.value =
      rotationOverallVal.value - rotationOverallStep.value
  }

  const rotationOverallAngleCoefficient = computed(() => 360 / 8)

  // 用于整体的旋转角度
  const rotationOverallAngleTransformRotate = computed(() => {
    const num = rotationOverallVal.value * rotationOverallAngleCoefficient.value
    return `${num}deg` as const
  })

  return {
    rotationWheelVal,
    rotationWheelValMin,
    rotationWheelValMax,
    rotationWheelBaseStep,
    rotationWheelQuickStep,

    canRotationWheelBaseIncrease,
    rotationWheelBaseIncrease,
    canRotationWheelBaseDecrease,
    rotationWheelBaseDecrease,

    canRotationWheelQuickIncrease,
    rotationWheelQuickIncrease,
    canRotationWheelQuickDecrease,
    rotationWheelQuickDecrease,

    rotationWheelPhasesAngleTransformRotate,
    rotationWheelCalendarAngleTransformRotate,

    rotationOverallVal,
    rotationOverallStep,
    rotationOverallIncrease,
    rotationOverallDecrease,
    rotationOverallAngleTransformRotate,
  }
}

export type MoonRotationType = ReturnType<typeof useMoonRotation>
