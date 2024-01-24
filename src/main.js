import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import axios from 'axios'

// 1、导入Vant全部组件
import Vant from 'vant'
// 2. 引入组件样式
import 'vant/lib/index.css';

// 导入amfa-flexible
import 'amfe-flexible'

// 导入路由对象
import {router }from './common/router'

const app = createApp(App)

app.use(Vant)
app.use(router)

app.mount('#app')
