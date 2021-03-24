<template>
    <div class="col-6">
        <label for="selectClan" class="col-sm-4 col-form-label">{{label}}</label>
        <b-form-select v-model="clanSelected" :options="allclans" @change="selectClan(clanSelected)"></b-form-select>                       
    </div>                
</template>
<script>

import ClansJson from "../datas/json/clans.json"
import allClan from "../datas/allClansForSelect.js"
import { ClansService } from "../../services/Clans.service"
export default {
    name: 'SelectClan',
    props:['label', 'typeClan'],
    data(){
        return{            
            allclans: allClan,
            clanSelected: null,
            infoClan:[],
            allClansByBDD: null,
            selected: null,
        }
    },
    async mounted(){
        this.allClansByBDD = await ClansService.getClans();
    },
    methods:{
        selectClan(clanSelected){        
            console.log(clanSelected);
            this.clanSelected = clanSelected;
            this.$emit("setClan", this.clanSelected)
        },
    }
}
</script>