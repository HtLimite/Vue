//封装倒计时
import { ref, computed, onMounted } from 'vue'
// import {dayjs} from 'element-plus'
import dayjs from 'dayjs'

export const useCountDown = () => {
  //1.响应式数据
  const time = ref(0)
  let timer = null
  //2.开始倒计时
  //格式化
  const formatTime = computed(() =>
    dayjs.unix(time.value).format('mm分ss秒')
  )
  const start = (currentTime) => {
    //开始倒计时逻辑
    time.value = currentTime
    timer = setInterval(() => {
      time.value--
    }, 1000)
  }
  //清除定时器
  onMounted(() => {
    //如果timer存在 则清除
    timer && clearInterval(timer)
  })
  return {
    formatTime,
    start
  }
}