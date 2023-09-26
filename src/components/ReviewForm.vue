

<template>
    <form @submit.prevent="sendReviewForm" @reset.prevent="clearForm" class="d-flex my-3 col-10 pb-3">
        <h1> Inserisci la tua recensione </h1>

        <div class="form-element info" v-if="response === false">
            <h3>
                There are errors in your form:
                {{ errors }}
            </h3>
        </div>

        <div class="form-element">
            <label class="form-label">Recensiona qui il musicista</label>
            <input type="text"  class="form-control" v-model="content">
        </div>

        <div class="form-element">
            <label class="form-label">Lascia un voto</label>
            <input type="number"  class="form-control" v-model="vote">
            <p class="form-text">5 è il massimo voto che puoi inserire ... Non esagerare</p>
        </div>

        <div class="task-bar">
            <button type="submit" class="btn btn-outline-success">Invia recensione</button>
            <button type="reset" class="btn btn-outline-secondary">Resetta form</button>
        </div>
    </form>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ReviewForm',
    data() {
        return {
            apiUrl: "http://127.0.0.1:8000/api/musicians",
            apiReview: 'http://127.0.0.1:8000/api/review-form',
            content: '',
            vote: '',
            musicianId: '',

        };
    },
    methods: {

        GetMusiciansApi() {
            axios.get(`${this.apiUrl}/${this.$route.params.id}`).then((response) => {
                this.musicianId= response.data.results.id;
            });
        },

        sendReviewForm() {
            const data = {
                content: this.content,
                vote: this.vote,
                musician_id: this.musicianId,
            };
            axios.post(this.apiReview, data)
                .then((response) => {
                    const responseData = response.data
                //console.log(responseData)
                //console.log(data)

                if (this.response) {
                    this.clearForm();
                }
                else {
                    this.errors = response.data.errors;
                    console.log(this.errors);
                }
            })
                .catch((error) => {
                console.error('Errore Axios:', error);
                this.response = false;
                this.errors = error.response.data ? error.response.data.message : 'Errore sconosciuto';
                console.log(this.response);
            });
        },
        clearForm() {
            this.vote = '';
            this.content = '';
        }
    },
    created() {
        this.GetMusiciansApi();
    },
}
</script>

<style lang="scss">
    form {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        margin: 0 auto;

        div.form-element{
            width: 70%;
            margin-bottom: 1rem;

            *{
                width: 100%;
            }
        }

        button {
            padding: 1rem 2rem;
            margin-right: 1rem;
        }
    }
</style>