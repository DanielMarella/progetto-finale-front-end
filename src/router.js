import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue';
import AdvanceSearch from './pages/AdvanceSearch.vue';
import DashboardMusician from './pages/DashboardMusician.vue';
import SingleMusician from './pages/SingleMusician.vue';




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
        },
        {
            path: '/DashboardMusician',
            name: 'DashboardMusician',
            component: DashboardMusician,
        },
        {
            path: '/SingleMusician',
            name: 'SingleMusician',
            component: SingleMusician,
        },



    ]

})


export{router};