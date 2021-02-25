<template>
            <div class="row">           
                <div class="col-4">
                    <label for="selectClan" class="col-sm-4 col-form-label">{{label}}</label>
                </div>
                <div class="col-8">
                    <select v-model="selectedClan"  class="form-select form-select-lg mb-3" id="selectClan" @change="selectClan(selectedClan)">
                        <option v-for="(clan, id) in clans" v-bind:value="clan.id" :key="id">
                            {{ clan.id }} - {{ clan.name }}
                        </option>
                    </select>                  
                </div>                
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
        },
        selectAncienClan(value){
            this.$emit("selectAncienClan", this.clanSelected)
        }
    }
}
</script>