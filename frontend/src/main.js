import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 导入样式
import "bootstrap/dist/css/bootstrap.css"
import "@fortawesome/fontawesome-free/css/all.css"
import "@/assets/css/admin.scss"

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
