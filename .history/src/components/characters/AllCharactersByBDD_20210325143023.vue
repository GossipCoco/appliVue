 /* eslint-disable */
<template>
<!-- TO DO : add filter by clans and by grade -->
    <div  class="col main-container-app">
        <div class="row">
            <div class="col contain-filters">
                <p>Filtrer par </p>
                 <select-clan label="Clan ou Groupe" @setClan="setClan" v-bind:typeClan="currentClan"/><br>
                Résultat : <p v-if="showResult === true">{{clanSelected}}</p>
                <!-- <select-grade label="Grade" @setGrade="setGrade(gradeSelected)" v-bind:grades="allGrades"></select-grade> -->
            </div>
        </div>
        <div class="row">
            <div class="col">
                <b-pagination
                    v-model="currentPage"
                    :total-rows="rows"
                    :per-page="perPage"
                    aria-controls="all-characters-card"
                >
                </b-pagination>
            </div>
        </div>
        <div class="row contain-all-characters">
            <div class="col-sm-3 container-allCharacterByBdd" v-for="character in allCharacters" :key="character.id" id="all-characters-card">
                <character-card v-bind:characterCard="character"></character-card>
            </div>
        </div>
    </div>
</template>
<script>

import SelectClan from "../clans/SelectClan.vue"
import SelectGrade from "../clans/SelectGrade"

import CharacterCard from './CharacterCard.vue'
import { CharactersService } from "../../services/Characters.service"
import { ClansService } from "../../services/Clans.service"
import { GradesService } from "../../services/Grades.service"
import { StatesService } from "../../services/States.service"
import { GenresService } from "../../services/Genres.service"

export default {
    name: 'AllCharacters',
    components:{
        'character-card': CharacterCard,
        'select-clan': SelectClan,
        'select-grade': SelectGrade
    },
    data () {
        return{
            perPage: 10,
            currentPage: 1,
            allCharacters:[],
            allClans:[],
            allStates:[],
            allGrades: [],
            allGenres: [],
            characterClan: null,
            characterGrade: null,
            characterGenre: null,
            clanSelected: null,
            gradeSelected: null,
            typeClan: 'current',
            clans: '',            
            showResult: false,
            currentClan: 'current',
        }
    },
    computed: {
      rows() {
        return this.allCharacters.length
      },   
    },
    async mounted(){
        this.allCharacters = await CharactersService.getCharacters();
        this.allClans = await ClansService.getClans();
        this.allStates = await StatesService.getStates();
        this.allGrades = await GradesService.getGrades();
        this.allGenres = await GenresService.getGenres();        
    },
    methods: {
        setClan(value){            
            this.showResult = true;
            this.clanSelected = value;
        },
        setGrade(value){
            console.log(value)
        }
    }
}
</script>