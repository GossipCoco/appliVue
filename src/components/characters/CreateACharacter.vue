<template>
    <div class="col-12 main-container-app form-create-character presentation-contain ">
        <p>{{title}}</p>
        <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
        </p>
        <form class="container-form-create-character"
            @submit="checkForm"
            action="/characters/allcharacters"
            method="POST"
        >
            <select-clan label="Clan ou Groupe" @setClan="setClan" v-bind:typeClan="currentClan" v-bind:clans="clans"/>
            <div v-if=" selectedClan === 0 || selectedClan === 1|| selectedClan === 2 || selectedClan === 3 || selectedClan === 4">
                <div class="col-6">
                    <label for="selectGrade" class="form-label">Grade du personnage</label>                            
                    <b-form-select v-model="selectedGrade"  class="form-select  form-select-lg " id="selectGrade">
                        <option v-for="(grade, id) in grades" v-bind:value="grade.grade" :key="id">
                            {{ grade.grade }}
                        </option>
                    </b-form-select>
                </div>
            </div>
            <div v-else-if=" selectedClan === 5 || selectedClan === 7">
                <select-clan label="Ancien Clan" @setClan="setClan" v-bind:typeClan="ancienClan"/>
            </div>
            <div v-else></div>
            <div class="col">
                <label for="selectGenre" class="form-label">Genre du personnage</label>
            </div>
            <div class="col-8">
                <b-form-select v-model="selectedGenre"  class="form-select form-select-lg mb-3" id="selectGenre" style="width:20rem">
                    <option v-for="(genre, id) in genre" v-bind:value="genre.genre" :key="id">
                        {{ genre.genre }}
                    </option>
                </b-form-select>
            </div>          
            <div class="col">
                <label for="newName" class="col-6 col-form-label">Nom du personnage</label>
            </div>
            <div class="col">
                <input class="form-control form-control-md" type="text" v-model="newNameCharacter" id="newName">
            </div>
            <div class="col">
                <label for="ageChar" class="col-6 col-form-label">Âge du personnage</label>
            </div>
            <div class="col">
                <input class="form-control form-control-md" type="text" v-model="ageCharacter" id="ageChar">
            </div>
            <div class="col">
                <label for="descChar" class="col-6 col-form-label">Description</label>
            </div>
            <div class="col">
                <textarea class="form-control form-control-md" type="text" v-model="descChara" id="ageChar" rows="3"></textarea>
            </div>
            <div class="col">
                <label for="biographieChar" class="col-6 col-form-label">Biographie</label>
            </div>
            <div class="col">
                <b-form-textarea class="form-control form-control-md" type="text" v-model="biographieChar" id="biographieChar" rows="3"></b-form-textarea>
            </div>          
            <div class="col contain-btn">
                <button class="btn btn-primary">Créer son personnage</button>
            </div>            
        </form>
    </div>
</template>
<script>

import ClansJson from "../datas/clans.json"
import GradesJson from "../datas/grades.json"
import genre from "../datas/genres.json"
import prefixs from "../datas/prefixs.json"
import SelectClan from "../clans/SelectClan.vue"
export default {
    name: 'CreateACharacter',
    components:{
        'select-clan': SelectClan
    },
    data(){
        return{
            title: 'Créer un nouveau personnage',
            selectedClan: '',
            selectedGrade: '',
            selectedAncienClan: '',
            selectedGenre: '',
            newNameCharacter: '',
            ageCharacter: '',
            descChara: '',
            biographieChar: '',
            clans: ClansJson,
            grades: GradesJson,
            genre: genre,
            errors:[],
            newCharacter:[],
            currentClan: 'current',
            ancienClan: 'ancien',
            allAnciensClans: [],
            
        }
    },
    methods:{
        selectClan(value){
        },
        setClan(value){
            //console.log("id clan", value)
            this.selectedClan = value
            if(this.selectedClan === 5){
                this.allAnciensClans = this.allAnciensClans.push(this.ClansJson);
                console.log("new arrau",this.allAnciensClans);
                return "Quelle est l'ancien clan?"
            }else{

            }          
        },
        setGrade(value){

        },
        checkForm: function (e) {
            this.errors = [];
            this.newCharacter = [];
            const newCharacterArray = [];
            console.log(this.selectedClan);
            if (!this.selectedClan) {
                this.errors.push("Clan required.");
            }else{
                //this.setClan(this.selectedClan);
                //console.log(this.ClansJson.filter(this.selectedClan));
                this.newCharacter.push(this.selectedClan);               
            }
            if (!this.selectedGrade) {
                this.errors.push('Grade required.');
            }else{
                this.newCharacter.push(this.selectedGrade)
            }
            if(!this.newNameCharacter){
                this.errors.push("Name required");
            }
            if (!this.errors.length) {
                return true;
            }
            console.log(this.newCharacter);
            e.preventDefault();
        },
    }
}
</script>