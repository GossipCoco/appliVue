<template>
    <div>
        <p>
            Information sur l'utilisateur
            {{userShowInfo}}
        </p>
    </div>
</template>
<script>
export default {
    name: 'UserDetails',
    props: ['userInformation'],
    data: function(user){
            return {
                userShowInfo: this.userInformation,
            }
        },        
}
</script>