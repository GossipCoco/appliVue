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
                            <span>{{characterDetails.age}}</span> lunes soit <span>{{ humanAge}}</span> ans
                        </p>
                        <p class="info-global">
                            <span>Grade du personnage</span> : 
                            {{characterDetails.grade}}
                        </p>
                        <p class="presentation-text">
                            <span>Description</span>
                            {{characterDetails.description}}
                        </p>
                        <p class="presentation-text">
                            <span>Biographie</span>
                            {{characterDetails.biographie}}
                        </p>
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
import AllCharactersJson from "../datas/characters.json"
import ClansJson from "../datas/clans.json"
import GradeJason from "../datas/grades.json"

export default {
    name:'CharacterDetails',
    props:['charId', 'charInfo'],
    data(){
        return {
            charId: '',
            allCharacters: AllCharactersJson,
            allClans: ClansJson,
            allGrades: GradeJason,
            currentRoute: window.location.pathname,
            characterDetails: null,
            characterImage: '',
            clanByCharacter: null,
            humanAge: '',
            backgroundImgClan: '',
            logoClan: ''
        }
    },
    created: function(){
        this.charId = this.currentRoute.slice(29)
        this.charId = this.charId
        this.characterDetails = this.allCharacters[this.charId]
        this.characterImage = this.characterDetails.image
        this.charClanId = this.characterDetails.idClan
        this.charClanId = this.charClanId
        this.clanByCharacter = this.allClans[this.charClanId]
        this.backgroundImgClan = this.clanByCharacter.illustration
        this.logoClan = this.clanByCharacter.img
        if(this.characterDetails.age === "Inconnu"){
            return this.humanAge = "Inconnu"
        }else{
            this.humanAge = this.characterDetails.age / 12
        }
    }
}
</script>