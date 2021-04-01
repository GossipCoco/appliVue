<template>
    <div class="col-sm-6">
        <h2>Liste des utilisateurs</h2>
        <div v-if="dataReady">
         <b-list-group>
            <b-list-group-item v-for="user in allUsers" :key="user.id" >                
                <p><span> ID et login : </span>{{ user.id }} - {{ user.login }}</p>
                <p><span> Username : </span>{{ user.name }}</p>
                <p><span> Email : </span> {{ user.email }}</p>
                <p><span> Location : </span> {{ user.location }}</p>
                <p><span> Date de naissance : </span> {{ user.birthday  }}</p>
            </b-list-group-item>
        </b-list-group>
        </div>
    </div>
</template>
<script>
    import { UsersService } from '../../services/Users.service'
    export default {
        name: 'AllUsers',
        data () {
            return {
                dataReady: false,
            }
        },
        async mounted() {
            this.allUsers = await UsersService.getUsers();
            this.dataReady = true;
        },        
    }
</script>