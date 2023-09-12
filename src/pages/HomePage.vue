<template>
    <main>
        <div class="contain">
            <div class="jumbo">
                <h1 class="text-center">Lorem, ipsum dolor sit amet</h1>
                <div class="row mt-5">
                    <div class="col">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima sed
                        consequatur veritatis quis obcaecati exercitationem accusamus inventore aliquam! Ipsa saepe,
                        officia sed voluptatibus vero nesciunt eligendi magnam natus sunt aut?</div>
                    <div class="col text-center">IMMAGINE</div>
                </div>
                <button type="button" class="btn btn-success text-center">Success</button>

            </div>
            <section class="green">
                <div>
                    <h2 class="text-center">Musicisti in Evidenza</h2>
                    <div class="row">
                        <div class="col">immagine</div>
                        <div class="col">
                            <p>I migliori Musicisti del momento, sono qui</p>
                            <button>Vedi</button>
                        </div>
                    </div>
                </div>
            </section>
            <section class="yellow">
                <div></div>
            </section>
        </div>
    </main>
</template>



<script>
export default {
    name: 'HomePage'
}
</script>



<style lang="scss" scoped>
div.jumbo {
    padding: 3rem;
    height: 500px; // da togliere
    background-color: red;
}
</style>