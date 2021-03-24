<template>
    <div class="accueil-app search-container">        
        <div class="col presentation-contain">Rechercher un personnage</div>
        <div class="col presentation-contain">
            <select-clan label="Clan ou Groupe" @setClan="setClan" v-bind:typeClan="currentClan"></select-clan>
            </div>
        <div class="col presentation-contain">Champ de recherche</div>
        <div class="col presentation-contain contain-search-result">Résultat : <p>{{selectedClan}}</p></div>
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
        }
    },
    methods:{
        setClan(value){
            console.log(value);
            this.selectedClan = value;
            const found = allClans.find(id => id === this.selectedClan);
            console.log(found);
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