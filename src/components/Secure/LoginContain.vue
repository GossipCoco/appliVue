/* eslint-disable */
<template>
    <div>
      <div class="mb-3">
        <h3>Se connecter</h3>
        <label class="form-label">Email</label>
      <input type="email" class="form-control" id="formGroupExampleInput" placeholder="Votre email">
      </div>
      <div class="mb-3">
      <label class="form-label">Mot de passe</label>
      <input type="password" class="form-control" id="formGroupExampleInput2" placeholder="Votre mot de passe">
      </div>
        <button class="btn btn-primary">Se connecter</button>
    </div>
</template>
<script>
export default {
  name: 'LoginContain',
  data () {
    return {
      msg: 'Se logger'
    }
  }
}
</script>
