import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VAnimateCss from 'v-animate-css'
import SuiVue from 'semantic-ui-vue'

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Vue.add(faUserSecret)

// Vue.component('font-awesome-icon', FontAwesomeIcon, faUserSecret)

Vue.use(SuiVue)
Vue.use(VAnimateCss)

Vue.use(BootstrapVue)

var VueScrollTo = require('vue-scrollto')
Vue.use(VueScrollTo)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
