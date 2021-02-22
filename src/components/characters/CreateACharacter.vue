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
                <label for="selectGenre" class="col-sm-4 col-form-label">Choisir le genre de votre personnage</label>
            </div>
            <div class="col-6">
                <select v-model="selectedGenre"  class="form-select  form-select-lg " id="selectGenre">
                    <option v-for="(genre, id) in genre" v-bind:value="genre.genre" :key="id">
                        {{ genre.genre }}
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
            <div class="col-6">
                <label for="newName" class="col-6 col-form-label">Choisir le nom de votre personnage</label>
            </div>
            <div class="col-6">
                <input class="form-control form-control-md" type="text" v-model="newNameCharacter" id="newName">
            </div>  
            <div class="col-6">
                <label for="ageChar" class="col-6 col-form-label">Choisir l'âge de votre personnage</label>
            </div>
            <div class="col-6">
                <input class="form-control form-control-md" type="text" v-model="ageCharacter" id="ageChar">
            </div>
            <div class="col-6">
                <label for="descChar" class="col-6 col-form-label">Description de votre personnage</label>
            </div>
            <div class="col-6">
                <textarea class="form-control form-control-md" type="text" v-model="descChara" id="ageChar" rows="3"></textarea>
            </div>
            <div class="col-6">
                <label for="biographieChar" class="col-6 col-form-label">Biographie de votre personnage</label>
            </div>
            <div class="col-6">
                <textarea class="form-control form-control-md" type="text" v-model="biographieChar" id="biographieChar" rows="3"></textarea>
            </div>          
        </form>
    </div>
</template>
<script>

import ClansJson from "../datas/clans.json"
import GradesJson from "../datas/grades.json"
import genre from "../datas/genres.json"
export default {
    name: 'CreateACharacter',
    data(){
        return{
            title: 'Créer un nouveau personnage',
            selectedClan: '',
            selectedGrade: '',
            selectedGenre: '',
            newNameCharacter: '',
            ageCharacter: '',
            descChara: '',
            biographieChar: '',
            options: ClansJson,
            grades: GradesJson,
            genre: genre
        }
    },
    methods:{
        setGrade(value){

        }
    }
}
</script>