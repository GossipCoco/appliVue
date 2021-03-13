<template>
    <div class="main-container-app accueil-app">
        <div class="presentation-contain">
        <h1>Admin</h1>
        <div class="row form-group ajouterVille">
            <div class="col-sm-2">
                Ajouter un personnage
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
                <li v-for="newChar of newCharacters" :key="newChar._id" style="margin: 1rem">
                    <div style="display: flex; flex-direction: row; width: 450px">
                        <p style="flex: 1; font-size: 15">{{ newChar.name }} </p>
                        <b-button @click="deleteChararcter(newChar.name)" variant="secondary"  style="flex: 1; font-size: 15">Supprimer</b-button>
                    </div>               
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
      newChar: "",
      newCharacters:[],      
    };
  },
  async mounted() {
    this.newCharacters = await CharactersService.getNewCharacters();
  },
  methods: {    
    async addCharAction() {
        const character = { name: this.newChar, iq: 0 };
        const idCharacter = await CharactersService.addCharacter(character);
        console.log("step3 : ",idCharacter.id)
        console.log("step4 : ",this.newCharacters)
    },
    deleteChararcter(character) {
        CharactersService.deleteChararcter(character);
        const indexToDelete = this.newCharacters.findIndex(
            characterItem => character.id === characterItem.id
        );
        this.newCharacters.splice(indexToDelete, 1);
    }
  }
}
</script>