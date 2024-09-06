import { createApp } from 'vue'
import App from './App.vue'

import Router from './router/index'
import pinia from './store/index'

import './style/index.scss'
import 'vant/lib/index.css'
import 'virtual:uno.css'

const app = createApp(App)
app.use(Router).use(pinia).mount('#app')
