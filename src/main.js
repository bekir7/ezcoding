import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './styles.css'
import 'bootstrap'
import router from './router'
import i18n from "./i18n"

createApp(App).use(router).use(i18n).mount('#app')
