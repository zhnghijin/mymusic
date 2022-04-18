import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import filters from "./utils/filters";

import './assets/styles/reset.css';
import './assets/styles/common.css';
const app = createApp(App);
app.config.globalProperties.$filters = filters;
app.use(router).mount("#app");
