<template >
    <nav>
        <ul>
            <li v-for="link in links"> 
                <router-link :to="link.route">
                    {{ link.name }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>


<script>

export default {
    name: 'HeaderApp',

    data() {
        return {
            links : [
                {
                    route: './',
                    name: 'HomePage'
                },
                {
                    route: './advance-search',
                    name: 'AdvanceSearch'
                },
                {
                    route: './DashboardMusician',
                    name: 'DashboardMusician'
                },
                {
                    route: './SingleMusician',
                    name: 'SingleMusician'
                },
                {
<<<<<<< HEAD
                    route: './Register',
                    name: 'Register'
=======
                    route: './Login',
                    name: 'Login'
>>>>>>> 05d3d2e1e1ddd1167ebe544668aafd4d4e36133e
                },
            ]
        }
    },

}


</script>




<style lang="scss">
    
</style>