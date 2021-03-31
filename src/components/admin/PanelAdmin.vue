<template>
    <div class="main-container-app accueil-app panel-admin">
        <div class="presentation-contain">
            <h1>Panel Administrateur</h1>
            <div class="form-group">
                <div class="col-sm-12">
                    <h2>Ajouter un utilisateur</h2>
                </div>
                <div class="addUser-container">
                    <div class="col-sm-6">
                        <b-form>
                            <b-input-group label="Nom d'utilisateur :" label-for="inline-form-input-name">
                            <b-form-input
                                id="inline-form-input-name"                               
                                placeholder="Nom d'utilisateur"
                                v-model="newUser" />
                            </b-input-group>
                            <b-input-group label="Email :" label-for="inline-form-input-email">
                            <b-form-input
                                id="inline-form-input-email"
                                placeholder="Email"
                                v-model="newUserEmail" />
                            </b-input-group>
                            <b-form-group id="input-group-3" label="Pays :" label-for="input-3">
                                <b-form-select
                                id="input-3"
                                v-model="location"
                                placeholder="Choisir"
                                :options="allCountries"
                                required
                                ></b-form-select>
                            </b-form-group>
                            <b-button @click="addUserAction" class="primary" variant="primary">Ajouter cet utilisateur</b-button>
                        </b-form>
                    </div>        
                    <div class="col-sm-6">
                        <h2>Liste des utilisateurs</h2>
                        <b-list-group>
                            <b-list-group-item v-for="user in allUsers" :key="user.id" >
                                <p><span> ID et login : </span>{{ user.id }} - {{ user.login }}</p>
                                <p><span> Username : </span>{{ user.name }}</p>
                                <p><span> Email : </span> {{ user.email }}</p>
                                <p><span> Anniversaire : </span>{{ user.birthday  }}</p>
                                <p><span> Anniversaire : </span>{{ user.birthday  }}</p>
                            </b-list-group-item>
                        </b-list-group>
                    </div>
                </div>
                <div class="col-sm-12">
                    <ul>
                        <li v-for="characterByUser in charactersByUser" :key="characterByUser.id">
                            {{ characterByUser.id }} - {{ characterByUser.idUser }} - {{ characterByUser.idCharacter }}
                        </li>
                    </ul>
                </div>
            </div> 
        </div>    
    </div>
</template>
<script>
import { CharactersService } from "../../services/Characters.service"
import { UsersService } from '../../services/Users.service'
import { CharactersByUserService } from '../../services/CharactersByUser.service'
import allCountries from '../datas/allCountries.js'
export default {
    name: 'PanelAdmin',
  data() {
    return {
        allCountries: allCountries,
        newUser: '',
        charactersByUser: [],
        newUserEmail: '',
        allUsers: [],
        lastId: null,
        location: '',
        idCharacter: '',
        allCharacters: [],
        characterByUserArray: []
    };
  },
  async mounted() {
    this.allUsers = await UsersService.getUsers();
    this.allCharacters = await CharactersService.getCharacters();
    this.charactersByUser = await CharactersByUserService.getCharactersByUser();
    //console.log(this.charactersByUser.idCharacter)

  },
  methods: {    
    async addUserAction() {
        this.lastId = this.allUsers.length;
        this.lastId = this.lastId;
        const user = { id: this.lastId, name: this.newUser, login: this.newUser, email: this.newUserEmail, location: this.location };
        const idUser = await UsersService.addUser(user);
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