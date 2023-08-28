import { createApp } from 'vue'
import App from './App.vue'
import BaseBox from './UI/BaseBox.vue'
import BaseButton from './UI/BaseButton.vue'
import BaseDialog from './UI/BaseDialog.vue'
const app = createApp(App);
app.component('base-box', BaseBox);
app.component('base-button', BaseButton);
app.component('base-dialog', BaseDialog);
app.mount('#app');
