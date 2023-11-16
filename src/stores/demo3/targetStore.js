import { ref, reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import dayjs from 'dayjs'

export const useTargetStore = defineStore('targetStore', () => {
  // data
  const targetDate = ref(dayjs('2023-11-20 21:33:26'))
  const targetDateOperationMode = ref('targetAdd') // 'targetAdd' || 'targetSubtract'
  const targetModificationNum = ref(1) // 數值
  const targetMdificationUnit = ref('day') // 單位
  const targetResult = ref('')
  const isErrorMessageShow = ref(false)
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
  const isTargetAddMode = computed(() => {
    return targetDateOperationMode.value === 'targetAdd'
  })
  const targetUnitCn = computed(() => {
    return unitSelectionData[targetMdificationUnit.value].cn
  })

  // add(數量, 單位), subtract(數量, 單位)
  function targetDateComputed () {
    const method = isTargetAddMode.value ? 'add' : 'subtract'

    // 計算新增 or 減少
    const newDate = dayjs(targetDate.value)[method](targetModificationNum.value, targetMdificationUnit.value).format('YYYY-MM-DD hh:mm:ss A')
    targetResult.value = newDate
  }
  function updateDate (e) {
    const date = dayjs(e.target.value)

    if (isNaN(date.$D)) {
      isErrorMessageShow.value = true
    } else {
      isErrorMessageShow.value = false
      targetDate.value = date
      console.log('賦予直', targetDate.value)
    }
  }

  return {
    targetDate,
    targetDateOperationMode,
    targetModificationNum,
    targetMdificationUnit,
    targetResult,
    isTargetAddMode,
    targetUnitCn,
    unitSelectionData,
    isErrorMessageShow,
    targetDateComputed,
    updateDate
  }
})
