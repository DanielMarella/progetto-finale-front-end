<template>
    <!-- <nav>
        <ul>
            <li v-for="link in links">
                <router-link :to="link.route">
                    {{ link.name }}
                </router-link>
            </li>
        </ul>
    </nav> -->


    <!-- navbar -->
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">

        <!-- logo -->
        <a class="navbar-brand" href="#">Nome Sito</a>

        <!-- Toggle btn -->
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>

            <!-- sidebar -->
        <div class="sidebar offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">

            <!-- sidebar header -->
            <div class="offcanvas-header text-white border-bottom">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Nome Sito</h5>
                <button type="button" class="btn-close btn-close-white shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>

                <!-- sidebar body -->
            <div class="offcanvas-body d-flex flex-column flex-lg-row p-4 p-lg-0">
                <ul class="navbar-nav justify-content-center align-items-center flex-grow-1 pe-3">
                    <li class="nav-item mx-2 my-3" v-for="link in links">
                        <router-link :to="link.route" class="text-black text-decoration-none px-3">
                        {{ link.name }}
                        </router-link>
                    </li>
                </ul>
                <div class="d-flex justify-content-center  align-items-center">
                    <ul class="d-flex flex-column  flex-lg-row m-0 gap-3 p-0">
                        <li v-for="(link, index) in logLinks" class="list-unstyled">
                            <router-link :to="link.route" class="text-black text-decoration-none">
                                <button class="btn btn-small btn-primary" v-if="index===0">{{ link.name}}</button>
                                <button class="btn btn-small btn-danger" v-if="index===1">{{ link.name}}</button>

                            </router-link>
                        </li>
                    </ul>
                    
                </div>
                
            </div>
        </div>
    </div>
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
            ],

            logLinks:[
                {
                    route: './Register',
                    name: 'Register'
                },
                {
                    route: './Login',
                    name: 'Login'
                },
            ]
        }
    },

}


</script>




<style lang="scss" scoped>

    @media (max-width: 991px) {
        .sidebar{
            background-color: rgba(255, 255, 255, .15);
            backdrop-filter: blur(10px);
        }
    }
</style>