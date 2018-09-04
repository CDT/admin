import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { directive as vClickOutside } from "vue-clickaway"
import Notify from "vue-notifyjs"

// 导入样式
import "bootstrap/dist/css/bootstrap.css"
import "@fortawesome/fontawesome-free/css/all.css"
import "@/assets/css/admin.scss"

// 注册全局组件
// Vue.component("fg-input", FormGroupInput)
// Vue.component("drop-down", DropDown)
// Vue.component("card", Card)
// Vue.component("p-button", Button)

// 注册全局Directive
Vue.directive('click-outside', vClickOutside)

// 注册SideBar和Notify
// Vue.use(SideBar)
Vue.use(Notify)


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
