<template>
<div class="container">
    <div class="row">
        <div class="card col-10 mx-auto my-4">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <div>
                        <h5 class="card-title">
                             {{ musicians.surname }}
                            NOME
                        </h5>
                        
                        <p class="card-text">
                            <!-- {{ musician.address }} -->
                            ADDRESS
                        </p>
                        
                        <p class="card-text">
                            <i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>
                        </p>
                    </div>
                    
                    <div class="imageWrapper">
                        <!--Qui inseriremo la foto del musicista-->
                        <img src="" alt="image">
                    </div>
                </div>
            </div>

            <ul class="list-group list-group-flush">
                <li class="list-group-item">
                    Strumenti
                </li>
                
                <li class="list-group-item">
                    Generi
                </li>
            </ul>

            <div class="card-body">
                <a href="#" class="card-link">
                    Sito Web
                </a>

                <a href="#" class="card-link">
                    Link Social
                </a>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="card col-8 mx-auto my-4">
            <!--Qui inseriremo il curriculum del musicista visualizzato-->
        </div>
    </div>

    <div class="row">
        <div class="card col-10 mx-auto my-4">
            <h3>
                Scrivi una recensione per questo musicista
            </h3>

            <form>
                <div class="mb-3">
                    <i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i>
                </div>

                <div class="mb-3">
                    <label for="exampleText" class="form-label">Dicci di più riguardo NOME COGNOME</label>
                    <textarea name="exampleText" id="messageText" class="form-control" rows="4"></textarea>
                </div>
                        
                <button type="submit" class="btn btn-primary">Pubblica</button>
            </form>
        </div>
    </div>

    <div class="row">
        <div class="card col-10 mx-auto my-4">
            <h2>
                Contatti
            </h2>

            <p>
                NUMERO
            </p>

            <p>
                EMAIL
            </p>

            <form>
                <h3>
                    Contatta il musicista direttamente
                </h3>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text">NOME COGNOME potrà mandare una risposta a questa mail.</div>
                </div>


                <div class="mb-3">
                    <label for="exampleText" class="form-label">Scrivi un messaggio a NOME COGNOME</label>
                    <textarea name="exampleText" id="messageText" class="form-control" rows="6"></textarea>
                </div>
                        
                <button type="submit" class="btn btn-primary">Manda</button>
            </form>
        </div>
    </div>
</div>

</template>



<script>
import axios from 'axios';

export default {
    props: [
        'musician'
    ],

    name: 'SingleMusician',

    data(){
        return{
            apiUrl: "http://127.0.0.1:8000/api/musicians",
            musicians : [],
        }
    },

    methods: {
        GetMusiciansApi(){
            axios.get(`${this.apiUrl}/${this.$route.params.id}`).then((response) => {
            console.log(response.data);
            this.musicians=response.data

            // this.musicians = response.data;
            // console.log(this.musicians);
        })
        }
    },

    created() {
        this.GetMusiciansApi()
    },
}
</script>



<style lang="scss">
    div.imageWrapper{
        img{
            width: 90px;
            height: 90px;
            border-radius: 50%;
            object-fit: cover;
        }
    }
</style>