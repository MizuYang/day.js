import { ref, watchEffect } from 'vue'
import dayjs from 'dayjs'

// 匯入語系
import 'dayjs/locale/zh-tw'
import 'dayjs/locale/ja'

// 匯入 dayjs 的 plugin
import localeData from 'dayjs/plugin/localeData'

// store
import { useDemo1Store } from '@/stores/demo1Store.js'

export function useLang () {
  const { 列出該語系的月份和週 } = useDemo1Store()

  // dayjs 的 plugin 註冊
  dayjs.extend(localeData)
  dayjs().localeData()

  const lang = ref('zh-tw')

  // watchEffect
  // 設定語系
  watchEffect(() => {
    dayjs.locale(lang.value)
    console.log('當前的語系為：', dayjs.locale())

    列出該語系的月份和週()
  })

  return {
    lang
  }
}
