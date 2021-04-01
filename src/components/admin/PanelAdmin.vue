<template>
    <div class="main-container-app accueil-app panel-admin">       
        <div class="presentation-contain">
            <h1>Panel Administrateur</h1>
            <b-card title="Card Title" no-body>
                <b-card-header header-tag="nav">
                <b-nav card-header tabs>
                    <b-nav-item to="/panel-admin/allusers" exact exact-active-class="active">Utilisateurs</b-nav-item>
                    <b-nav-item to="/panel-admin/add-user" exact exact-active-class="active">Ajout d'utilisateur</b-nav-item>                        
                </b-nav>
                </b-card-header>
                <b-card-body>
                <router-view></router-view>
                </b-card-body>
            </b-card>
        </div>    
    </div>
</template>
<script>
export default {
    name: 'PanelAdmin',
  data() {
    return {
    };
  },
  methods: {
    deleteChararcter(character) {
        CharactersService.deleteChararcter(character);
        const indexToDelete = this.newCharacters.findIndex(
            characterItem => character.id === characterItem.id
        );
        this.newCharacters.splice(indexToDelete, 1);
    }
  }
}
</script>