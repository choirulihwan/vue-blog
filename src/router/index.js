import { createRouter, createWebHashHistory } from 'vue-router'

import Login from '@/components/layouts/Login.vue'
import Dashboard from '@/components/layouts/Dashboard.vue'

import Home from '@/components/pages/Home.vue'
import About from '@/components/pages/About.vue'
import Contact from '@/components/pages/Contact.vue'
import Posts from '@/components/pages/Posts.vue'
import Post from '@/components/pages/Post.vue'

const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
        children: [
            {
                path: '',
                name: 'home',
                component: Home
            },
            {
                path: '/about',
                name: 'about',
                component: About
            },
            {
                path: '/contact',
                name: 'contact',
                component: Contact
            },
            {
                path: '/posts',
                name: 'posts',
                component: Posts,
                beforeEnter: (to, from) => {
                    console.log("Halaman post")
                }
            },
            {
                path: '/post/:id',
                name: 'post',
                component: Post
            },
        ]
    },   

]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})


router.beforeEach((to, from, next) => {
    const is_authenticated = JSON.parse(localStorage.getItem('authenticated'))

    if (to.name !== 'login' && !is_authenticated) next({ name: "login" });
    if (to.name === 'login' && is_authenticated) next({ name: "home" });
    else 
        next()
});

export default router
