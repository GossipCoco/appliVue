/* eslint-disable */
<template>
    <div class="row">
        <div class="col">
            <div class="contain-infoUser">
                <p>Information sur l'utilisateur {{ usrInfo.name }}</p>
                <b-avatar class="container-avatar" size="72px"></b-avatar><br>
                <p>Nom :  </p>
                <p>Nom d'usage :  </p>
                <p>Email :  </p>
                <p>Date de naissance :  </p>
                <button class="btn btn-primary" v-on:click="showFormEdit()">Modifier des informations</button>
            </div>
        </div>
        <div class="col">
            <div v-if="showFormEditContaine === true">
                <user-form-edit v-bind:userPersonnalInfo="usrInfo" @editInfoUsrSuccess="editInfoUsrSuccess"></user-form-edit>
            </div>
        </div>
    </div>
</template>
<script>
import UserFormEdit from './UserFormEdit.vue'
export default {
    name: 'UserDetails',
    props: ['usrInfo','listPhotos'],
    components:{
        'user-form-edit': UserFormEdit
    },
    data (){
        return{
            showFormEditContaine: false,
            userName: '',
            userLogin: '',
            userEmail: '',
            userLocation: '',
            userBirthday: new Date()
        }
    },    
    created:function(){
        console.log("usrDetails : ", this.usrInfo);
        this.userName = this.usrInfo.name

    },
    computed: {
        
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