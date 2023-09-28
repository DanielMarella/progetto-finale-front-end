<template>

    <!-- navbar -->
<nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">

        <!-- logo -->
        <a class="navbar-brand text-dark" href="#">Nome Sito</a>

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

                <!-- Login / Register -->
                <div class="d-flex justify-content-center  align-items-center">
                    <ul class="d-flex flex-column  flex-lg-row m-0 gap-3 p-0">
                        <li class="list-unstyled">
                            <button class="btn btn-small btn-primary" ><a href="http://127.0.0.1:8000/">Login</a></button>
                            <button @click="redirectToLaravelLogin" class="btn btn-small btn-danger"><a href="http://127.0.0.1:8000/register">Register</a></button>
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
            // all pages route
            links : [
                {
                    route: './',
                    name: 'HomePage'
                },
                {
                    route: './advance-search',
                    name: 'AdvanceSearch'
                },
            ],
            

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

    a{
        text-decoration: none;
        color: white;
    }
</style>