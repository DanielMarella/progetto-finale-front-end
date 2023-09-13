<template>

    <div class="container">
        <div class="row">
            <div class="col-2 b-red">
                <aside>
                    <div class="top">
                        <div class="logo">
                            <img src="" alt="LogoSito">
                            <h2>NomeSito</h2>
                        </div>
                        <div class="close" id="close-btn">
                            <i class="fa-solid fa-xmark"></i>
                        </div>
                    </div>
                    
                    <div class="sidebar">
                        <a href="#" class="active">
                            <i class="fa-solid fa-layer-group"></i>
                            <h3>Dashboard</h3>
                        </a>
                        
                        <a href="#" class="">
                            <i class="fa-solid fa-user"></i>
                            <h3>Information</h3>
                        </a>
                        
                        <a href="#" class="">
                            <i class="fa-solid fa-envelope"></i>
                            <h3>Messages</h3>
                        </a>
                        
                        <a href="#" class="">
                            <i class="fa-solid fa-star"></i>
                            <h3>Reviews</h3>
                        </a>
                        
                        <a href="#" class="">
                            <i class="fa-brands fa-connectdevelop"></i>
                            <h3>Sponsor</h3>
                        </a>
                        
                        <a href="#" class="">
                            <i class="fa-solid fa-chart-simple"></i>
                            <h3>Statistics</h3>
                        </a>
                    </div>
                </aside>

    <div class="container mt-5">
        <aside>
            <div class="top">
                <div class="logo">
                    <img src="" alt="LogoSito">
                    <h2>NomeSito</h2>
                </div>
                <div class="close" id="close-btn">
                    <i class="fa-solid fa-xmark"></i>
                </div>

            </div>
            
            <div class="col b-black">
                <div class="container">
                    <div class="row mx-3 justify-content-between mt-5 mb-5">

                        <!-- Messaggi -->
                        <div class="col-3 rounded-4 b-black">
                            <h1>Messaggi</h1>
                            <div class="row b-red mt-5 flex-nowrap align-items-center">
                                <div class=" ms-2 profile-img-sm">
                                    <img src="" alt="img">
                                </div>
                                <div class="preview ms-2">
                                    <p>testo...</p>
                                </div>
                            </div>

                            <div class="row b-red mt-5 flex-nowrap align-items-center">
                                <div class=" ms-2 profile-img-sm">
                                    <img src="" alt="img">
                                </div>
                                <div class="preview ms-2">
                                    <p>testo...</p>
                                </div>
                            </div>

                            <div class="row b-red mt-5 flex-nowrap align-items-center">
                                <div class=" ms-2 profile-img-sm">
                                    <img src="" alt="img">
                                </div>
                                <div class="preview ms-2">
                                    <p>testo...</p>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col text-end mt-5">
                                    <button class="btn btn-primary btn-sm">Show More</button>
                                </div>
                            </div>
                        </div>

                        <!-- recensioni -->
                        <div class="col-3 rounded-4 b-black">
                            <h1>Recensioni</h1>
                            <div class="row b-red mt-5 mb-5 flex-nowrap align-items-center">

                                <div class=" ms-2 vote justify-content-center">
                                    <p class="mt-2">
                                        voto
                                    </p>
                                </div>
                                <div class="preview ms-2">
                                    <p>testo...</p>
                                </div>
                            </div>


                            <div class="row b-red  mb-5 flex-nowrap align-items-center">

                                <div class=" ms-2 vote justify-content-center">
                                    <p class="mt-2">
                                        voto
                                    </p>
                                </div>
                                <div class="preview ms-2">
                                    <p>testo...</p>
                                </div>
                            </div>

                            <div class="row b-red  mb-5 flex-nowrap align-items-center">
                                <div class=" ms-2 vote justify-content-center">
                                    <p class="mt-2">
                                        voto
                                    </p>
                                </div>
                                <div class="preview ms-2">
                                    <p>testo...</p>
                                </div>
                            </div>


                            <div class="row">
                                <div class="col text-end ">
                                    <button class="btn btn-primary btn-sm">Show More</button>
                                </div>
                            </div>
                        </div>

                        <!-- profilo -->
                        <div class="col-4 rounded-4 b-black ">
                            <div class="container profile-img b-black mt-2">
                                <img src="" alt="img profilo">
                            </div>
                            <hr>
                            <div class="container">
                                <h5 class="mb-2">Nome Musicista</h5>
                                <h5 class="">Strumento</h5>
                                <hr>
                                    <p class="mb-5">Anteprima descrizione </p>
                                    <div class="row">
                                        <div class="col text-end mt-5 mb-3">
                                            <button class="btn btn-primary btn-sm">Show More</button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mx-3">
                        <div class="col rounded-4 mb-5 b-red my_height">
                            Statistics
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
export default {
    name: 'DashboardMusician'
}
</script>


<style lang="scss" scoped>


        aside {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: sticky;
            top: 0;
        }

        .top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 1.4rem;
        }

        .logo img {
            width: 2rem;
            height: 2rem;
        }

        .logo {
            display: flex;
            gap: 2rem;
        }

        .close {
            display: none;
        }

        .sidebar {
            width: 200px;
            display: flex;
            flex-direction: column;
            position: relative;
            top: 3rem;
        }


        a {
            display: flex;
            margin-left: 2rem;
            padding: 0 20px 0 0;
            gap: 1rem;
            align-items: center;
            position: relative;
            height: 3.7rem;
            transition: all 300ms ease;
            
            h3{
                font-size: 1rem;
            }
        }

        .active {
            background-color: lightcoral;
            color: blue;
            margin-left: 0;

            i {
                margin-left: calc(1rem - 3px);
                
            }
        }

        .active::before {
            content: '';
            width: 6px;
            height: 100%;
            background-color: red;
        }

        i {
            font-size: 1.3rem;
            transition: all 300ms ease;
        }

        aside .sidebar a:hover {
            color: orangered;
        }

        aside .sidebar a:hover i {
            margin-left: 2rem;
        }







    .b-red{
        border: 1px solid red;
    }

    .b-black{
        border: 1px solid black;
    }
    
    .vote{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        text-align: center;
        border: 1px solid black;
    }

    .profile-img{
        width: 200px;
        height: 200px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        text-align: center;
    }

    .profile-img-sm{
        width: 50px;
        height: 50px;
        border: 1px solid black;
        border-radius: 50%;
        display: flex;
        align-items: center;
        text-align: center;

    }
    .my_height{
        height: 300px;
    }
</style>