<template>
    <div class="col-6">
        <label for="selectClan" class="col-sm-4 col-form-label">{{label}}</label>
        <select v-model="selectedClan"  class="form-select form-select-lg mb-3" id="selectClan" @change="selectClan(selectedClan)">
            <option v-for="(clan, id) in clans" v-bind:value="clan.id" :key="id">
                {{ clan.id }} - {{ clan.name }}
            </option>
        </select>                  
    </div>                
</template>
<script>
import ClansJson from '../datas/clans'
export default {
    name: 'SelectClan',
    props:['label'],
    data(){
        return{            
            clans: ClansJson,
            clanSelected: ''
        }
    },
    methods:{
        selectClan(value){
            console.log("id clan", value);
            this.clanSelected = value;
            this.$emit("setClan", this.clanSelected)
        },
        selectAncienClan(value){
            this.$emit("selectAncienClan", this.clanSelected)
        }
    }
}
</script>