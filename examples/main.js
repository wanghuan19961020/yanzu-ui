import Vue from 'vue'
import App from './App.vue'
import YanzuUi from '../packages'
Vue.use(YanzuUi)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
