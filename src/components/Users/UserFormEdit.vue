<template>
    <div mb-3>
        <p>
            Modifier {{usrName}}
        </p>
        <div class="form-edit">
            <form id="editForm">
                <label>Nom</label>
                <input type="text" class="form-control" v-model="usrName"> <br>
                <label>Email</label>
                <input type="email" class="form-control" v-model="usrEmail"> <br>
                <button class="btn btn-primary" v-on:click="editUserInformation">Modifier</button>
            </form>            
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
            form: {
                email: '',
                name: '',
                checked: []
            },
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