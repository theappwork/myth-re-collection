import {createRouter, createWebHistory} from '@ionic/vue-router';
import {RouteRecordRaw} from 'vue-router';
import HomePage from '@/views/HomePage.vue'
import FiguresPage from '@/views/FiguresPage.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/categories/:slug',
        name: 'Categories',
        component: FiguresPage
    },
    {
        path: '/categories/:slug/figures/:id',
        name: 'Figures',
        component: () => import('@/views/FiguresDetailPage.vue')
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
