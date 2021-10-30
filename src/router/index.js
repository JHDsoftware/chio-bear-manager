import Vue from 'vue'
import VueRouter from 'vue-router'
import GameRender from "@/page/GameRender";
import Horses from "@/page/Horses";
import HorseDetail from "@/page/HorseDetail";
import EventList from "@/page/Events";
import MyInfo from "@/page/MyInfo";
import Training from "@/page/Training";
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Horses',
        component: Horses
    },
    {
        name: 'GameRender',
        path: '/GameRender',
        component: GameRender,
    },
    {
        name: 'Events',
        path: '/Events',
        component: EventList,
    },
    {
        name: 'Training',
        path: '/Training',
        component: Training,
    },
    {
        name: 'MyInfo',
        path: '/MyInfo',
        component: MyInfo,
    },
    {
        name: 'HorseDetail',
        path: '/HorseDetail',
        component: HorseDetail,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/horses',
        name: 'Horses',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../page/Horses.vue')
    },
    {
        path: '/horseDetail',
        name: 'HorseDetail',
        component: () => import('../page/HorseDetail')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
