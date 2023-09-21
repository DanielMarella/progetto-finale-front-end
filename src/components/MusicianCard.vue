<template>
    <router-link :to="{name:'SingleMusician', params:{ id: musicianInfo.user_id }}" @click="saveCurrentId(musicianInfo.user_id)">
        <div class="card text-center my-4 my_card ">
            <span class="fs-2">{{ musicianInfo.user.name }}</span>
            <span class="fs-2">{{ musicianInfo.surname }}</span>
            
            <div class="image">
                <img :src="'http://127.0.0.1:8000/storage/' + musicianInfo.image " :alt="musicianInfo.user.name + ' ' + musicianInfo.surname + ' image'">
            </div>
            
            <p class="fs-5">{{ musicianInfo.address }}</p>
            <p class="fs-4">{{ musicianInfo.price }} &euro;</p>

            <p>Media delle valutazioni ricevute: {{getAvarage()}}</p>
        </div>
    </router-link>

</template>

<script>

export default {
    name:'MusicianCard',

    data(){
        return{

        }
    },

    props:{
        musicianInfo : Object,
        userInfo : Object
    },

    methods:{
        saveCurrentId(info){
            localStorage.setItem('currentUserId',info)
            console.log(localStorage.getItem('currentUserId'))

        },

        getAvarage(){
            let numberOfReview = this.musicianInfo.reviews.length;
            //console.log(numberOfReview);
            let totVotes = 0;
            this.musicianInfo.reviews.forEach(element => {
                totVotes = totVotes + element.vote;
            });
            const avarage = totVotes / numberOfReview;
            return Math.floor(avarage);
        }
    },

    created(){
        console.log(this.musicianInfo);
    }

}
</script>

<style lang="scss" scoped>
div.my_card{
    transition: all .3s ease-in-out;
    z-index: 0;

    div.image{
        img{
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
        }
    }
}

div.my_card:hover{
    cursor: pointer;
    transform: scale(1.3);
    z-index: 1;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

a{
    text-decoration: none;
    color: black;
}
    
</style>