<template>
<div class="container">
    <!-- Scheda tecnica musicista -->
    <div class="row">
        <div class="card col-10 mx-auto p-0 my-4">
            <div class="card-header">
                <h3>Schede Musicista</h3>
            </div>
            <div class="card-body row py-0">
                <!-- Scheda di sx-->
                <div class="musicianInfo col-6 d-flex flex-column align-items-center justify-content-around">
                    <h3 class="card-title">
                        {{ user.name }} {{ musicians.surname }}
                    </h3>

                    <div class="imageWrapper">
                        <img v-if="musicians.image.startsWith('http')" :src="musicians.image" :alt="user.name + musicians.surname + ' image'">
                        <img v-else :src=" 'http://127.0.0.1:8000/storage/' + musicians.image" :alt="user.name + musicians.surname + ' image'">
                    </div>
                    
                    <p class="card-text fs-5">
                        {{ musicians.address }}
                    </p>
                </div>

                <!-- Scheda di dx -->
                <div class="musician-skill col-6 border-start">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item d-flex gap-3">
                            <span>
                                Strumenti:
                            </span>

                            <p v-for="instrument in musicalInstrument" class="m-0">
                                {{ instrument.name }}
                            </p>
                        </li>
                        
                        <li class="list-group-item">
                            Generi: {{ musicians.musical_genre }}
                        </li>

                        <li class="list-group-item">
                            Prezzo: &euro;{{ musicians.price }}
                        </li>

                        <li class="list-group-item">
                            <span>Curriculm Vitae</span>
                            <div class="cvWrapper">
                                <img v-if="musicians.cv.startsWith('http')" :src="musicians.cv" :alt="user.name + musicians.surname + ' cv'">
                                <img v-else :src=" 'http://127.0.0.1:8000/storage/' + musicians.cv" :alt="user.name + musicians.surname + ' cv'">
                            </div>   
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Form Recensione --> 
            <div class="card-footer text-center">
                <button type="button" class="btn btn-primary" @click="becomesActiveReview()">Lascia una recensione</button>
                <ReviewForm :class="activeReview"/>
            </div>
        </div>
    </div>

    <!-- Form Messaggio -->
    <div class="row">
        <div class="card col-10 mx-auto my-4 p-0">
            <div class="card-header">
                <h3>Contatti</h3>
            </div>
            <div class="card-body">
                <div class="d-flex justify-content-evenly">
                    <p>
                        Cellulare: {{ musicians.num_phone }}
                    </p>

                    <p>
                        EMAIL : {{ user.email }}
                    </p>
                </div>
                <div class="text-center">
                    <button type="button" class="btn btn-primary " @click="becomesActiveMex()">Contatta il musicista</button>
                </div>
                <ContactForm :class="activeMex"/>
            </div>    
        </div>
    </div>   
</div>

</template>



<script>
import axios from 'axios';
import ReviewForm from '../components/ReviewForm.vue';
import ContactForm from '../components/ContactForm.vue'


export default {
    components:{
    ReviewForm,
    ContactForm
},
    props: [
        'musician',
    ],
    name: 'SingleMusician',
    data() {
        return {
            apiUrl: "http://127.0.0.1:8000/api/musicians",
            apiReview: 'http://127.0.0.1:8000/api/review-form',
            musicians: [],
            user: [],

            activeReview: 'd-none',
            activeMex: 'd-none'

        };
    },
    methods: {
        GetMusiciansApi() {
            axios.get(`${this.apiUrl}/${this.$route.params.id}`).then((response) => {
                this.musicians = response.data.results;
                this.musicalInstrument = response.data.results.musical_instruments;
                this.user = response.data.results.user;
                // this.musicians = response.data;
                console.log(this.user);
            });
        },

        becomesActiveReview(){
            if(this.activeReview == 'd-none'){
                this.activeReview='d-block';
            }else{
                this.activeReview= 'd-none';
            }
        },

        becomesActiveMex(){
            if(this.activeMex == 'd-none'){
                this.activeMex='d-block';
            }else{
                this.activeMex= 'd-none';
            }
        }

       
    },
    created() {
        this.GetMusiciansApi();

    },
}
</script>



<style lang="scss">
    div.imageWrapper{
        img{
            width: 250px;
            height: 250px;
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