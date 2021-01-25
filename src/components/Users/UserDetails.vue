/* eslint-disable */
<template>
    <div class="user-personnal-info">
        <p>Information sur l'utilisateur</p>
        <p>Nom : {{ usrInfo.name }}</p>
        <p>Nom d'usage : {{ usrInfo.username }}</p>
        <p>Email : {{ usrInfo.email }}</p>
        <button>Modifier des informations</button>
        <user-form-edit></user-form-edit>
    </div>
</template>
<script>
import UserFormEdit from './UserFormEdit.vue'
export default {
    name: 'UserDetails',
    props: ['usrInfo'],
    components:{
        'user-form-edit': UserFormEdit
    }
    }
</script>