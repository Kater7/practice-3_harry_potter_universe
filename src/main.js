import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Vuex);

new Vue({
    store: new Vuex.Store(store),
    render: function(h) { return h(App) },
}).$mount('#app')