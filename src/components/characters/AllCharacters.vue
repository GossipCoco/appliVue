<template>
    <div class="row contain-all-characters">
        <div class="col">
            <ul  class="list-group">
                <li v-for="char in charList" :key="char.id"  class="list-group-item">
                    {{char.name}} <br>
                    <img class="image-character" :src="char.image" /><br>
                    <router-link v-bind:to="'/characters/characterDetails/'+char.id" v-bind:charId="char.id">Voir le profil complet</router-link>
                    <transition>
                        <router-view v-bind:charId="char.id"/>
                    </transition>
                </li >
            </ul>
        </div>
        <div class="col container-form-create-character">
            <create-a-character />
        </div>
    </div>
</template>
<script>
import Characters from "../datas/characters.json"
import CreateACharacter from './CreateACharacter.vue'
export default {
    name: 'AllCharacters',
    props:['charList'],
    components:{
        'create-a-character': CreateACharacter
    },
    data () {
        return{
            imageChar: this.charList.image,
            Characters: Characters
        }
    }
}
</script>