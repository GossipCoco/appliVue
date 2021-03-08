/* eslint-disable */
<template>
<div class="user-personnal-info">
    <div class="row">
        <div class="col">
            <div class="contain-infoUser">
                <p>Information sur l'utilisateur</p>
                <b-avatar :src="require('@/assets/images/users/'+usrInfo.thumbnailUrl)" class="container-avatar" size="72px"></b-avatar><br>
                <p>Nom : {{ usrInfo.name }}</p>
                <p>Nom d'usage : {{ usrInfo.username }}</p>
                <p>Email : {{ usrInfo.email }}</p>
                <p>Date de naissance : {{ usrInfo.birthday}}</p>
                <button class="btn btn-primary" v-on:click="showFormEdit()">Modifier des informations</button>
            </div>
        </div>
        <div class="col">
            <div v-if="showFormEditContaine === true">
                <user-form-edit v-bind:userPersonnalInfo="usrInfo" @editInfoUsrSuccess="editInfoUsrSuccess"></user-form-edit>
            </div>
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