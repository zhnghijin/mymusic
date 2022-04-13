import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

import './assets/styles/reset.css';
import './assets/styles/common.css';

createApp(App).use(router).mount('#app')
