<template>
    <div>
        <div class="row">
            <div class="col contain-filters">
                <p>Filtrer par </p>
                <select-clan label="Clan ou Groupe" @setClan="setClan" v-bind:typeClan="currentClan"/>
                Résultat : <p v-if="showResult === true">{{selectedClan}}</p>
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
            allCharacters: Characters,
            characters: [],
            allclans: ClansJson,
            backgroundImgClan: null,
            idCharacter: null,
            currentClan: 'current',
            selectedClan: null,
            newSelectedClan: 'pas de clan',
            showResult: false
        }
    },methods:{
        setClan(value){
            this.showResult = true;
            this.selectedClan = value;
        },
        getClanById(value){
            
        }
    }
}
</script>