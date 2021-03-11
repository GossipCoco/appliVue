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
                <div class="container-a-character">
                    <h2>{{ char.name}}</h2><br>                 
                    <p>{{ char.image }}</p>
                    <img :src="require('@/assets/images/personnage/'+char.image)" class="container-avatar" size="72px"/>
                </div>
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

export default {
    name: 'AllCharacters',
    components:{
        'select-clan': SelectClan
    },
    data () {
        return{
            perPage: 10,
            currentPage: 1,
            allCharacters:[]
        }
    },
    created: function(){
        this.genreChar = this.charList.genre
    },
    async mounted(){
        this.allCharacters = await CharactersService.getCharacters();
        console.log(this.allCharacters)
    },
    methods: {
        setclan(value){
            console.log(value)
        }
    }
}
</script>