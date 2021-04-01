<template>
    <div class="main-container-app accueil-app panel-admin">
       
        <div class="presentation-contain">
            <h1>Panel Administrateur</h1>
                <b-card title="Card Title" no-body>
                    <b-card-header header-tag="nav">
                    <b-nav card-header tabs>
                        <b-nav-item to="/panel-admin/allusers" exact exact-active-class="active">Utilisateurs</b-nav-item>
                        <b-nav-item to="/panel-admin/add-user" exact exact-active-class="active">Ajout d'utilisateur</b-nav-item>                        
                    </b-nav>
                    </b-card-header>
                    <b-card-body>
                    <router-view></router-view>
                    </b-card-body>
                </b-card>


            <!-- <div class="form-group">
                <div class="col-sm-12">
                    <h2>Ajouter un utilisateur</h2>
                </div>
                <div class="addUser-container">
                    <div class="col-sm-6">
                        <add-user-form />                        
                    </div>        
                    <div class="col-sm-6">
                        <h2>Liste des utilisateurs</h2>
                        <b-list-group>
                            <all-users v-bind:allusers="allUsers" />
                        </b-list-group>
                    </div>
                </div>
                <div class="col-sm-12">
                    <ul>
                        <li v-for="characterByUser in charactersByUser" :key="characterByUser.id">
                            <p>{{ showUser(characterByUser.idUser, characterByUser.idCharacter) }} - {{ characterByUser.idUser  }} - {{ characterByUser.idCharacter }}</p>
                        </li>
                    </ul>
                </div>
            </div> -->
        </div>    
    </div>
</template>
<script>
import { CharactersService } from "../../services/Characters.service"
import { UsersService } from '../../services/Users.service'
import { CharactersByUserService } from '../../services/CharactersByUser.service'
import allCountries from '../datas/allCountries.js'
import AllUsers from './AllUsers.vue'
import AddUserForm from './AddUserForm.vue'
export default {
    name: 'PanelAdmin',
    components: {
        'all-users': AllUsers,
        'add-user-form': AddUserForm
    },
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
  },
  methods: {    
    async showCharactersByUser(idUser, idCharacter){
        console.log(idUser, idCharacter);
    },
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