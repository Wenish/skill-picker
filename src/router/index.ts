import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('../components/PageSkillPicker.vue'),
    },
    {
        path: '/theme',
        component: () => import('../components/PageTheme.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router