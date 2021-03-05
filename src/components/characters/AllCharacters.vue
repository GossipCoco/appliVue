 /* eslint-disable */
<template>
<!-- TO DO : add filter by clans and by grade -->
    <div>
        <div class="row">
            <div class="col contain-filters">
                <select-clan label="Clan ou Groupe" @setClan="setClan" v-bind:typeClan="currentClan" v-bind:clans="clans"/>
            </div>
        </div>
        <div class="row contain-all-characters">
            <div class="col-sm" v-for="char in charList" :key="char.id">
                <b-card
                    :title="char.name"
                    :img-src="require('@/assets/images/personnage/'+char.image)"
                    :img-alt="char.name"
                    img-top
                    tag="article"
                    style="width: 20rem; height: 40rem"
                    class="mb-4"
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
            clans: ClansJson
        }
    },
    created: function(){
        this.genreChar = this.Characters.genre
    }
}
</script>