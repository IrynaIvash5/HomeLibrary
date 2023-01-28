import { createApp } from 'vue'
import App from './App.vue'
// import Vuelidate from 'vuelidate'
import {createRouter, createWebHistory} from 'vue-router'
import PageBook from './components/PageBook.vue' 
import MainContentBooks from './components/MainContentBooks.vue'

// Vue.use(Vuelidate)

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: MainContentBooks
        },
        {
            path: '/book',
            component: PageBook
        }
    ]
})

createApp(App).use(router).mount('#app')
