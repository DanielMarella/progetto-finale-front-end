<template>

<div class="col-12 d-flex w-75 m-auto">
    <div class="col-2 b-blu pt-5">
        <nav>
            <ul>
                <li>
                    <button class="btn btn-small btn-primary">Profile</button>
                </li>
                <li>
                    <button class="btn btn-small btn-primary">Edit Profile</button>
                </li>
                <li>
                    <button class="btn btn-small btn-primary">My Messages</button>
                </li>
                <li>
                    <button class="btn btn-small btn-primary">My Reviews</button>
                </li>
                <li>
                    <button class="btn btn-small btn-primary">Statistics</button>
                </li>
            </ul>
        </nav>
    </div>

    <div class="col b-red w-100">
        <div class="col-12 b-blu mb-5">
            <h1 class="mx-4 mt-3 mb-4">
                Hello, *nomeUtente*
            </h1>
        </div>

        <div class="wrapper d-flex flex-wrap">

            <div class="col-8 d-flex ">
                <div class="col-5 b-green mx-4 ">
                    message
                </div>
                <div class="col-5 b-green ms-4">
                    Reviews
                </div>
                

            </div>


            <div class="col-4">
                <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="Immagine Utente">
                    <div class="card-body">
                        <h5 class="card-title">NomeUtente</h5>
                    </div>
                    <hr>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">An item</li>
                        <li class="list-group-item">A second item</li>
                        <li class="list-group-item">A third item</li>
                    </ul>

                    <div class="card-body">
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>
            </div>

            <div class="col-8 d-flex mt-5 ">
                <div class="col-5 mx-4 b-green  my_height">
                    Statistics
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

        .b-blu{
            border: 2px solid blue;
        }

        .b-red{
            border: 2px solid red;
        }

        .b-green{
            border: 2px solid lime;
        }
    

    ul{
        list-style-type: none;
        margin: 0 auto;


        li{
            margin-bottom: 2rem;
            
        }
    }

    nav{
        height: 70vh;
    }



    
</style>