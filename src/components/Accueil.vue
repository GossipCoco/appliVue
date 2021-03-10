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
            <p class="presentation-paragraph-contain">
                {{presentationBook}}
            </p>
        </div>
        <div class="presentation-contain">
            <h3>Présentation de l'application "La Guerre des Clans"</h3><br>
            <p>
                Cette application a pour premier objectif de créer ses propres personnages inspirés de l'univers "La Guerre des Clans". Vous pourrez crer de nouveaux guerriers, apprentis ou même solitaire.<br>
                A terme, l'idée sera de créer aussi de nouvelles histoires et de nouvelles instrigues dans cet univers riche et passionnant et, pourquoi pas, une partie map pour faire évoluer votre ou vos personnages.
            </p>
        </div>
    </div>
    </div>
</template>
<script>
import presentation from "./datas/presentationText.json"
export default {
    name: 'Accueil',
    data(){
        return{
            presentation: presentation,
            imgCover: 'vol1.jpg',
            msg: 'Bienvenue sur l\'application',
            titleBook: 'La Guerre des Clans',
            presentationBook: ''
        }
    },
    created(){
        this.presentationBook = this.presentation[0].presentationBook

    },  
    mounted(){

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