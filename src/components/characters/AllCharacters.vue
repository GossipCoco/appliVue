 /* eslint-disable */
<template>
<!-- TO DO : add filter by clans and by grade -->
    <div>
        <div class="row">
            <div class="col contain-filters">
                <p>Filtrer par </p>
                <select-clan label="Clan ou Groupe" @setClan="setClan" v-bind:typeClan="currentClan" v-bind:clans="clans"/>
            </div>
        </div>
        <div class="row contain-all-characters">            
            <div class="col-sm" v-for="char in allCharacters" :key="char.id" id="all-characters-card">                 
                <b-card                                                
                :title="char.name"
                :img-src="require('@/assets/images/personnage/'+char.image)"
                :img-alt="char.name"
                img-top
                tag="article"
                style="width: 20rem; height: 30rem"
                class="mb-4 card-contain-character"
            >
                    <b-card-text>
                    {{char.name}}
                    </b-card-text>
                    <router-link v-bind:to="'/characters/characterDetails/'+char.id" v-bind:charId="char.id" class="btn btn-primary">En savoir plus</router-link>
                    <transition>
                        <router-view v-bind:charId="char.id"/>
                    </transition>
                    <b-button :to="'/characters/characterDetailsBySlug/'+char.slug" variant="primary" :character="char">Plus d'infos</b-button>
                </b-card>
                 
            </div>
        </div>
    </div>
</template>
<script>

import Characters from "../datas/characters.json"
import SelectClan from "../clans/SelectClan.vue"
import ClansJson from "../datas/clans.json"
import { CharactersService } from "../../services/Characters.service"
export default {
    name: 'AllCharacters',
    props:['charList'],
    components:{
        'select-clan': SelectClan
    },
    data () {
        return{
            loading: false,
            imageChar: null,
            allCharacters: Characters,
            characters: [],
            genreChar: '',
            clans: ClansJson,
            backgroundImgClan: '',
            perPage: 10,
            currentPage: 1,
            idCharacter: null
        }
    },
    created: function(){
        this.genreChar = this.characters.genre
    },
    methods: {
        setclan(value){
            console.log(value)
        }
    }
}
</script>