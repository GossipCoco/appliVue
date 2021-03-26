<template>
    <div class="col main-container-app">
        <div class="row presentation-contain">
            <div class="col">
                <p>
                    <b-avatar :src="require('@/assets/images/users/'+userProfil.thumbnailUrl)" class="container-avatar" size="72px"></b-avatar><br>
                    Mon profil {{ userProfil.name }}<br>
                    Nom d'utilisateur : {{ userProfil.username }}<br>
                    Email : {{ userProfil.email }}<br>
                    Adresse : {{ userProfil.address.city}}<br>
                    Site : {{userProfil.website}}<br>
                    Anniversaire : {{userProfil.birthday}}
                </p>
            </div>
            <div  class="col" v-if="userProfil.idPermission === 1">
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
            usrProfil: [], 
            usrIdTest :0,          
        }
    },
    created: function () {
        this.usrId = this.currentRoute.slice(17)
    },
    async mounted(){
        this.usrProfil = await UsersService.getUsers();
        console.log(usrProfil.findIndex(profil => profil.id === '0'));
        
    },
    beforeMount: function(){
        this.usrId = this.usrId;
        this.userProfil = this.UsersDatas[this.usrId];        
    },
    methods:{
        showFormEdit(){
            this.showFormEditContaine = true
        },
        editInfoUsrSuccess(value){
            this.usrName = value
        }
    }
}
</script>