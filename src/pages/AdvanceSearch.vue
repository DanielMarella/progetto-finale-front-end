<template>
    <div class="d-flex">
        <section class="filters" >
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
                <div class="text-center">
                    <p>risultati / component musicista</p>
                </div>
            </section>
        </div>
    </div>
</template>



<script>
export default {
    name: 'AdvanceSearch',

    data(){
        return{
        }
    }

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
    height: 500px;
}

section.filters{
    background-color: orangered;
    width: 200px;
}
    
</style>