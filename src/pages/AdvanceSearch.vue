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
                    <div class="row" v-if="!isLoading">
                        <div class="col-lg-4 col-md-6 col-sm-12" v-for="(musician, index) in musicians">
                            <div class="card text-center my-4 my_card">
                                <!-- <SingleMusician v-if="selectedMusician" :musician="selectedMusician" /> -->
                                <router-link :to="{name: SingleMusician, params:{id: index}}">
                                    <p class="fs-2">{{ musician.surname }}</p>
        
                                    <div class="image">
                                        <img :src=" musician.image " :alt="musician.surname + ' image'">
                                    </div>
        
                                    <p class="fs-5">{{ musician.address }}</p>
                                    <p class="fs-4">{{ musician.price }} &euro;</p>
                                </router-link>
                            </div>
                        </div>
                    </div>

                    <div class="my_loading_container d-flex align-items-center justify-content-center" v-if="isLoading">
                        <div class="my_loading_anim"><div></div><div></div><div></div><div></div></div>
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
            isLoading: true,
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
        this.getMusiciansApi(),
        setTimeout(() => {
            this.isLoading = false
        }, 1000);
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

    div.my_card{
        transition: all .3s ease-in-out;
        z-index: 0;
    }

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

.my_loading_anim {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;

    div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #fff;
    border-radius: 50%;
    animation: loadingAnim 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
}

div:nth-child(1) {
    animation-delay: -0.45s;
}

div:nth-child(2) {
    animation-delay: -0.3s;
}

div:nth-child(3) {
    animation-delay: -0.15s;
}

@keyframes loadingAnim {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
}

</style>