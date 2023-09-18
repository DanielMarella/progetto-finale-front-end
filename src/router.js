import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue';
import AdvanceSearch from './pages/AdvanceSearch.vue';
import DashboardMusician from './pages/DashboardMusician.vue';
import SingleMusician from './pages/SingleMusician.vue';
import Register from './pages/Register.vue';


import Login from './pages/Login.vue';






const router= createRouter({
    history: createWebHistory(),
    routes: [

        {
            path: '/',
            name: 'HomePage',
            component: HomePage,
        },
        {
            path: '/advance-search',
            name: 'AdvanceSearch',
            component: AdvanceSearch,
            props: true,
        },
        {
            path: '/DashboardMusician',
            name: 'DashboardMusician',
            component: DashboardMusician,
        },
        {
            path: '/SingleMusician/:id',
            name: 'SingleMusician',
            component: SingleMusician,
        },
        {
            path: '/Register',
            name: 'Register',
            component: Register,
        },
        {
            path: '/Login',
            name: 'Login',
            component: Login,
        },

    ]

})


export{router};