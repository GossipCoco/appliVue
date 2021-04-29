<template>
    <div class="row">
        <div class="col-sm-4">
            <h2>Liste des utilisateurs</h2>
            <div v-if="dataReady">
            <b-list-group>
                <b-list-group-item v-for="user in allUsers" :key="user.name" >                
                    <p><span> ID et login : </span>{{ user.id }} - {{ user.login }}</p>
                    <p><span> Username : </span>{{ user.name }}</p>
                    <p><span> Email : </span> {{ user.email }}</p>
                    <p><span> Location : </span> {{ user.location }}</p>
                    <p><span> Date de naissance : </span> {{ user.dateBirthday }}</p>
                    <button  type="button" class="btn btn-link btn-sm" v-on:click="setUserInfo()">Plus d'info</button> 
                </b-list-group-item>
            </b-list-group>
            </div>
        </div>        
        <div class="col-sm-8">
            <div v-if="showUserInfoDetail === true">
                <user-details  v-bind:usrInfo="userPersonnalInfo"/>
            </div>
        </div>
    </div>
</template>
<script>
    import { UsersService } from '../../services/Users.service'
    import { RolesService } from '../../services/Roles.service'
    import UserDetails from './UserDetails.vue'
    export default {
        name: 'AllUsers',
        components: {
            'user-details': UserDetails
        },
        data () {
            return {
                dataReady: false,
                oldUser: [], 
                showUserInfoDetail: false,
                roleUser: null,
            }
        },
        filters:{
            getBirthday(value){
                var date = date.toLocaleDateString();                
                return date;
            }
        },
        async mounted() {
            this.allUsers = await UsersService.getUsers();
            this.allRoles = await RolesService.getRoles();
            this.dataReady = true;
        },
        methods: {
            setUser(value) {  
                console.log(value);
                this.userPersonnalInfo = value;                
                this.showUserInfoDetail = true
            },
        },
        computed: {
            setUserInfo(){
                //to do : set info
            }
        }
    }
</script>