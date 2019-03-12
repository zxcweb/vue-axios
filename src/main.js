import Vue from 'vue'
import ElementUI from 'element-ui';
import App from './App.vue'
import store from './store'
import axios from './axios'
import './registerServiceWorker'
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.prototype.$axios = axios;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
