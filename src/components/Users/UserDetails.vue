/* eslint-disable */
<template>
    <div class="user-personnal-info">
        <p>Information sur l'utilisateur</p>
        <p>Nom : {{ usrInfo.name }}</p>
        <p>Nom d'usage : {{ usrInfo.username }}</p>
        <p>Email : {{ usrInfo.email }}</p>
        <button v-on:click="showFormEdit()">Modifier des informations</button>
        <div v-if="showFormEditContaine === true">
            <user-form-edit v-bind:userPersonnalInfo="usrInfo"></user-form-edit>
        </div>
    </div>
</template>
<script>
import UserFormEdit from './UserFormEdit.vue'
export default {
    name: 'UserDetails',
    props: ['usrInfo'],
    components:{
        'user-form-edit': UserFormEdit
    },
    data (){
        return{
            showFormEditContaine: false,
        }
    },
    methods:{
        showFormEdit(){
            this.showFormEditContaine = true
        }
    }
}
</script>