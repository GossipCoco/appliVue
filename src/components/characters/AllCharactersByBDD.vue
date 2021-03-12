 /* eslint-disable */
<template>
<!-- TO DO : add filter by clans and by grade -->
    <div  class="col main-container-app">
        <div class="row">
            <div class="col contain-filters">
                <p>Filtrer par </p>
                <select-clan label="Clan ou Groupe" @setClan="setClan" v-bind:typeClan="currentClan" v-bind:clans="clans"/>
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
            <div class="col-sm container-allCharacterByBdd" v-for="char in allCharacters" :key="char.id" id="all-characters-card">
                <b-card
                    id="all-characters-card"                                       
                    :title="char.name"
                    :img-src="require('@/assets/images/personnage/'+char.image)"
                    :img-alt="char.name"
                    img-top
                    tag="article"
                    style="width: 20rem; height: 30rem"
                    class="mb-4 card-contain-character"
                    :per-page="perPage"
                    :current-page="currentPage"
                >
                    <b-card-text>
                    {{char.clan}}
                    </b-card-text>

                    <router-link v-bind:to="'/characters/characterDetails/'+char.id" v-bind:charId="char.id" class="btn btn-primary">En savoir plus</router-link>
                        <transition>
                            <router-view v-bind:charId="char.id"/>
                        </transition>
                </b-card>
            </div>
        </div>
    </div>
</template>
<script>

import SelectClan from "../clans/SelectClan.vue"
import Characters from "../datas/characters.json"
import ClansJson from "../datas/clans.json"
import genres from "../datas/genres.json"

import { CharactersService } from "../../services/Characters.service"
import { ClansService } from "../../services/Clans.service"
import { GradesService } from "../../services/Grades.service"

export default {
    name: 'AllCharacters',
    components:{
        'select-clan': SelectClan
    },
    data () {
        return{
            perPage: 10,
            currentPage: 1,
            allCharacters:[],
            allClans:[]
        }
    },
    created: function(){
        this.genreChar = this.charList.genre
    },
    computed: {
      rows() {
        //console.log(typeof this.allCharacter)
        return this.allCharacters.length
      }
    },
    async mounted(){
        this.allCharacters = await CharactersService.getCharacters();
        this.allClans = await ClansService.getClans();
        console.log(this.allClans)

        //console.log(this.allCharacters)
    },
    methods: {
        setclan(value){
            console.log(value)
        }
    }
}
</script>