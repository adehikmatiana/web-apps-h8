import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App) //render our root App in App
}).$mount('#app')
