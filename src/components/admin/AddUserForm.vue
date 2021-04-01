<template>
    <div>
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
</template>

<script>
    import { UsersService } from '../../services/Users.service'
    import allCountries from '../datas/allCountries.js'
    export default {
        name: 'AddUserForm',
        data(){
            return{                
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
            }
        },
         methods: {    
                async addUserAction() {
                this.lastId = this.allUsers.length;
                this.lastId = this.lastId;
                const user = { id: this.lastId, name: this.newUser, login: this.newUser, email: this.newUserEmail, location: this.location };
                const idUser = await UsersService.addUser(user);
            },
        }        
    }
</script>