import Vue from 'vue'
import App from './App.vue'
import router from './routers/router'
import store from './stores/store'
import $axios from 'axios'
import VueSocketIO from 'vue-socket.io'

Vue.config.productionTip = false
Vue.prototype.$axios = $axios


Vue.use(new VueSocketIO({
  debug: true,
  connection: 'http://a.itying.com?roomid=1',
  vuex: {
    store
  }
}))
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

