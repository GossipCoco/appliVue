 /* eslint-disable */
<template>
    <div class="col main-container-app">
        <div class="row presentation-contain">
            <div class="col-md-4 container-background-image-clan" v-bind:style="{ 'background-image': 'url(' + require('@/assets/images/backgrounds/'+ backgroundImgClan) + ')' }">
                <img :src="require('@/assets/images/personnage/'+characterImage)">
            </div>
            <div class="col-md-8">
                <div class="row">
                    <div class="col-2 logo-clan">
                         <img :src="require('@/assets/images/clans/'+logoClan)" /> 
                    </div>                    
                    <div class="col-8">
                        <h3>Détail sur {{characterDetails.name}}</h3>
                        <h2>{{characterDetails.clan}}</h2>
                        
                    </div>
                    <div class="col-2">
                        <router-link to="/characters/allcharacters" type="button" class="btn btn-primary">Retourner sur la liste de tous les personnages</router-link>
                        
                    </div>
                </div>
                <div class="row">
                    <div class="col fiche-personnage">
                        <p class="info-global">
                            <span>{{ ageInfo }}</span>
                        </p>
                        <p class="info-global">
                            <span>Grade du personnage</span> : 
                            {{nameGrade.grade}}
                        </p>
                        <p class="info-globale">
                            <span>Genre : </span> {{ nameGenre }}
                        </p>
                        <p class="presentation-text">
                            <span>Description</span>                            
                        </p>
                        <p class="presentation-text" contenteditable="true" v-html="descriptionCharacter" @focusout="onFocusOut($event)"></p>
                        <p class="presentation-text">
                            <span>Biographie</span>                            
                        </p>
                        <p class="presentation-text" contenteditable="true" v-html="biographieCharacter" @focusout="onFocusOut($event)"></p>
                        <p class="presentation-text">
                            Description du clan <br>
                            {{clanByCharacter.description}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import AllCharactersJson from "../datas/json/characters.json"
import ClansJson from "../datas/json/clans.json"
import GradeJason from "../datas/json/grades.json"
import States from "../datas/json/states.json"
import Genre from "../datas/json/genres.json"
import { ClansService } from "../../services/Clans.service"

export default {
    name:'CharacterDetails',
    props:['charId', 'charInfo'],
    data(){
        return {
            allCharacters: AllCharactersJson,
            allClans: ClansJson,
            newAllClans:[],
            allGrades: GradeJason,
            allGenres: Genre,
            currentRoute: window.location.pathname,
            characterDetails: null,
            characterImage: null,
            clanByCharacter: null,
            humanAge: null,
            backgroundImgClan: null,
            logoClan: null,
            idGradeCharacter: null,
            nameGrade: null,
            idGenreChar: null,
            nameGenre: null,
            descriptionCharacter: null,
            biographieCharacter: null,
            ageInfo: null
        }
    },
    created: function(){
        this.characterDetails = this.allCharacters[this.charId]
        this.characterImage = this.characterDetails.image
        this.descriptionCharacter = this.characterDetails.description
        this.biographieCharacter = this.characterDetails.biographie
        this.idGradeCharacter = this.characterDetails.idGrade
        this.idGenreChar = this.characterDetails.idgenre
        this.charClanId = this.characterDetails.idClan


        this.nameGrade = this.allGrades[this.idGradeCharacter]
        this.nameGenre = this.allGenres[this.idGenreChar].genre
        this.charClanId = this.charClanId
        this.clanByCharacter = this.allClans[this.charClanId]
        this.backgroundImgClan = this.clanByCharacter.illustration
        this.logoClan = this.clanByCharacter.img
        if(this.characterDetails.age === "Inconnu"){
            return this.ageInfo = "Âge du personnage inconnu"
        }else{
            this.ageInfo = "Âge du personnage : " + this.characterDetails.age + " lunes soit " + this.characterDetails.age / 12 + "ans"
        }
        
    },
    async mounted(){
        this.allclans = await ClansService.getClans();
    },
    mounted(){
        const slug = this.$route.params.slug;   
        console.log(slug);     
        this.character = this.allCharacters.find((character)=>character.slug === slug);
        console.log(character);
    },
    methods: {
        onFocusOut: function(e) {
            this.descriptionCharacter = e.target.innerHTML
            this.biographieCharacter = e.target.innerHTML
        }
    }
}
</script>