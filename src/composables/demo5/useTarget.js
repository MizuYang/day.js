import { reactive, toRefs, onMounted } from 'vue'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
// store
import { useDayjsStore } from '@/stores/dayjs.js'

dayjs.extend(relativeTime)

export function useTarget () {
  // store
  const { checkIsValid } = useDayjsStore()

  // data
  const data = reactive({
    aDate: '2023/05/02 10:00',
    bDate: '2023/04/28 09:00',
    from: '',
    to: ''
  })
  const {
    aDate, bDate,
    from, to
  } = toRefs(data)

  onMounted(() => {
    computed()
  })

  function computed () {
    from.value = dayjs(aDate.value).from(bDate.value)
    to.value = dayjs(aDate.value).to(bDate.value)
  }
  function updateDemo (e, keyName) {
    const isValid = checkIsValid(e.target.value)

    if (!isValid) return

    data[keyName] = e.target.value
    computed()
  }

  return {
    ...toRefs(data),
    updateDemo
  }
}
