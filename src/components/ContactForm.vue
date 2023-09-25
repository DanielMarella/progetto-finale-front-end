

<template>

    <form @submit.prevent="sendContactForm" @reset.prevent="clearForm">

        <div class="form-element info" v-if="response === false">
            <h3>
                There are errors in your form:
                {{ errors }}
            </h3>
        </div>

        <div class="form-element">
            <p>Type your name</p>
            <input type="text" v-model="name">
        </div>
        <div class="form-element">
            <p>Type your email</p>
            <input type="email" v-model="mail">
        </div>

        <div class="form-element">
            <p>Type your message</p>
            <input type="text" v-model="message">
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
    name : 'ContactForm',

    data() {
        return {
            apiUrl: "http://127.0.0.1:8000/api/musicians",
            apiContact: 'http://127.0.0.1:8000/api/contact-form',
            name: '',
            mail: '',
            message: '',
            musicianId: '',
            response: true,
        }  
    },
    
    methods: {

        GetMusiciansApi() {
            axios.get(`${this.apiUrl}/${this.$route.params.id}`).then((response) => {
                this.musicianId= response.data.results.id;
                console.log(this.musicianId)
            });
        },

        sendContactForm(){
            const data = {
                name : this.name,
                mail : this.mail,
                message : this.message,
                musician_id : this.musicianId 
            };
            axios
            .post(this.apiContact, data)
            .then((response) =>{
                const responseData = response.data
                console.log(responseData)
                console.log(data)
                if (response.data.success) {
                this.clearForm();
                } else {
                    this.errors = response.data.errors;
                }
            })
            .catch((error) => {
                console.error('Errore Axios:', error);
                this.response = false;
                this.errors = error.response.data ? error.response.data.message : 'Errore sconosciuto';
                // console.log(this.response);
            });
        },

        clearForm() {
            this.name = '';
            this.mail = '';
            this.message = '';

        }

    },

    created() {
        this.GetMusiciansApi();
    },

}
</script>



<style lang="scss">
    
</style>