<template>
    <div class="col main-container-app">
        <div class="row presentation-contain">
            <div class="col">
                <p>
                    <!-- <b-avatar :src="require('@/assets/images/users/'+usrTest.avatar)" class="container-avatar" size="72px"></b-avatar><br> -->
                    <b-avatar :src="getImg(usrTest.avatar)" class="container-avatar" size="72px"></b-avatar><br>
                    Mon profil {{ userProfil.name }}<br>
                    Nom d'utilisateur : {{ userProfil.username }}<br>
                    Email : {{ userProfil.email }}<br>
                    Adresse : {{ userProfil.address.city}}<br>
                    Site : {{userProfil.website}}<br>
                    Anniversaire : {{usrTest.birthday}}
                </p>
            </div>
            <div  class="col" v-if="userProfil.idPermission === 1">
                <p>{{usrTest.name}}</p>
            <div class="col-sm-3 container-allCharacterByBdd" v-for="user in usrTest" :key="user.id" id="all-characters-card">
                <p>{{ user.name }}</p>
            </div>
                <!-- <div>
                    <user-form-edit @editInfoUsrSuccess="editInfoUsrSuccess"/>
                </div> -->
            </div>
            <div class="col" v-else>
                Aucune modification autorisée
            </div>
        </div>
    </div>
</template>
<script>
import UsersDatas from '../datas/json/usersDatas.json'
import Permissions from '../datas/json/permissions.json'
import UserFormEdit from './UserFormEdit.vue'

import { UsersService } from '../../services/Users.service'
export default {
    name:'UserProfil',
    props: ['usrInfo'],
    components:{
        'user-form-edit': UserFormEdit
    },
    data(){
        return{
            usrId: '',
            UsersDatas: UsersDatas,
            currentRoute: window.location.pathname,
            userProfil: null,
            usrCurrentProfil: [],
            usrIdTest :[],     
            usrTest: [],
            usrEmail:[]
        }
    },
    created: function () {
        this.usrId = this.currentRoute.slice(17)
    },
    async mounted(){
        const idUser = parseInt(this.usrId, 10);
        this.usrCurrentProfil = await UsersService.getUsers();
        this.usrTest = this.usrCurrentProfil.find(user=>user.id === idUser);      
    },
    computed: {
        
    },
    beforeMount: function(){
        this.usrId = this.usrId;
        this.userProfil = this.UsersDatas[this.usrId];        
    },
    methods:{
        getImg (pic) {
            console.log("computed : ", pic);
            return require('@/assets/images/users/'+pic)
        },
        showFormEdit(){
            this.showFormEditContaine = true
        },
        editInfoUsrSuccess(value){
            this.usrName = value
        }
    }
}
</script>