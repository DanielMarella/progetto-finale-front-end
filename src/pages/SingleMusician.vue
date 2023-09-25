<template>
<div class="container">
    <div class="row">
        <div class="card col-10 mx-auto my-4">
            <div class="card-body">
                <div class="d-flex justify-content-between">
                    <div>
                        <h5 class="card-title">
                            {{ user.name }} {{ musicians.surname }}
                        </h5>
                        
                        <p class="card-text">
                            {{ musicians.address }}
                        </p>
                        
                        <!-- <div class="list-group-item star d-flex">
                            <p v-for="star in 5">
                                <p v-if="averageNum <= star" style="color: #000;">&#9733;</p>
                                <p v-else style="color: #000;">&#9734;</p>
                            </p>
                        </div> -->
                    </div>
                    
                    <div class="imageWrapper">
                        <!--Qui inseriremo la foto del musicista-->
                        <img v-if="musicians.image.startsWith('http')" :src="musicians.image" :alt="user.name + musicians.surname + ' image'">
                        <img v-else :src=" 'http://127.0.0.1:8000/storage/' + musicians.image" :alt="user.name + musicians.surname + ' image'">
                    </div>
                </div>
            </div>

            <ul class="list-group list-group-flush">
                <li class="list-group-item d-flex gap-3">
                    <span>
                        Strumenti:
                    </span>

                    <div v-for="instrument in musicalInstrument">
                        <p>
                            {{ instrument.name }}
                        </p>
                    </div>
                </li>
                
                <li class="list-group-item">
                    Generi: {{ musicians.musical_genre }}
                </li>

                <li class="list-group-item">
                    Prezzo: &euro;{{ musicians.price }}
                </li>

                <li class="list-group-item">
                    Curriculum Vitale:
                    <div class="cvWrapper">
                        <img v-if="musicians.cv.startsWith('http')" :src="musicians.cv" :alt="user.name + musicians.surname + ' cv'">
                    <img v-else :src=" 'http://127.0.0.1:8000/storage/' + musicians.cv" :alt="user.name + musicians.surname + ' cv'">
                    </div>
                    
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

    <ReviewForm />


    <div class="row">
        <div class="card col-10 mx-auto my-4">
            <h2>
                Contatti
            </h2>

            <p>
                Cellulare: {{ musicians.num_phone }}
            </p>

            <p>
                EMAIL
            </p>

            <form>
                <h3>
                    Contatta {{ musicians.surname }} direttamente
                </h3>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text">{{ musicians.surname }} potrà mandare una risposta a questa mail.</div>
                </div>


                <div class="mb-3">
                    <label for="exampleText" class="form-label">Scrivi un messaggio a {{ musicians.surname }}</label>
                    <textarea name="exampleText" id="messageText" class="form-control" rows="6"></textarea>
                </div>
                        
                <button type="submit" class="btn btn-primary mb-3">Manda</button>
            </form>
        </div>
    </div>
</div>

</template>



<script>
import axios from 'axios';
import ReviewForm from './ReviewForm.vue';

export default {
    components:{
        ReviewForm,
    },
    props: [
        'musician',
    ],
    name: 'SingleMusician',
    data() {
        return {
            apiUrl: "http://127.0.0.1:8000/api/musicians",
            apiReview: 'http://127.0.0.1:8000/api/review-form',
            content: '',
            vote: '',
            musicianId: '',
            musicians: [],
        };
    },
    methods: {
        GetMusiciansApi() {
            axios.get(`${this.apiUrl}/${this.$route.params.id}`).then((response) => {
                this.musicians = response.data.results;
                this.musicalInstrument = response.data.results.musical_instruments;
                this.user = response.data.results.user;
                // this.musicians = response.data;
                console.log(this.musicians);
            });
        },

       
    },
    created() {
        this.GetMusiciansApi();

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

    div.cvWrapper{
        img{
            width: 100%;
        }
    }
</style>