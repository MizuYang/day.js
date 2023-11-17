import { ref, onMounted } from 'vue'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

export function useToday () {
  dayjs.extend(relativeTime)

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
    const rules = [
      'YYYY-MM-DD HH:mm:ss', 'YYYY-MM-DD HH:mm', 'YYYY-MM-DD',
      'YYYY/MM/DD HH:mm:ss', 'YYYY/MM/DD HH:mm', 'YYYY/MM/DD',
      'YYYY.MM.DD HH:mm:ss', 'YYYY.MM.DD HH:mm', 'YYYY.MM.DD'
    ]
    const isValid = dayjs(e.target.value, rules, true).isValid()

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
