<template>
    <div>
        <p>
            Modifier {{usrName}}
        </p>
        <div class="form-edit">
            <form id="editForm">
                <label>Nom</label>
                <input
                type="text"
                v-model="usrName"> <br>
                <label>Email</label>
                <input type="email"
                v-model="usrEmail"> <br>
                <button v-on:click="editUserInformation">Modifier</button>
            </form>
            <p>{{answerName}}</p>
            <p>{{answerEmail}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'UserFormEdit',
    props: ['userPersonnalInfo'],
    data () {
        return {
            usrEditInfo: [],
            usrInfo: this.userPersonnalInfo,
            usrName: this.userPersonnalInfo.name,
            usrEmail: this.userPersonnalInfo.email,
            answerName: '',
            answerEmail: '',
        }
    },
    watch: {
        usrName: function (newName, oldName) {            
            this.answerName = "Ancien nom : " + oldName + " - Nouveau nom : " + newName            
        },
        usrEmail: function(newEmail, oldEmail){
            this.answerEmail = "Ancien email : " + oldEmail + " - Nouvel Email : " + newEmail
            }
    },
    methods: {
        editUserInformation (value) {
            this.$emit('editInfoUsrSuccess', this.usrName);
        },
    }
}
</script>