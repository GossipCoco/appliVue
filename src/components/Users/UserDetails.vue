/* eslint-disable */
<template>
    <div>
        <p>
            Information sur l'utilisateur
        </p>
        <p>Nom : {{ usrInfo.name }}</p>
        <p>Nom d'usage : {{ usrInfo.username }}</p>
        <p>Email : {{ usrInfo.email }}</p>
    </div>
</template>
<script>
export default {
    name: 'UserDetails',
    props: ['usrInfo'],
    data: function(){
        return {
            usrInfo
        }
    },        
}
</script>