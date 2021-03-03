<template>
    <div class="row contain-all-characters">
        <div class="col-sm" v-for="char in charList" :key="char.id">
            <div class="card" style="width: 18rem;"  >
                <div class="container-image-character">
                    <img :src="char.image" class="card-img-top" :alt="char.name">
                </div>
                <div class="card-body">
                    <h5 class="card-title">{{char.name}}</h5>
                    <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                    <router-link v-bind:to="'/characters/characterDetails/'+char.id" v-bind:charId="char.id" class="btn btn-primary">En savoir plus</router-link>
                    <transition>
                        <router-view v-bind:charId="char.id"/>
                    </transition>
                </div>
            </div>            
        </div>
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
            genreChar: '',
            urlImage: ''
        }
    },
    created: function(){
        this.genreChar = this.Characters.genre,
        //console.log(this.charList)
        this.urlImage = this.charList.image
        console.log("Url img", this.urlImage)

    },
    computed: {
        imgUrl (value) {
            //console.log("test url", require(value));
            //return require(this.urlImage)
            // The path could be '../assets/img.png', etc., which depends on where your vue file is
        }
    }
}
</script>