import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import dayjs from 'dayjs'

export const useTodayStore = defineStore('todayStore', () => {
  // data
  const today = ref(dayjs())
  const todayDateOperationMode = ref('todayAdd') // 'todayAdd' || 'todaySubtract'
  const todayModificationNum = ref(1) // 數值
  const todayMdificationUnit = ref('day') // 單位
  const todayResult = ref('')
  const unitSelectionData = reactive({
    day: {
      cn: '天',
      en: 'day'
    },
    week: {
      cn: '週',
      en: 'week'
    },
    month: {
      cn: '月',
      en: 'month'
    },
    year: {
      cn: '年',
      en: 'year'
    },
    hour: {
      cn: '小時',
      en: 'hour'
    },
    minute: {
      cn: '分鐘',
      en: 'minute'
    },
    second: {
      cn: '秒',
      en: 'second'
    },
    millisecond: {
      cn: '毫秒',
      en: 'millisecond'
    }
  })

  // computed
  const isTodayAddMode = computed(() => {
    return todayDateOperationMode.value === 'todayAdd'
  })
  const todayUnitCn = computed(() => {
    return unitSelectionData[todayMdificationUnit.value].cn
  })

  // add(數量, 單位), subtract(數量, 單位)
  function todayDateComputed () {
    const method = isTodayAddMode.value ? 'add' : 'subtract'

    // 計算新增 or 減少
    const newDate = dayjs(today.value)[method](todayModificationNum.value, todayMdificationUnit.value).format('YYYY-MM-DD hh:mm:ss A')
    todayResult.value = newDate
  }

  return {
    today,
    todayDateOperationMode,
    todayModificationNum,
    todayMdificationUnit,
    todayResult,
    isTodayAddMode,
    todayUnitCn,
    unitSelectionData,
    todayDateComputed
  }
})
