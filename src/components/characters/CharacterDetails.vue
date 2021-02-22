<template>
    <div class="col main-container-app">
        <div class="row">
            <div class="col-md-2">
                <h2>Détail sur {{characterDetails.name}}</h2>                
                <img :src="characterImage">
            </div>
            <div class="col-md-10">
                <div class="row">
                    <div class="col">
                        <img :src="clanByCharacter.img" />
                    </div>                    
                    <div class="col">
                        <h3>{{characterDetails.clan}}</h3>
                    </div>

                </div>
                <p>{{characterDetails.age}} lunes soit {{ humanAge}} ans</p>
                <p>
                    {{characterDetails.grade}}
                </p>
                <p class="presentation-text">
                    {{characterDetails.description}}
                </p>
                <p class="presentation-text">
                    {{characterDetails.biographie}}
                </p>
                <p class="presentation-text">
                    Description du clan <br>
                    {{clanByCharacter.description}}
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import AllCharactersJson from "../datas/characters.json"
import ClansJson from "../datas/clans.json"
export default {
    name:'CharacterDetails',
    props:['charId', 'charInfo'],
    data(){
        return {
            charId: '',
            allCharacters: AllCharactersJson,
            currentRoute: window.location.pathname,
            characterDetails: null,
            characterImage: '',
            allClans: ClansJson,
            clanByCharacter: null,
            humanAge: ''
        }
    },
    created: function(){
        this.charId = this.currentRoute.slice(29)
        this.charId = this.charId - 1
        this.characterDetails = this.allCharacters[this.charId]
        this.characterImage = this.characterDetails.image
        this.charClanId = this.characterDetails.idClan
        this.charClanId = this.charClanId
        this.clanByCharacter = this.allClans[this.charClanId]
        if(this.characterDetails.age === "Inconnu"){
            return this.humanAge = "Inconnu"
        }else{
            this.humanAge = this.characterDetails.age / 12
        }
        


    }
}
</script>