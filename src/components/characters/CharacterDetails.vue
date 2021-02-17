<template>
    <div class="col main-container-app">
        <div class="row">
            <div class="col">
                <p>Détail sur le personnage</p>
                <p>{{characterDetails.name}}</p>
                <img :src="characterImage">
            </div>
            <div class="col">
                <p>
                     {{characterDetails.clan}}<br>
                    {{characterDetails.grade}}
                </p>
                <p>
                    {{characterDetails.biographie}}
                </p>
                <p>
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
            clanByCharacter: null
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


    }
}
</script>