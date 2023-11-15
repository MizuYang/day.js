import { onMounted } from 'vue'

// store
import { useDemo1Store } from '@/stores/demo1Store.js'

export function useDemo1 () {
  const { 列出該語系的月份和週 } = useDemo1Store()

  onMounted(() => {
    列出該語系的月份和週()
  })

  return {
  }
}
