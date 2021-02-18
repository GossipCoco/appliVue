<template>
    <div class="col main-container-app">
        <p>Créer un nouvel utilisateur</p>
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
    <button class="btn btn-primary" v-on:click="validate()">S'enregistrer</button>
  </div>
    </div>
</template>
<script>
export default {
    name: 'register-user',
    data(){
        return{
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
        }
    }
}
</script>