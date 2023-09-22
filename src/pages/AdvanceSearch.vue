<template>
    <div class="d-flex filters">
        <section class="my_bg px-4 py-4">
            <h5>Filtra per ...</h5>
            
            <div>
                <h5>Genere musicale</h5>
                <select name="genre" id="genre" class="form-select" @change="getSelectValue($event)" >
                    <option value="none" selected>Seleziona il genere</option>
                    <option value="Rock">Rock</option>
                    <option value="Metal">Metal</option>
                    <option value="Nu metal">Nu Metal</option>
                    <option value="Hard rock">Hard Rock</option>
                    <option value="Pop">Pop</option>
                    <option value="Pop rock">Pop rock</option>
                </select>
            </div>

            <div>
                <h5>Strumento</h5>
                <select name="instrument" id="instrument" class="form-select">
                    <option value="none">Seleziona strumento</option>
                    <option value="trumpet">Tromba</option>
                    <option value="drums">Batteria</option>
                    <option value="bass">Basso</option>
                    <option value="guitar">Chitarra</option>
                    <option value="sax">Sax</option>
                    <option value="violin">Violino</option>
                </select>
            </div>

            <div>
                <h5>Prezzo a serata</h5>
                <div class="slidecontainer">
                    <input type="range" min="10" max="1000" value="50" step="5" class="slider" id="myRange">
                    <p id="price"> {{ sliderValue }} </p>
                </div>
            </div>
        </section>

        <div class="my_container">
            <section class="search-zone">
                <div class=" mx-auto d-flex flex-column align-items-center py-3">
                    <p>Inserisci un genere che vuoi cercare</p>
                    <form class="d-flex" role="search" @submit.prevent>
                        <input class="form-control me-2" type="text" placeholder="Search" name="search-bar" id="search-bar" v-model="filteredText" @keyup="searchBar()">
                        <button class="btn btn-outline-success" type="submit" >Search</button>
                    </form>
                </div>
            </section>

            <section class="results-zone justify-content-center py-3">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-4 col-md-6 col-sm-12" v-for="musician in filteredMusicians">
                            <!-- Controlla se ci sono utenti con il genere musicale selezionato e li stampa su schermo -->
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
            apiUrl:"http://127.0.0.1:8000/api/musicians",
            //apiUserUrl: "http://127.0.0.1:8000/api/user",
            //apiInstrumentUrl: "http://127.0.0.1:8000/api/instrument",
            //apiReviewUrl: "http://127.0.0.1:8000/api/review",

            musicians : [],
            filteredMusicians : [],

            filteredText : '',

            isLoading: true,

            canShow: true,


            sliderValue: 0,
            genreValue: '',
        }
    },

    components:{
        MusicianCard
    },

    methods: {
        getMusiciansApi(){
            axios.get(this.apiUrl)
            .then((response)=> {
                //console.log(response.data.results.data)
                this.musicians=response.data.results.data;
                this.filteredMusicians = this.musicians;
            })
            .catch(function (error) {
                console.log(error);
            })
        },


        //Ottiene il value del dato passato nelle parentesi
        getSelectValue(selectValue){
            this.genreValue = selectValue.target.value;

            console.log(this.genreValue);
        },

        
        searchBar(){
            let searchedText = this.filteredText.toLowerCase();
            console.log(searchedText);
            
            this.filteredMusicians = this.musicians.filter(element =>{
                return element.musical_instruments.some(instrument=>{
                    return instrument.name.toLowerCase().includes(searchedText);
                })
            })
        }

    },

    created() {
        //Chiamate api
        this.getMusiciansApi(),

        //Rimuove l'animazione del caricamento dopo 1 secondo, da cambiare con un metodo migliore
        setTimeout(() => {
            this.isLoading = false
        }, 1000);
    },
    
    mounted() {
        
    },
}
</script>


<style lang="scss" scoped>

section.results-zone{
    background-color: lightblue;
    width: calc(100vw - 250px);
}


div.filters{
    width: 200px;
}

section.my_bg{
    background-color: lightgrey;
}

//Animazione caricamento
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