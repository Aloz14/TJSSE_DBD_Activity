import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Friends from "../views/Friends.vue";
import Activities from "../views/Activities.vue";
import Detailes from"../views/Detailes.vue"

const routes = [
    {
        path: "/home",
        name: "Home",
        component: Home,
    },

    {
        path: "/friends",
        name: "Friends",
        component: Friends,
    },

    {
        path: "/activities",
        name: "Activities",
        component: Activities,
    },

    {
        path: "/detailes",
        name: "Detailes",
        component: Detailes,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;