<template>
    <div class="col main-container-app">
        <p>Créer un compte</p>
        <form
        @submit="checkForm"
        >
            <p v-if="errors.length">
                <b>Please correct the following error(s):</b>
                <ul>
                <li v-for="error in errors" :key="error">{{ error }}</li>
                </ul>
            </p>
            <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                    <input type="email" class="form-control" id="staticEmail" v-model="userEmail"  required>            
                </div>
            </div>
            <div class="mb-3 row">
                <label for="username" class="col-sm-2 col-form-label">Nom d'utilisateur</label>
                <div class="col-sm-10">
                <input type="text" class="form-control" id="username" v-model="username"  required>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="birthdayUser" class="col-sm-2 col-form-label">Date de naissance</label>
                <div class="col-sm-10">
                <input type="date" class="form-control" id="birthdayUser" v-model="birthdayDate"  required>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label">Mot de passe</label>
                <div class="col-sm-10">
                <input type="password" class="form-control" id="inputPassword" v-model="userPassWord" required>
                </div>
            </div>
            <div class="mb-3 row">
                <label for="repeatPassword" class="col-sm-2 col-form-label">Répétez le mot de passe</label>
                <div class="col-sm-10">
                <input type="password" class="form-control" id="repeatPassword" v-model="repeatPassWord" required>
                </div>
            </div>
            <div class="col-12">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
                    <label class="form-check-label" for="invalidCheck">
                        J'accepte les conditions d'utilisation
                    </label>
                    <div class="invalid-feedback">
                        Vous devez accepter les conditions d'utilisation
                    </div>
                </div>
            </div>
            <div class="col-12">
                <button class="btn btn-primary">S'enregistrer</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    name: 'register-user',
    data(){
        return{
            errors:[],
            userEmail: 'exemple@exemple@com',
            username: 'nom d\'utilisateur',
            userPassWord: '***',
            repeatPassWord: '',
            birthdayDate: new Date()
        }
    },
    computed:{

    },
    methods:{
        validate(){
            console.log('validate')
        },
        checkForm: function (e) {
            console.log(e);
            this.errors = [];
            if (!this.username) {
                this.errors.push("Name required.");
            }
            if (!this.userEmail) {
                this.errors.push('Email required.');
            } else if (!this.validEmail(this.userEmail)) {
                this.errors.push('Valid email required.');
            }
            if (!this.errors.length) {
                return true;
            }
            e.preventDefault();
        },
        validEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
}
</script>