<template>
    <section class="search-zone row">
        <div class="col-10 mx-auto d-flex flex-column align-items-center py-3">
            <p>Inserisci il nome del musicista che cerchi. Se sei indeciso o non hai le idee chiare fatti aiutare con i filtri</p>
            <button class="btn btn-success mb-3" type="submit">Filtra</button>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </section>
    <section class="results-zone row justify-content-center py-3">
        <div class="col-10 text-center">
            <p>risultati / component musicista</p>
        </div>
    </section>
</template>



<script>
export default {
    name: 'AdvanceSearch',
}
</script>


<style lang="scss" scoped>
section.search-zone{
    background-color: yellow;
}

section.results-zone{
    background-color: red;
    height: 500px;

}
    
</style>