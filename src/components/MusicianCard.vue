<template>
    <router-link :to="{name:'SingleMusician', params:{ id: musicianInfo.user_id }}" @click="saveCurrentId(musicianInfo.user_id)">
        <div class="card text-center my-4 my_card">
            <p class="fs-2">{{ musicianInfo.surname }}</p>
            
            <div class="image">
                <img :src=" musicianInfo.image " :alt="musicianInfo.surname + ' image'">
            </div>
            
            <p class="fs-5">{{ musicianInfo.address }}</p>
            <p class="fs-4">{{ musicianInfo.price }} &euro;</p>
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
        musicianInfo : Object
    },

    methods:{
        saveCurrentId(info){
            localStorage.setItem('currentUserId',info)
            console.log(localStorage.getItem('currentUserId'))

        }
    },

}
</script>

<style lang="scss" scoped>
 div.my_card{
    transition: all .3s ease-in-out;
    z-index: 0;
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