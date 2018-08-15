import Vue from 'vue'

import {
  Container,
  Header,
  Main,
  Footer
} from 'element-ui'

import App from './App'

Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
