import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import './plugins/element.js'

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

// noinspection JSUnusedGlobalSymbols
Vue.prototype.$spring_boot_api = 'http://localhost:18080';
