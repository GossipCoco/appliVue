<template>
    <div class="col main-container-app">
        <div class="login-contain">
            <div class="mb-3 presentation-contain">
                <p>Créer un compte</p>
                <b-form @submit="submitAction">
                    <b-form-group label="Adresse email">
                        <b-form-input @change="initMessageError" v-model="email" type="email">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group label="Mot de passe">
                        <b-form-input
                        @change="initMessageError"
                        v-model="password"
                        type="password"
                        />
                    </b-form-group>
                    <b-button type="submit" variant="primary">Créer son compte</b-button>
                    <b-alert show v-if="messageError" variant="danger">{{
                        messageError
                    }}</b-alert>
                </b-form>
            </div>
        </div>
    </div>
</template>
<script>

import { auth } from "@/firebase";
export default {
    name: 'register-user',
    data(){
        return{
            email: null,
            password: null,
            messageError: null
        }
    },
    methods:{
        async submitAction(evt) {
        evt.preventDefault();

        if (this.password.length >= 6) {
            await auth.createUserWithEmailAndPassword(this.email, this.password);
            await auth.signInWithEmailAndPassword(this.email, this.password);
            this.$router.replace({ path: "/" });
        } else {
            this.messageError =
            "Le mot de passe doit contenir au moins 6 caractères";
        }
        },
        initMessageError() {
        this.messageError = null;
        }
    }
}
</script>