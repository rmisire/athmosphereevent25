import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/Home.vue'
import AboutPage from '../views/About.vue'
import NosServices from '../views/NosServices.vue'
import ContactPage from '../views/Contact.vue'
import GaleriePage from '../views/Galerie.vue'
import NewsLetter from '../views/Newsletter.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/nos-services',
        name: 'NosServices',
        component: NosServices
    },
    {
        path: '/newsletter',
        name: 'Newsletter',
        component: NewsLetter
    },
    {
        path: '/galerie',
        name: 'Galerie',
        component: GaleriePage
        
    },
    {
        path: '/apropos',
        name: 'a-propos',
        component: AboutPage
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactPage
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
