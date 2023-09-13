<template>

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
                
            <div class="sidebar">
                <a href="#" class="active">
                    <i class="fa-solid fa-layer-group"></i>
                    <h3>Dashboard</h3>
                </a>
                
                <a href="#">
                    <i class="fa-solid fa-user"></i>
                    <h3>Information</h3>
                </a>
                
                <a href="#">
                    <i class="fa-solid fa-envelope"></i>
                    <h3>Messages</h3>
                </a>
                
                <a href="#">
                    <i class="fa-solid fa-star"></i>
                    <h3>Reviews</h3>
                </a>
                
                <a href="#">
                    <i class="fa-brands fa-connectdevelop"></i>
                    <h3>Sponsor</h3>
                </a>
                
                <a href="#">
                    <i class="fa-solid fa-chart-simple"></i>
                    <h3>Statistics</h3>
                </a>
            </div>
        </aside>
        
        <!-- Fine della barra laterale -->
        
        <main class="d-flex flex-column">
            <h1 class="text-center">Dashboard</h1>
            <div class="insights container">
                <div class="row">

                    <!-- Messaggi -->
                    <div class="card messages col-md-4 mb-4">
                        <div class="card-body d-flex flex-column align-items-center">
                            <i class="fa-solid fa-envelope-open-text bg-primary text-white p-3 rounded-circle"></i>
                            <h3 class="card-title">Total Messages</h3>
                            <!-- Numero di messaggi da inserire -->
                            <h1 class="text-primary">*Nmess*</h1>
                            <div class="my_progress">
                                <div class="middle">
                                    <svg>
                                        <circle cx="38" cy="38" r="36"></circle>
                                    </svg>
                                    <div class="number">
                                        <p>%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                
                
                    <!-- Recensioni -->
                
                    <div class="card reviews col-md-4 mb-4">
                        <div class="card-body d-flex flex-column align-items-center">
                            <i class="fa-solid fa-ranking-star bg-warning text-white p-3 rounded-circle"></i>
                            <h3 class="card-title">Total Reviews</h3>
                            <!-- Numero di recensioni da inserire -->
                            <h1 class="text-warning">*Nrew*</h1>
                            <div class="my_progress">
                                <div class="middle">
                                    <svg>
                                        <circle cx="38" cy="38" r="36"></circle>
                                    </svg>
                                    <div class="number">
                                        <p>%</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="card user-profile col-md-3 mb-4">
                        <div class="card-body d-flex flex-column align-items-center">
                            <img src="url_dell_immagine" class="profile-picture rounded-circle" alt="Profile Picture">
                            <h3 class="card-title">User's Profile</h3>
                            <h4 class="text-primary">John Doe</h4>
                            <p class="text-muted">Email: johndoe@example.com</p>
                        </div>
                    </div>


                    <div class="card statistics col-md-8 mb-4">
                        <div class="card-body d-flex flex-column align-items-center">
                            <i class="fa-solid fa-envelope-open-text bg-primary text-white p-3 rounded-circle"></i>
                            <h3 class="card-title">statistics</h3>
                            <!-- Numero di messaggi da inserire -->
                            <h1 class="text-primary">statistiche</h1>
                            <div class="my_progress">
                                <div class="middle">
                                    <div class="number">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>



<script>
export default {
    name: 'DashboardMusician'
}
</script>


<style lang="scss" scoped>

.container {
    display: flex;
    gap: 2rem;

    h3{
        font-size: .7rem;
    }

}

aside {
    width: 14rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1.4rem;
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
    background-color: white;
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
}

.active {
    background-color: lightcoral;
    color: blue;
    margin-left: .2rem;

    i {
        margin-left: calc(1rem - 2px);
    }
}

.active::before {
    content: '';
    width: 4px;
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
    margin-left: .3rem;
}

main {
    background-color: orange;
}

.insights {


    div {
        margin-top: 1rem;
        border-radius: 5%;
        padding: .2rem;
        gap: 2rem;

        i {
            padding: .5rem;
            border-radius: 50%;
            font-size: 1rem;
            color: white;
        }

        .middle {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
}
    
</style>