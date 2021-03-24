<template>
    <div class="accueil-app search-container">        
        <div class="col presentation-contain">Rechercher un personnage</div>
        <div class="col presentation-contain">Champ de recherche</div>
        <div class="col presentation-contain contain-search-result">Résultat</div>
    </div>
</template>
<script>
import { CharactersService } from "../../services/Characters.service"
export default {
    name: 'SearchACharacter',
    data(){
        return {
            searchCharacter: null,
            autocompleteCharacter: null
        }
    },
    async mounted(){
        this.allCharacters = await CharactersService.getCharacters();
        this.allClans = await ClansService.getClans();
        this.allStates = await StatesService.getStates();
        this.allGrades = await GradesService.getGrades();
        this.allGenres = await GenresService.getGenres();
    },

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