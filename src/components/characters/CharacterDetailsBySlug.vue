 /* eslint-disable */
<template>
        <div class="presentation-contain">
            <b-card no-body class="overflow-hidden" style="max-width: 100%x;">
                <b-row no-gutters>
                <b-col md="2" class="background-clan-contain" :style="{ 'background-image': 'url(' + getBackgroundImg(backgroundImg) + ')' }">
                    <b-card-img :src="getImg(character.image)" alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="10">
                    <b-card-body :title="character.name" class="title-character-name">
                        <b-col md="8">
                            <b-card-title>
                                <h2>{{ gradeCharacter.grade }} du {{ clanName }}</h2>
                            </b-card-title>
                        </b-col>
                        <b-col md="4">
                        <router-link to="/characters/allcharacters" type="button" class="btn btn-primary">Retourner sur la liste de tous les personnages</router-link>                        
                        </b-col>
                        <b-card-text>
                            <p class="presentation-text">
                                <span>Genre du personnage : {{genreCharacter.genre}}</span>                                                           
                            </p>
                            <p class="presentation-text">
                                <span>Statut du personnage : {{stateCharacter.statut}}</span>                                                           
                            </p>
                            <p class="presentation-text">                                
                                <span>Description</span>                            
                            </p>
                            <p class="presentation-text" contenteditable="true" v-html="character.description" @focusout="onFocusOut($event)"></p>
                            <p class="presentation-text">
                                <span>Biographie</span>                            
                            </p>
                            <p class="presentation-text" contenteditable="true" v-html="character.biographie" @focusout="onFocusOut($event)"></p>
                            <p class="presentation-text">
                                <span>Description du clan</span>                            
                            </p>
                            <p class="presentation-text" contenteditable="true" v-html="descriptionClan" @focusout="onFocusOut($event)"></p> 
                                                          
                        </b-card-text>
                    </b-card-body>
                </b-col>
                </b-row>
            </b-card>
        </div>
</template>
<script>
import characterDB from "../../components/datas/allcharacters.js"
import allclans from "../datas/allclans"
import GradeJason from "../datas/json/grades.json"
import States from "../datas/json/states.json"
import Genre from "../datas/json/genres.json"
import { ClansService } from "../../services/Clans.service"
import { GradesService } from "../../services/Grades.service"

export default {
    name:'CharacterDetails',
    props:['characterCard'],
    data(){
        return {
            allClans: allclans,
            allGrades: GradeJason,
            allGenres : Genre,
            allStates: States,
            allClansService: [],
            clanOfCharacter: [],
            clanCharacter: [],
            character: null,
            characterImage: null, 
            characterClan: null,
            idClan: null,
            backgroundImg: null,
            clanByCharacter: null,
            clanName: null,
            descriptionClan: null,
            gradeCharacter: null,
            ageCharacter: null,
            humanAgeCharacter: null,
            genreCharacter: null,      
            stateCharacter: null,      
        }
    },
    created:function(){
        console.log(this.characterSlug);
    },
    async mounted(){
        this.allClansService = await ClansService.getClans();
    },
    mounted(){
        const slug = this.$route.params.slug;
        this.character = characterDB.find((character)=>character.slug === slug);
        this.characterImage = this.character.image;
        this.gradeCharacter = this.character.idGrade;
        this.idClan = this.character.idClan;
        this.characterClan = allclans.find((clan)=>clan.id === this.idClan);
        this.gradeCharacter = this.allGrades.find((grade)=>grade.id === this.character.idGrade);  
        this.genreCharacter = this.allGenres.find((genre)=>genre.id === this.character.idgenre);
        this.stateCharacter = this.allStates.find((state)=>state.id === this.character.idStatut)
        this.clanName = this.characterClan.name;      
        this.backgroundImg = this.characterClan.illustration;      
        this.descriptionClan = this.characterClan.description;
    },
    methods: {
        onFocusOut: function(e) {
            this.descriptionCharacter = e.target.innerHTML
            this.biographieCharacter = e.target.innerHTML
            this.descriptionClan = e.target.innerHTML
        },
        getImg (pic) {           
            return require('@/assets/images/personnage/'+pic)
        },
        getBackgroundImg(pic){
            return require('@/assets/images/backgrounds/'+ pic)
        }
    }
}
</script>