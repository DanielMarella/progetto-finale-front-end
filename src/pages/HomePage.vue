<template>
    <main>
        <div class="contain">
            <div class="jumbo">
                <div class="container_1">
                    <h1 class="text-center">Lorem, ipsum dolor sit amet</h1>
                    <div class="row mt-5">
                        <div class="col d-flex align-items-center ">
                            <div class="info ">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe quis aut sed! A eos porro
                                    esse eligendi corporis illum consequatur iusto sequi. Sint atque et distinctio est
                                    asperiores. Id, similique?</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint aliquam ab totam odio eius,
                                    necessitatibus facilis mollitia iusto rem eveniet harum, quos, voluptatem ipsam
                                    provident sequi eum dolorem esse culpa.
                                </p>
                                <div class="text-center">
                                    <button type="button" class="btn btn-success text-center m-3">Success</button>
                                </div>
                            </div>
                        </div>
                        <div class="col d-flex justify-content-center">
                            <div class="image_jumbo ">
                                IMMAGINE JUMBO
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <section class="yellow">
                <div class="container_2">
                    <h2 class="text-center">Qui trovi quello che cerchi</h2>
                    <p class="text-center">in base alle tue esigenze</p>
                    <div class="d-flex justify-content-around flex-wrap gap-3 mt-5">
                        <button type="button" class="btn btn-secondary">Genere</button>
                        <button type="button" class="btn btn-secondary">Genere</button>
                        <button type="button" class="btn btn-secondary">Genere</button>
                        <button type="button" class="btn btn-secondary">Genere</button>
                        <button type="button" class="btn btn-secondary">Genere</button>
                        <button type="button" class="btn btn-secondary">Genere</button>
                        <button type="button" class="btn btn-secondary">Genere</button>
                        <button type="button" class="btn btn-secondary">Genere</button>
                        <button type="button" class="btn btn-secondary">Genere</button>
                        <button type="button" class="btn btn-secondary">Genere</button>
                        <button type="button" class="btn btn-secondary">Genere</button>
                        <button type="button" class="btn btn-secondary">Genere</button>
                        <button type="button" class="btn btn-secondary">Genere</button>
                        <button type="button" class="btn btn-secondary">Genere</button>
                        <button type="button" class="btn btn-secondary">Genere</button>
                    </div>
                </div>
            </section>
            <section class="green">
                <div class="container_2">
                    <h2 class="text-center">Musicisti in Evidenza</h2>
                    <div class="row mt-5">
                        <div class="col text-center">
                            <div class="image">immagine</div>
                        </div>
                        <div class="col text-center">
                            <p>I migliori Musicisti del momento, sono qui</p>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate cum dicta iste hic minus
                                quo in rem nemo quidem. Natus veritatis voluptatum vel laboriosam voluptatibus aperiam!
                                Doloremque, illum error? In.
                                Recusandae fugiat facilis veniam fuga doloremque autem deserunt inventore quibusdam soluta
                                iste molestiae illum, sapiente dolorum consectetur error ullam ratione fugit nam vitae quo
                                cum non ab nulla itaque. Itaque!</p>
                            <button type="button" class="btn btn-primary mt-3">Vedi di più</button>
                        </div>
                    </div>
                </div>
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
    background-color: red;
}

.container_1 {
    max-width: 1500px;
    margin: 0 auto;
    border: 2px solid black;

    .image_jumbo {
        background-color: gray;
        width: 350px;
        height: 350px;
        margin-bottom: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .info {
        width: 500px;
        margin: 0 auto;
        border: 2px solid black;
    }
}

.container_2 {
    max-width: 1000px;
    margin: 0 auto;
    border: 2px solid black;
    padding: 3rem;
}

.green {
    background-color: green;

    .image {
        background-color: gray;
        width: 400px;
        height: 500px;
    }
}

.yellow {
    background-color: yellow;
}
</style>