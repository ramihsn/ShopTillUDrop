import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../views/LandingPage.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: LandingPage
    },
    {
        path: '/shop',
        name: 'shop',
        component: () => import('../views/ShopPage.vue')
    },
    {
        path: '/categories',
        name: 'categories',
        component: () => import('../views/CategoriesPage.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutPage.vue')
    },
    {
        path: '/contact',
        name: 'contact',
        component: () => import('../views/ContactPage.vue')
    },
    // Add more routes as needed
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;
export { routes };
