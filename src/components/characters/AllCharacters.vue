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
            <div class="col-sm" v-for="char in charList.slice((currentPage-1)*perPage,(currentPage-1)*perPage+perPage)" :key="char.id" id="all-characters-card">                 
                <b-card                                       
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
                </b-card></div>
        </div>
    </div>
</template>
<script>

import SelectClan from "../clans/SelectClan.vue"
import Characters from "../datas/characters.json"
import ClansJson from "../datas/clans.json"
import genres from "../datas/genres.json"
export default {
    name: 'AllCharacters',
    props:['charList'],
    components:{
        'select-clan': SelectClan
    },
    data () {
        return{
            imageChar: this.charList.image,
            Characters: Characters,
            genreChar: '',
            clans: ClansJson,
            backgroundImgClan: '',
            perPage: 10,
            currentPage: 1,
        }
    },
    created: function(){
        this.genreChar = this.Characters.genre
    },
    computed: {
      rows() {
        return this.Characters.length
      }
    },
    methods: {
        setclan(value){
            console.log(value)
        }
    }
}
</script>