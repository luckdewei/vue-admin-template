import { createApp } from 'vue';
import App from './App.vue';
import './styles/reset.less';
const app = createApp(App);
import router from '@/router';
import store from '@/store';


app.use(store);
app.use(router);
app.mount('#app');