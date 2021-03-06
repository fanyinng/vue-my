import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)

new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>'
})
