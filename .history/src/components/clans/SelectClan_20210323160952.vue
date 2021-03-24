<template>
    <div class="col-6">
        <label for="selectClan" class="col-sm-4 col-form-label">{{label}}</label>
        <b-form-select id="selectClan" v-model="clanSelected"  class="form-select form-select-lg mb-3" @change="selectClan(clanSelected)">
            <option v-for="(clan, id) in allclans" v-bind:value="clan.id" :key="id">
                {{ clan.id }} - {{ clan.name }}
            </option>
        </b-form-select>        
        <p>{{ clanSelected }}</p>    
    </div>                
</template>
<script>

import ClansJson from "../datas/json/clans.json"
import { ClansService } from "../../services/Clans.service"
export default {
    name: 'SelectClan',
    props:['label', 'typeClan'],
    data(){
        return{            
            allclans: ClansJson,
            clanSelected: '',
            infoClan:[],
            allClansByBDD: null
        }
    },
    async mounted(){
        this.allclans = await ClansService.getClans();
    },
    methods:{
        selectClan(clanSelected){    
                
            this.clanSelected = clanSelected;
            console.log(this.clanSelected);
            this.$emit("setClan", this.clanSelected);
        },
    }
}
</script>