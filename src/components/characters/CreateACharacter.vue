<template>
    <div class="col-10 main-container-app">
        <p>{{title}}</p>
        <form>
            <div class="mb-1 row">
                <label for="selectClan" class="col-sm-4 col-form-label">Choisir le groupe de votre personnage</label>
                <div class="col-10">
                    <select v-model="selected"  class="form-select  form-select-lg mb-1" id="selectClan">
                        <option v-for="(clan, id) in options" v-bind:value="clan.name" :key="id">
                            {{ clan.name }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="mb-1 row">
                <label for="selectGrade" class="col-sm-4 col-form-label">Choisir le grade de votre personnage</label>
                <div class="col-10">
                    <select v-model="selected"  class="form-select  form-select-lg mb-1" id="selectGrade">
                        <option v-for="(grade, id) in grades" v-bind:value="grade.grade" :key="id">
                            {{ grade.grade }}
                        </option>
                    </select>
                </div>
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
            selected: '',
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