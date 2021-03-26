 /* eslint-disable */
<template>
        <div class="presentation-contain">
            <b-card no-body class="overflow-hidden" style="max-width: 100%x;">
                <b-row no-gutters>
                <b-col md="2"  :style="{ 'background-image': 'url(' + require('@/assets/images/backgrounds/'+ backgroundImg) + ')' }">
                    <b-card-img :src="require('@/assets/images/personnage/'+character.image)" alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="10">
                    <b-card-body :title="character.name" class="title-character-name">
                        <b-col md="10"><b-card-title><h2>{{ gradeCharacter.grade }} du {{ clanOfCharacter.name}}</h2></b-card-title></b-col>

                        <b-col md="2">
                        <router-link to="/characters/allcharacters" type="button" class="btn btn-primary">Retourner sur la liste de tous les personnages</router-link>                        
                        </b-col>
                        <b-card-text>
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
    data(){
        return {
            allClansService: [],
            clanOfCharacter: [],
            character: null,
            characterImage: null, 
            allClans: allclans,
            allGrades: GradeJason,
            characterClan: null,
            idClan: null,
            backgroundImg: null,
            clanByCharacter: null,
            clanName: null,
            descriptionClan: null,
            gradeCharacter: null,

        }
    },
    async mounted(){
        this.allClansService = await ClansService.getClans();
        console.log(this.allClansService);
        this.clanOfCharacter = await ClansService.getClanById(this.idClan) 
        console.log(this.clanOfCharacter);       
    },
    mounted(){
        const slug = this.$route.params.slug;
        this.character = characterDB.find((character)=>character.slug === slug);
        this.characterImage = this.character.image;
        this.gradeCharacter = this.character.idGrade;
        this.idClan = this.character.idClan;
        this.characterClan = allclans.find((clan)=>clan.id === this.idClan);
        //this.gradeCharacter = allGrades.find((grade)=>grade.id === this.gradeCharacter);
        //console.log(this.allGrades.find((grade)=>grade.id === this.character.idGrade));
        this.gradeCharacter = this.allGrades.find((grade)=>grade.id === this.character.idGrade);        
        this.backgroundImg = this.characterClan.illustration;      
        this.descriptionClan = this.characterClan.description;
    },
    methods: {
        onFocusOut: function(e) {
            this.descriptionCharacter = e.target.innerHTML
            this.biographieCharacter = e.target.innerHTML
            this.descriptionClan = e.target.innerHTML
        }
    }
}
</script>