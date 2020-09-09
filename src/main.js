import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/login.css'
import '@/assets/css/FyCss.css'
import echarts from 'echarts'
// import axios from 'axios'
// // import VueAxios from 'vue-axios'

// Vue.use(axios)
Vue.prototype.$echarts = echarts
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
