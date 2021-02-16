<template>
    <div class="col main-container-app">
        <div class="row">
            <div class="col">
                <p>Détail sur le personnage</p>
            </div>
        </div>
    </div>
</template>
<script>
import AllCharactersJson from "../datas/characters.json"
export default {
    name:'CharacterDetails',
    props:['charId', 'charInfo']
}
</script>