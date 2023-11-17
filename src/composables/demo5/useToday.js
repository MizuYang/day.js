import { ref, onMounted } from 'vue'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

// store
import { useDayjsStore } from '@/stores/dayjs.js'

dayjs.extend(relativeTime)

export function useToday () {
  // store
  const { checkIsValid } = useDayjsStore()

  // data
  const today = ref(dayjs())
  const inputDate = ref(dayjs().add(1, 'day').format('YYYY-MM-DD HH:mm:ss'))
  const fromNow = ref('')
  const toNow = ref('')

  onMounted(() => {
    computed()
  })

  function computed () {
    fromNow.value = dayjs(inputDate.value).fromNow()
    toNow.value = dayjs(inputDate.value).toNow()
  }
  function updateDemo (e) {
    const isValid = checkIsValid(e.target.value)

    if (!isValid) return

    inputDate.value = e.target.value
    computed()
  }

  return {
    today,
    inputDate,
    fromNow,
    toNow,
    updateDemo
  }
}
