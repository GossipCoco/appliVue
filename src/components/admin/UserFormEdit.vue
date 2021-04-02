<template>
    <div mb-3>
        <p>
            Modifier {{usrName}}
        </p>
        <div class="form-edit">
            
        </div>
    </div>
</template>
<script>
export default {
    name:'UserFormEdit',
    props: ['userPersonnalInfo'],
    data () {
        return {
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