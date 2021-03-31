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
                                class="mb-2 mr-sm-2 mb-sm-0"
                                placeholder="Jane Doe"
                                v-model="newUser" />
                            </b-input-group>
                            <b-input-group label="Email :" label-for="inline-form-input-email">
                            <b-form-input
                                id="inline-form-input-email"
                                placeholder="Username"
                                v-model="newUserEmail" />
                            </b-input-group>

                            <b-form-group id="input-group-3" label="Pays :" label-for="input-3">
                                <b-form-select
                                id="input-3"
                                v-model="allCountries.name"
                                :options="name"
                                required
                                ></b-form-select>
                            </b-form-group>
                            <b-button @click="addUserAction" class="primary" variant="primary">Ajouter cet utilisateur</b-button>
                        </b-form>
                    </div>        
                    <div class="col-sm-6">
                        <h2>Liste des utilisateurs</h2>
                        <ul>
                            <li v-for="user in allUsers" :key="user.id" class="panel-admin-all-users">                            
                                <p><span> ID et login : </span>{{ user.id }} - {{ user.login }}</p>
                                <p><span> Username : </span>{{ user.name }}</p>
                                <p><span> Email : </span> {{ user.email }}</p>
                                <p><span> Anniversaire : </span>{{ user.birthday  }}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> 
        </div>    
    </div>
</template>
<script>
import { CharactersService } from "../../services/Characters.service"
import { UsersService } from '../../services/Users.service'
import allCountries from '../datas/json/allCountries.json'
export default {
    name: 'PanelAdmin',
  data() {
    return {
        allCountries: allCountries,
        newUser: '',
        newUserEmail: '',
        newCharacters:[],
        allUsers: [],
        lastId: null
    };
  },
  async mounted() {
    this.newCharacters = await CharactersService.getNewCharacters();
    this.allUsers = await UsersService.getUsers();
  },
  methods: {    
    async addUserAction() {
        this.lastId = this.allUsers.length;
        this.lastId = this.lastId;
        const user = { id: this.lastId, name: this.newUser, login: this.newUser, email: this.newUserEmail };
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