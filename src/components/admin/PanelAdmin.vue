<template>
    <div class="main-container-app accueil-app">
        <div class="presentation-contain">
        <h1>Admin</h1>
        <div class="row form-group ajouterVille">
            <div class="col-sm-2">
                Ajouter une personnage
            </div>

        <div class="col-sm-3">
            <input
            type="text"
            id="characterField"
            class="form-control"
            v-model="newChar"
            />
        </div>

        <div class="col-sm-2">
            <b-button @click="addCharAction" class="primary">Ajouter</b-button>
        </div>
        </div>

        <ul>
        <li v-for="newChar of newCharacter" :key="newChar.id">
            {{ newChar}}
            
        </li>
        </ul>
    </div>
    </div>
</template>
<script>
import { CharactersService } from "../../services/Characters.service"
export default {
    name: 'PanelAdmin',
  data() {
    return {
      characters: [],
      newChar: "",
      newCharacter:[],
      lastId: null,
      newId: null
    };
  },
  async mounted() {
    this.newCharacter = await CharactersService.getNewCharacters();
    const arrayCharac = Object.keys(this.newCharacter);
    console.log(arrayCharac.lenght())
  },
  methods: {
    getNewId(value){

    },
    async addCharAction() {
        const character = { name: this.newChar, id: 0 };
        const idCharacter = await CharactersService.addCharacter(character);
        idCharacter.id = idCharacter;
        this.newCharacter.push(character);
        console.log(this.newCharacter);     
    },
    deleteCity(city) {
        CitiesService.deleteCity(city);
        const indexToDelete = this.cities.findIndex(
            cityItem => city.id === cityItem.id
        );
        this.cities.splice(indexToDelete, 1);
    }
  }

}
</script>