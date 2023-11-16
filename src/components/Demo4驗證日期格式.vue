<template>
  <section class="bg-gainsboro mb-3 p-10">
    <h2 class="text-20 mb-3">4. 驗證日期格式 (非嚴格校驗)</h2>

    <div class="d-flex align-items-center mb-3"
         v-for="item in data" :key="item.id">
      <input type="text"
             class="form-control"
             placeholder="請輸入合法的日期"
             :value="item.value"
             @input="updateValue($event,item.name)"
             style="width:250px;">
      <!-- 驗證結果 -->
      <p class="text-20 ms-3"
         :class="item.isValid ? 'text-success' : 'text-danger'">
         {{ item.isValid ? '合法日期' : '不合法日期' }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import dayjs from 'dayjs'

//  data
const data = reactive({
  date1: {
    id: '1',
    name: 'date1',
    value: '2023/11/20 11:10:20',
    isValid: false
  },
  date2: {
    id: '2',
    name: 'date2',
    value: '2023-11-20',
    isValid: false
  },
  date3: {
    id: '3',
    name: 'date3',
    value: '2023.11.20',
    isValid: false
  }
})

onMounted(() => {
  checkInit()
})

function checkInit () {
  Object.keys(data).forEach(keyName => {
    validate(keyName, data[keyName].value)
  })
}
function updateValue (e, keyName) {
  data[keyName].value = e.target.value

  validate(keyName, e.target.value)
}
function validate (keyName, dateValue) {
  data[keyName].isValid = dayjs(dateValue).isValid()
}

</script>

<style lang='scss' scope>

</style>
