import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import { useSkillStore } from './store/skill.store'
import './index.css'
import router from './router'

const setup = async () => {
    const app = createApp(App)
    const pinia = createPinia()
    app.use(pinia)
    app.use(router)
    app.mount('#app')
}

setup()
