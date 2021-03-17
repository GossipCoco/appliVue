 /* eslint-disable */
<template>
    <div class="col main-container-app">
        <div class="row presentation-contain">
            <div class="test-bind" :style="{ 'background-image': 'url(' + require('@/assets/images/backgrounds/'+ backgroundImg) + ')' }">
                <b-card
                    title="Card Title"
                    :img-src="require('@/assets/images/personnage/'+character.image)"
                    tag="article"                    
                    class="mb-2"
                    :style="{ 'background-image': 'url(' + require('@/assets/images/backgrounds/'+ backgroundImg) + ')' }"
                >
                    <b-card-text>
                    Détails sur {{ character.name }}<br>    
                    </b-card-text>

                    <router-link to="/characters/allcharacters" type="button" class="btn btn-primary">Retourner sur la liste de tous les personnages</router-link>
                </b-card>

            </div>
        </div>
    </div>
</template>
<script>
import characterDB from "../../components/datas/allcharacters.js"
import allclans from "../datas/allclans"
import GradeJason from "../datas/grades.json"
import States from "../datas/states.json"
import Genre from "../datas/genres.json"
import { ClansService } from "../../services/Clans.service"

export default {
    name:'CharacterDetails', 
    data(){
        return {
            character: null,
            characterImage: null, 
            allClans: allclans,
            characterClan: null,
            idClan: null,
            backgroundImg: null,
            clanByCharacter: null,
            allClansService: []
        }
    },
    async mounted(){
        this.allClansService = await ClansService.getClans();
    },
    mounted(){
        console.log(this.allClansService);
        const slug = this.$route.params.slug;
        this.character = characterDB.find((character)=>character.slug === slug);
        this.characterImage = this.character.image;
        this.idClan = this.character.idClan;
        this.characterClan = allclans.find((clan)=>clan.id === this.idClan);
        this.backgroundImg = this.characterClan.illustration;       
    }
}
</script>