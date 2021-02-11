<template>
    <div class="col main-container-app">
        <p>
            Mon profil
        </p>
    </div>
</template>
<script>
export default {
    name:'UserProfil',
    props: ['usrInfo'],
    data(){
        return{
            usrId: '',
        }
    }
}
</script>