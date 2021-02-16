<template>
    <div>
        <ul  class="list-group">
            <li v-for="char in charList" :key="char.id"  class="list-group-item">
                {{char.name}} <br>
                <img class="image-character" :src="char.image" />
                <router-link v-bind:to="'/characters/characterDetails/'+char.id" v-bind:charId="char.id">Voir le profil complet</router-link>
                <router-view  v-bind:charId="char.id"/>
                <!--
                    <p>
                     <router-link v-bind:to="'/characters/characterDetails/'+char.id">Voir le profil complet</router-link>
                    <router-view v-bind:usrInfo="user.id"></router-view></p> -->
            </li >
        </ul>
    </div>
</template>
<script>
export default {
    name: 'AllCharacters',
    props:['charList'],
    data () {
        return{
            imageChar: this.charList.image
        }
    }
}
</script>