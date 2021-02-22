<template>
    <div class="col-10 main-container-app">
        <p>{{title}}</p>
        <form class="row">            
            <div class="col-6">
                <label for="selectClan" class="col-sm-4 col-form-label">Choisir le groupe de votre personnage</label>
            </div>
            <div class="col-6">
                <select v-model="selectedClan"  class="form-select  form-select-lg " id="selectClan">
                    <option v-for="(clan, id) in options" v-bind:value="clan.name" :key="id">
                        {{ clan.name }}
                    </option>
                </select>
            </div>        
            <div class="col-6">
                <label for="selectGrade" class="col-6 col-form-label">Choisir le grade de votre personnage</label>
            </div>
            <div class="col-6">
                <select v-model="selectedGrade"  class="form-select  form-select-lg " id="selectGrade">
                    <option v-for="(grade, id) in grades" v-bind:value="grade.grade" :key="id">
                        {{ grade.grade }}
                    </option>
                </select>
            </div>        
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
            title: 'Créer un nouveau personnage',
            selectedClan: '',
            selectedGrade: '',
            options: ClansJson,
            grades: GradesJson
        }
    },
    methods:{
        setGrade(value){

        }
    }
}
</script>