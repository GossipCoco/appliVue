/* eslint-disable */
<template>
    <div class="user-personnal-info">
        <div class="contain-infoUser">

            <p>Information sur l'utilisateur</p>
            <p>Nom : {{ usrInfo.name }}</p>
            <p>Nom d'usage : {{ usrInfo.username }}</p>
            <p>Email : {{ usrInfo.email }}</p>
            <button class="btn btn-primary" v-on:click="showFormEdit()">Modifier des informations</button>
        </div>
        <div v-if="showFormEditContaine === true">
            <user-form-edit v-bind:userPersonnalInfo="usrInfo" @editInfoUsrSuccess="editInfoUsrSuccess"></user-form-edit>
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
            usrName: this.usrInfo.name,
            usrId: this.usrInfo.id
        }
    },
    computed: {
        filterIdPhoto: function(){
            console.log(this.usrId)
        }
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