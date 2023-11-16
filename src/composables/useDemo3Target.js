import { watchEffect, onMounted } from 'vue'

// store
import { storeToRefs } from 'pinia'
import { useTargetStore } from '@/stores/demo3/targetStore.js'

export function useDemo3Target () {
  // store
  const {
    targetModificationNum,
    targetMdificationUnit
  } = storeToRefs(useTargetStore())
  const {
    targetDateComputed
  } = useTargetStore()

  // watchEffect
  // 更新數值時, 重新計算
  watchEffect(() => {
    if (targetModificationNum.value !== '' && targetMdificationUnit.value) {
      targetDateComputed()
    }
  })

  onMounted(() => {
    // dayjs('2023.11.15 21:15').format('YYYY-MM-DD hh:mm:ss A')
    targetDateComputed()
  })

  return {
  }
}
