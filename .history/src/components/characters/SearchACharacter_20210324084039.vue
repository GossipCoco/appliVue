<template>
    <div class="accueil-app search-container">        
        <div class="col presentation-contain">Rechercher un personnage</div>
        <div class="col presentation-contain">
            <select-clan label="Clan ou Groupe" @setClan="setClan" v-bind:typeClan="currentClan"></select-clan>
            </div>
        <div class="col presentation-contain">Champ de recherche</div>
        <div class="col presentation-contain contain-search-result">Résultat : <p>{{selectedClan.id}}</p></div>
    </div>
</template>
<script>
import allClans from '../datas/allclans'
import SelectClan from "../clans/SelectClan"
export default {
    name: 'SearchACharacter',
    components: {
        'select-clan':SelectClan
    },
    data(){
        return {
            searchCharacter: null,
            autocompleteCharacter: null,
            currentClan : 'Clan actuel',
            selectedClan: null,
            allClans: allClans,
        }
    },
    methods:{
        setClan(value){
            this.selectedClan = value;
            console.log(this.allClans, this.selectedClan);
            this.selectedClan = this.allClans[this.selectedClan];
            console.log(this.selectedClan);
        }
    }
}
</script>
<style scoped>
    .container{
        max-width: 800px;
    }
    .search-container{
        height: 500px;
    }
    .contain-search-result{
        height: 450px;
    }
</style>