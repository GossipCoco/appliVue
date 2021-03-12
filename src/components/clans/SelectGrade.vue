<template>
    <div class="col-6">
        <b-label for="selectGrade" class="col-sm-4 col-form-label">{{label}}</b-label>
        <b-form-select v-model="selectGrade"  class="form-select form-select-lg mb-3" id="selectGrade" @change="selectGrade(selectGrade)">
            <option v-for="(grade, id) in grades" v-bind:value="grade.id" :key="id">
                {{ grade.id }} - {{ grade.grade }}
            </option>
        </b-form-select>                  
    </div>                
</template>
<script>
export default {
    name: 'SelectGrade',
    props:['label','grades'],
    data(){
        return{
           grades: grades,
           selectGrade: 'Selectionnez le grade'
        }
    },
    methods:{
        selectGrade(value){
            this.selectGrade = value;
        }
    }
}
</script>