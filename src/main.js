import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faSearch, faChevronUp, faChevronDown, faPlayCircle, faPaperPlane, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebookSquare, faFacebookF, faTwitter, faInstagram, faYoutube, faLinkedinIn, faGooglePlus, faGooglePlusG } from '@fortawesome/free-brands-svg-icons'

library.add(faUserSecret, faSearch, faChevronUp, faChevronDown, faPlayCircle, faFacebookSquare, faFacebookF, faTwitter, faInstagram, faYoutube, faLinkedinIn, faGooglePlus, faGooglePlusG, faPaperPlane, faArrowRight)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)

import BackToTop from 'vue-backtotop'
Vue.use(BackToTop)

import Datetime from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'
Vue.use(Datetime)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
