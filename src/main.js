import { createApp } from 'vue'
import App from './App.vue'
import BaseBox from './UI/BaseBox.vue'
const app = createApp(App)
app.component('base-box', BaseBox)
app.mount('#app')
