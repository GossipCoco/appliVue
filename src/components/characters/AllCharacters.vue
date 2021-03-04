 /* eslint-disable */
<template>
    <div class="row contain-all-characters">
        <div class="col-sm" v-for="char in charList" :key="char.id">
            <b-card
                :v-bind:title="char.name"
                :img-src="require('@/assets/images/personnage/'+char.image)"
                img-alt="Image"
                img-top
                tag="article"
                style="width: 20rem; height: 40rem"
                class="mb-4"
            >
                <b-card-text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </b-card-text>

                <router-link v-bind:to="'/characters/characterDetails/'+char.id" v-bind:charId="char.id" class="btn btn-primary">En savoir plus</router-link>
                    <transition>
                        <router-view v-bind:charId="char.id"/>
                    </transition>
            </b-card></div>
    </div>
</template>
<script>
import Characters from "../datas/characters.json"
import CreateACharacter from './CreateACharacter.vue'
import genres from "../datas/genres.json"
export default {
    name: 'AllCharacters',
    props:['charList'],
    components:{
        'create-a-character': CreateACharacter
    },
    data () {
        return{
            imageChar: this.charList.image,
            Characters: Characters,
            genreChar: ''
        }
    },
    created: function(){
        this.genreChar = this.Characters.genre
    }
}
</script>