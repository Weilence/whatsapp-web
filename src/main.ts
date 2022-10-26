import '@ant-design-vue/pro-layout/dist/style.css';
import 'uno.css'
import '@/styles/index.less';

import { createApp } from 'vue';
import { ConfigProvider } from 'ant-design-vue';
import ProLayout, { PageContainer } from '@ant-design-vue/pro-layout';
import router from './router';
import App from './App.vue';
import config from './components/BaseTable/config';
import axios from 'axios';

config.http = axios.create({
  baseURL: '/api'
})

createApp(App).use(router).use(ConfigProvider).use(ProLayout).use(PageContainer).mount('#app');
