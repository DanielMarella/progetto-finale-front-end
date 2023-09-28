<template>
    <main>
        <div class="contain">
            <section class="jumbo">
                <div class="container_1">
                    <h1 class="text-center fw-bolder fs-1">
                        I TUOI <span class="specialText1">EVENTI</span>, I NOSTRI <span class="specialText1">MUSICISTI</span>
                    </h1>

                    <div class="row mt-5">
                        <div class="col d-flex align-items-center sm-flex-direction-column">
                            <div class="info p-4 text-uppercase text-center">
                                <p class="fs-4 fw-semibold">
                                    Stupisci il tuo pubblico
                                </p>
                                
                                <p class="fs-5 fw-bold d-none d-sm-block">
                                    I nostri Boosician sono professionisti selezionati e preparati, pronti a portare la loro musica in qualsiasi evento
                                </p>

                                <p class="fs-4 fw-bold">
                                    Scegli il musicista più adatto a te
                                </p>
                                <div class="text-center">
                                    <button type="button" class="btn btn-success text-center m-3"><a class="specialText2" href="http://127.0.0.1:8000/advance-search">VAI</a></button>
                                </div>
                            </div>
                        </div>

                        <div class="col d-flex justify-content-center">
                            <div class="image_jumbo ">
                                <img src="https://pixy.org/download/999821/" alt="jumbo image">
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="primaryColorBg">
                <div class="container_2 text-uppercase">
                    <h1 class="text-center mt-3">
                        Qui hai tutto quello che cerchi
                    </h1>
                    <h5 class="text-center specialText2 px-3">Cerca musicisti in base allo strumento, alla tariffa o alle recensioni</h5>
                    <h2 class="text-center mb-3">Trova il tuo Boosician e contattalo ora</h2>
                </div>
            </section>
            <section class="secondaryColorBg callToAction">
                <div class="container_2">
                    <h2 class="text-center text-uppercase">Sei un musicista?</h2>
                    <div class="row mt-5">
                        <div class="col text-center d-flex align-items-center justify-content-center">
                            <div class="image">
                                <img class="img-fluid" src="https://images.unsplash.com/photo-1614963563975-dca95dacd6a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxheWluZyUyMGd1aXRhcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="person playing guitar">
                            </div>
                        </div>
                        <div class="col text-center ps-3">
                            <h2 class="fw-800 text-uppercase">
                                Diventa un Boosician
                            </h2>

                            <h4>
                                Ti basterà creare un profilo, inserire i tuoi dettagli e aggiungere il tuo curriculum. Decidi una tariffa per il tuo servizio e potrai cominciare a ricevere richieste! Sei pronto a suonare con noi?
                            </h4>

                            <button type="button" class="btn btnSignIn mt-3">
                                <a href="http://127.0.0.1:8000/register">
                                    Registrati
                                </a>
                            </button>

                            <button type="button" class="btn btnLogIn mt-3">
                                <a href="http://127.0.0.1:8000/">
                                    Accedi
                                </a>
                            </button>
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
@use '../styles/partials/_variables.scss' as variables;
section.jumbo {
    padding: 3rem;
    /* background-color: red; */
    background-color: variables.$secondaryColor;;
}

.container_1 {
    max-width: 1200px;
    margin: 0 auto;
    /* border: 2px solid black; */

    .image_jumbo {
/*         background-color: gray;
 */        width: 450px;
        height: 350px;
        margin-bottom: 3rem;
        display: flex;
        justify-content: center;
        align-items: center;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .info {
        width: 500px;
        margin: 0 auto;
        background-color: variables.$primaryColor;
        /* border: 2px solid black; */

        button.btn{
            background-color: variables.$accentColor;
            border-color: variables.$accentColor;
        }
    }
}

.specialText1{
    color: variables.$primaryColor;
}

.specialText2{
    color: variables.$secondaryColor;
}

.container_2 {
    max-width: 1000px;
    margin: 0 auto;
/*     border: 2px solid black;
 */    padding: 3rem;
}

.callToAction {
    .image {
/*         background-color: gray;
 */        width: 500px;
        height: auto;

        img{
            max-width: 100%;
            height: auto;
            margin-bottom: .5rem;
        }
    }

        button.btn.btnSignIn{
            background-color: variables.$primaryColor;
            border-color: variables.$primaryColor;
            margin-right: 1rem;
            
            a{
                color: variables.$secondaryColor;
            }
        }
        button.btn.btnLogIn{
            background-color: variables.$accentColor;
            border-color: variables.$accentColor;
            
            a{
                color: variables.$secondaryColor;
            }
        }
}

.primaryColorBg {
    background-color: variables.$primaryColor;
}

.secondaryColorBg{
    background-color: variables.$secondaryColor;
}
</style>