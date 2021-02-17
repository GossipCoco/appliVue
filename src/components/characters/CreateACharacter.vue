<template>
    <div>
        <p>
            Créer un nouveau personnage
        </p>
        <form>
            <select v-model="selected"  class="form-select  form-select-lg mb-3" >
                <option v-for="(clan, id) in options" v-bind:value="clan.name" :key="id">
                    {{ clan.name }}
                </option>
                </select>
            <span>Sélectionné : {{ selected }}</span>
        </form>
    </div>
</template>
<script>

import ClansJson from "../datas/clans.json"
import GradesJson from "../datas/grades.json"
export default {
    name: 'CreateACharacter',
    data(){
        return{
            selected: 'A',
            options: ClansJson
        }
    }
}
</script>