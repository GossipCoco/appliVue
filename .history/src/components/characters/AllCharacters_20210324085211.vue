 /* eslint-disable */
<template>
<!-- TO DO : add filter by clans and by grade -->
    <div>
        <div class="row">
            <div class="col contain-filters">
                <p>Filtrer par </p>
                <select-clan label="Clan ou Groupe" @setClan="setClan" v-bind:typeClan="currentClan"/>
                <p> clan sélectionné : {{ newSelectedClan }}</p>
            </div>
        </div>
        <div class="row contain-all-characters">
            <div class="col-sm" v-for="character in allCharacters" :key="character.id" id="all-characters-card"> 
                <character-card v-bind:characterCard="character"></character-card>
            </div>
        </div>        
    </div>
</template>
<script>

import Characters from "../datas/json/characters.json"
import ClansJson from "../datas/json/clans.json"
import SelectClan from "../clans/SelectClan.vue"
import CharacterCard from './CharacterCard.vue'
export default {
    name: 'AllCharacters',
    props:['charList'],
    components:{
        'select-clan': SelectClan,
        'character-card': CharacterCard
    },
    data () {
        return{
            imageChar: null,
            allCharacters: Characters,
            characters: [],
            genreChar: null,
            allclans: ClansJson,
            backgroundImgClan: null,
            perPage: 10,
            currentPage: 1,
            idCharacter: null,
            currentClan: 'current',
            selectedClan: null,
            newSelectedClan: 'clan du tonnerre',
        }
    },
}
</script>