<template>
    <div class="row">
        <div class="col top-main-contain">
            <div class="title-site-containe">
                <h3>{{msg}}</h3>
                <h3 class="titleBook">{{titleBook}}</h3>
            </div>    
        </div>
    <div class="main-container-app accueil-app">
        <div class="presentation-contain">
            <img class="presentation-cover-book" :src="require('@/assets/images/cover/'+imgCover)" />
            <p class="presentation-paragraph-contain" contenteditable="true" v-html="presentationBook" @focusout="onFocusOut($event)">
                
            </p>
        </div>
        <div class="presentation-contain">
            <h3>Présentation de l'application "La Guerre des Clans"</h3><br>
            <p  class="presentation-paragraph-contain" contenteditable="true" v-html="presentationAppli" @focusout="onFocusOut($event)">
                
            </p>
        </div>
    </div>
    </div>
</template>
<script>
import presentation from "../datas/presentationText.json"
export default {
    name: 'Accueil',
    data(){
        return{
            presentation: presentation,
            imgCover: 'vol1.jpg',
            msg: 'Bienvenue sur l\'application',
            titleBook: 'La Guerre des Clans',
            presentationBook: '',
            presentationAppli: ''
        }
    },
    created(){
        this.presentationBook = this.presentation[0].presentationBook
        this.presentationAppli = this.presentation[0].presentationApp

    },  
    mounted(){

    },
    methods: {
        onFocusOut: function(e) {
        this.presentationBook = e.target.innerHTML
        this.presentationAppli = e.target.innerHTML
        }
    }
}
</script>
<style scoped>
img{
    width: 10%;
}
.presentation-contain{
    display: flex;
    flex-direction: row;
}
.presentation-app{
    padding: 2rem;
    text-align: justify;
}.accueil-app{
    padding-top: 2rem;
}
</style>