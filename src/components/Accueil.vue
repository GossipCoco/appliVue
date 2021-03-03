<template>
    <div class="row">
        <div class="col top-main-contain">
            <div class="title-site-containe">
                <h3>{{msg}}</h3>
                <h3 class="titleBook">{{titleBook}}</h3>
            </div>    
        </div>
    <div class="main-container-app">
        <div class="presentation-contain">
            <img class="presentation-cover-book" v-bind:src="imgCover" />
            <p class="presentation-app">
                Cette série d'origine anglaise créée par Erin Hunter raconte les aventures de chats sauvages répartis en quatre Clans : Le Clan du Tonnerre, le Clan du Vent, le Clan de la Rivière et le Clan de l'Ombre. Il y a également, le Clan des Étoiles, qui est la résidence où les chats défunts vivent après leur mort, ce "Clan" se trouve dans le ciel, et il est réservé aux chats ayant fait et voulu le bien. Même si le Clan du Tonnerre, du Vent, de la Rivière et de l'Ombre sont les quatre Clans principaux, il existe d'autres Clans : le Clan du Ciel (un Clan qui cohabitait avec les quatre Clans principaux avant de s'être exilé car leur territoire a été remplacé par des maisons de bipèdes - Hommes, ainsi que la Tribu de l'Eau Vive (les chats des montagnes), la Forêt Sombre (chats bannis du Clans des Étoiles ou ayant directement rejoint la Forêt Sombre pour leurs actes de barbarie, de haute trahison et condamnables par le Code du Guerrier) et le Clan du Sang (groupe de chats errant vivant sur le territoire des humains) qui n'est pas un "vrai Clan"‚ car non créé par les ancêtres.
            </p>
        </div>
        <div class="presentation-app">
            <h2>Présentation de l'application "La Guerre des Clans"</h2>
            <p>
                Cette application a pour premier objectif de créer ses propres personnages inspirés de l'univers "La Guerre des Clans". Vous pourrez crer de nouveaux guerriers, apprentis ou même solitaire.<br>
                A terme, l'idée sera de créer aussi de nouvelles histoires et de nouvelles instrigues dans cet univers riche et passionnant et, pourquoi pas, une partie map pour faire évoluer votre ou vos personnages.
            </p>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    name: 'Accueil',
    data(){
        return{
            imgCover: 'https://images-na.ssl-images-amazon.com/images/I/716SMznxb9L.jpg',
            msg: 'Bienvenue sur l\'application',
            titleBook: 'La Guerre des Clans'
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
}
</style>