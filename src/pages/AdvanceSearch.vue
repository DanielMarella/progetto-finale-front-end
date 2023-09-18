<template>
    <div class="d-flex">
        <section class="filters">
            <h5>Filtra per ...</h5>
            <div>
                <h5>Genere musicale</h5>
                <input type="checkbox" name="genre" id="genre"><span>Rock</span>
            </div>
            <div>
                <h5>Strumento suonato</h5>
                <input type="checkbox" name="instrument" id="instrument"><span>Basso</span>
            </div>
            <div>
                <h5>Prezzo a serata</h5>
                <input type="checkbox" name="instrument" id="instrument"><span>50</span>
            </div>
        </section>
        <div>
            <section class="search-zone">
                <div class=" mx-auto d-flex flex-column align-items-center py-3">
                    <p>Inserisci il nome del musicista che cerchi. Se sei indeciso o non hai le idee chiare fatti aiutare con i filtri</p>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </section>
            <section class="results-zone justify-content-center py-3">
                <div class="container">
                    <div class="row">
                        <div class="col-4 card text-center my-4 my_card" v-for="(musician, index) in musicians">
                            <!-- <SingleMusician v-if="selectedMusician" :musician="selectedMusician" /> -->
                            <router-link :to="{name: SingleMusician, params:{id: index}}">
                                <h3>{{ musician.surname }}</h3>
    
                                <div class="image">
                                    <img :src=" musician.image " :alt="musician.surname + ' image'">
                                </div>
    
                                <h4>{{ musician.address }}</h4>
                                <h5>{{ musician.price }} &euro;</h5>

                            </router-link>
                        </div>
                    </div>
                </div>

                <div class="text-center">
                    <p>risultati / component musicista</p>
                </div>
            </section>
        </div>
    </div>
</template>



<script>
import axios from 'axios';
import SingleMusician from './SingleMusician.vue';

export default {
    name: 'AdvanceSearch',

    data(){
        return{
            apiUrl: "http://127.0.0.1:8000/api/musicians",
            musicians : [],
        }
    },

    components:{
        SingleMusician
    },

    methods: {
        getMusiciansApi(){
            axios.get(this.apiUrl).then((response) => {
            // console.log(response.data);

            this.musicians = response.data.data;
            console.log(this.musicians);
        })
        },
        showMusicianDetails(musician){
            this.selectedMusician = musician;
            this.isActive = !this.isActive;
        }
    },

    created() {
        this.getMusiciansApi()
    },
}
</script>


<style lang="scss" scoped>
section.search-zone{
    background-color: yellow;
    width: calc(100vw - 200px);
}

section.results-zone{
    background-color: red;
    width: calc(100vw - 200px);

    div.my_card:hover{
        cursor: pointer;
        transform: scale(1.3);
        z-index: 1;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
}

a{
    text-decoration: none;
    color: black;
}

section.filters{
    background-color: orangered;
    width: 200px;
}
</style>