 /* eslint-disable */
<template>
        <div class="presentation-contain">
            <b-card no-body class="overflow-hidden" style="max-width: 100%x;">
                <b-row no-gutters>
                <b-col md="2"  :style="{ 'background-image': 'url(' + require('@/assets/images/backgrounds/'+ backgroundImg) + ')' }">
                    <b-card-img :src="require('@/assets/images/personnage/'+character.image)" alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="10">
                    <b-card-body title="Horizontal Card">
                        <b-card-title><h2>{{ character.name }}</h2></b-card-title>
                    <b-card-text>
                        <p>{{ character.description}}</p>
                    </b-card-text>
                    <b-card-text>
                            <p>{{ character.biographie}}</p>
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