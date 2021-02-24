<template>
    <div class="col-10 main-container-app">
        <p>{{title}}</p>
        <form class="row"
        @submit="checkForm"
        >            
            <div class="col-4">
                <label for="selectClan" class="col-sm-4 col-form-label">Groupe ou clan</label>
            </div>
            <div class="col-8">
                <select v-model="selectedClan"  class="form-select  form-select-lg " id="selectClan">
                    <option v-for="(clan, id) in options" v-bind:value="clan.name" :key="id">
                        {{ clan.name }}
                    </option>
                </select>
            </div>
            <div class="col-4">
                <label for="selectGenre" class="col-sm-4 col-form-label">Genre du personnage</label>
            </div>
            <div class="col-8">
                <select v-model="selectedGenre"  class="form-select  form-select-lg " id="selectGenre">
                    <option v-for="(genre, id) in genre" v-bind:value="genre.genre" :key="id">
                        {{ genre.genre }}
                    </option>
                </select>
            </div>         
            <div class="col-4">
                <label for="selectGrade" class="col-6 col-form-label">Grade du personnage</label>
            </div>
            <div class="col-8">
                <select v-model="selectedGrade"  class="form-select  form-select-lg " id="selectGrade">
                    <option v-for="(grade, id) in grades" v-bind:value="grade.grade" :key="id">
                        {{ grade.grade }}
                    </option>
                </select>
            </div>
            <div class="col-4">
                <label for="newName" class="col-6 col-form-label">Nom du personnage</label>
            </div>
            <div class="col-8">
                <input class="form-control form-control-md" type="text" v-model="newNameCharacter" id="newName">
            </div>  
            <div class="col-4">
                <label for="ageChar" class="col-6 col-form-label">Âge du personnage</label>
            </div>
            <div class="col-8">
                <input class="form-control form-control-md" type="text" v-model="ageCharacter" id="ageChar">
            </div>
            <div class="col-4">
                <label for="descChar" class="col-6 col-form-label">Description</label>
            </div>
            <div class="col-8">
                <textarea class="form-control form-control-md" type="text" v-model="descChara" id="ageChar" rows="3"></textarea>
            </div>
            <div class="col-4">
                <label for="biographieChar" class="col-6 col-form-label">Biographie</label>
            </div>
            <div class="col-8">
                <textarea class="form-control form-control-md" type="text" v-model="biographieChar" id="biographieChar" rows="3"></textarea>
            </div>          
            <div class="col-12">
                <button class="btn btn-primary">Créer son personnage</button>
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
            genre: genre,
            errors:[]
        }
    },
    methods:{
        setGrade(value){

        },
        checkForm: function (e) {
            console.log(e);
            this.errors = [];

        },
    }
}
</script>