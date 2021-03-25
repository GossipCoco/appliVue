 /* eslint-disable */
<template>
<!-- TO DO : add filter by clans and by grade -->
    <div  class="col main-container-app">
        <div class="row">
            <div class="col contain-filters">
                <p>Filtrer par </p>
                <select-clan label="Clan ou Groupe" @setClan="setClan(clanSelected)"/><br>
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
                <b-card
                    id="all-characters-card"                                       
                    :title="character.name"
                    :img-src="require('@/assets/images/personnage/'+character.image)"
                    :img-alt="character.name"
                    img-top
                    tag="article"
                    style="width: 20rem; height: 30rem"
                    class="mb-4 card-contain-character"
                    :per-page="perPage"
                    :current-page="currentPage"
                >
                    <b-card-text>
                    {{character.clan}}
                    </b-card-text>

                     <router-link v-bind:to="'/characters/characterDetails/'+character.id" v-bind:charId="character.id" class="btn btn-primary">En savoir plus</router-link>
                        <transition>
                            <router-view v-bind:charId="character.id"/>
                        </transition>
                        <b-button :to="'/characters/characterDetailsBySlug/'+character.slug" variant="primary" :character="character">Plus d'infos</b-button>
                </b-card>
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
            clans: ''
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
        console.log(this.allClans[0])
    },
    methods: {
        setclan(value){
            console.log(value)
        },
        setGrade(value){
            console.log(value)
        }
    }
}
</script>