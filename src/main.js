import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './stores/index'

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
