import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/About'
import Projects from '@/views/Projects'
import Error from '@/views/Error'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                auth: false,
                title: 'Francisco Llanquipichun'
            }
        },
        {
            path: '/about',
            name: 'about',
            component: About,
            meta: {
                auth: false,
                title: 'About | Francisco Llanquipichun'
            }
        },
        {
            path: '/projects',
            name: 'projects',
            component: Projects,
            meta: {
                auth: false,
                title: 'Projects | Francisco Llanquipichun'
            }
        },
        {
            path: '*',
            name: 'Error',
            component: Error,
            meta: {
                auth: false,
                title: 'Not found'
            }
        }
    ]
})