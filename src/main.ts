import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

console.log("Supabase URL:", import.meta.env.VITE_SUPABASE_URL)
console.log("Supabase Key:", import.meta.env.VITE_SUPABASE_ANON_KEY)

createApp(App).use(router).mount('#app')


