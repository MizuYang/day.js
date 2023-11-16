import { watchEffect, onMounted } from 'vue'

// store
import { storeToRefs } from 'pinia'
import { useTodayStore } from '@/stores/demo3/todayStore.js'

export function useDemo3Today () {
  // store
  const {
    todayModificationNum,
    todayMdificationUnit
  } = storeToRefs(useTodayStore())
  const {
    todayDateComputed
  } = useTodayStore()

  // watchEffect
  // 更新數值時, 重新計算
  watchEffect(() => {
    if (todayModificationNum.value !== '' && todayMdificationUnit.value) {
      todayDateComputed()
    }
  })

  onMounted(() => {
    // dayjs('2023.11.15 21:15').format('YYYY-MM-DD hh:mm:ss A')
    todayDateComputed()
  })

  return {
  }
}
