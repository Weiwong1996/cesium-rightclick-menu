import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import cesiumRightclickMenu from "../cesium-rightclick-menu/index";

Vue.config.productionTip = false

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import less from 'less'
import axios from 'axios'
Vue.prototype.$axios = axios

Vue.use(ElementUI)
Vue.use(less)

Vue.use(cesiumRightclickMenu)

new Vue({
  render: h => h(App),
}).$mount('#app')
