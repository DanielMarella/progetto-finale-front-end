import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/HomePage.vue';
import AdvanceSearch from './pages/AdvanceSearch.vue';
import DashboardMusician from './pages/DashboardMusician.vue';
import SingleMusician from './pages/SingleMusician.vue';
import Register from './pages/Register.vue';
<<<<<<< HEAD
<<<<<<< HEAD
=======
import Login from './pages/Login.vue';
>>>>>>> 05d3d2e1e1ddd1167ebe544668aafd4d4e36133e
=======
import Login from './pages/Login.vue';
>>>>>>> 05d3d2e1e1ddd1167ebe544668aafd4d4e36133e




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
        {
            path: '/Register',
            name: 'Register',
            component: Register,
        },
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 05d3d2e1e1ddd1167ebe544668aafd4d4e36133e
        {
            path: '/Login',
            name: 'Login',
            component: Login,
        },
<<<<<<< HEAD
>>>>>>> 05d3d2e1e1ddd1167ebe544668aafd4d4e36133e
=======
>>>>>>> 05d3d2e1e1ddd1167ebe544668aafd4d4e36133e



    ]

})


export{router};