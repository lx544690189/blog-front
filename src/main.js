import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vuetify from 'vuetify/lib'
import GeminiScrollbar from 'vue-gemini-scrollbar'
import './main.less'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
Vue.use(mavonEditor)
Vue.use(GeminiScrollbar)

Vue.use(Vuetify)

const opts = {}

export default new Vuetify(opts)

Vue.config.productionTip = false

new Vue({
  vuetify: new Vuetify(opts),
  router,
  store,
  render: h => h(App),
}).$mount('#app')
