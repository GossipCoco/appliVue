<template>
    <div class="col-6">
        <b-label for="selectClan" class="col-sm-4 col-form-label">{{label}}</b-label>
        <b-form-select v-model="selectedClan"  class="form-select form-select-lg mb-3" id="selectClan" @change="selectClan(selectedClan)">
            <option v-for="(clan, id) in clans" v-bind:value="clan.id" :key="id">
                {{ clan.id }} - {{ clan.name }}
            </option>
        </b-form-select>                  
    </div>                
</template>
<script>
import ClansJson from '../datas/clans'
export default {
    name: 'SelectClan',
    props:['label', 'typeClan'],
    data(){
        return{            
            clans: ClansJson,
            clanSelected: '',
            infoClan:[]

        }
    },
    methods:{
        selectClan(value){
            console.log("id clan", value, "type clan", this.typeClan);            
            this.clanSelected = value;
            this.$emit("setClan", this.clanSelected)
        },
    }
}
</script>