

<template lang="">
    <form @submit.prevent="sendContactForm" @reset.prevent="clearForm">

        <div class="form-element info" v-if="response === false">
            <h3>
                There are errors in your form:
                {{ errors }}
            </h3>
        </div>

        <div class="form-element">
            <p>Type your content</p>
            <input type="text" v-model="content">
        </div>

        <div class="form-element">
            <p>Type your vote</p>
            <input type="number" v-model="vote">
        </div>

        <div class="task-bar">
            <button type="submit">Send contact form</button>
            <button type="reset">Reset contact form</button>
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
                this.musicianId = response.data.id;
            });
        },


        sendContactForm() {
            const data = {
                content: this.content,
                vote: this.vote,
                musician_id: this.musicianId,
            };
            axios
                .post(this.apiReview, data)
                .then((response) => {
                console.log(response);

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