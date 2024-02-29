import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/components/HomePage.vue";
import ContactUs from "@/components/ContactUs.vue";
import Shop from "@/components/Shop.vue";
import AboutUs from "@/components/AboutUs.vue";

const routes = [
    {
        path: '/',
        name: 'homepage',
        component: HomePage,
    },
    {
        path: '/shop',
        name: 'shop',
        component: Shop,
    },
    {
        path: '/contactus',
        name: 'contactus',
        component: ContactUs,
    },
    {
        path: '/aboutus',
        name: 'aboutus',
        component: AboutUs,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router