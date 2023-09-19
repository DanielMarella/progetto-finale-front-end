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
                        <div class="col-lg-4 col-md-6 col-sm-12" v-for="musician in musicians">
                            <MusicianCard :musicianInfo="musician"/>
                        </div>
                    </div>

                    <!--Rotella caricamento-->
                    <div class="my_loading_container d-flex align-items-center justify-content-center" v-if="isLoading">
                        <div class="my_loading_anim"><div></div><div></div><div></div><div></div></div>
                    </div>

                </div>

            </section>
        </div>
    </div>
</template>



<script>
import axios from 'axios';
import MusicianCard from '../components/MusicianCard.vue'

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
        MusicianCard
    },

    methods: {
    getMusiciansApi(){
        axios.get(this.apiUrl).then((response) => {
        // console.log(response.data);

        this.musicians = response.data.data;
        console.log(this.musicians);
        })
    },

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