<template>
    <div>
        <div class="row">
            <div class="col">
                <div class="row presentation-contain">
                    <div class="col">
                        <h2>Tous les clans</h2>
                    </div>
                </div>
            </div>            
        </div>
        <div class="row">
            <div class="col-sm-3 container-all-locations" v-for="clan in allclans" :key="clan.id">
                <b-card :img-src="require('@/assets/images/backgrounds/'+ clan.illustration)" img-alt="Card image" img-top class="mb-2 card-contain-location" v-if="clan.id!==12">
                    <b-card :title="clan.name">
                        <b-card-text>
                        {{clan.description.substring(0, 120)}}... (suite)
                        </b-card-text>
                    </b-card>
                </b-card>
            </div>
        </div>
    </div>
</template>
<script>
import { ClansService } from "../../services/Clans.service"
export default {
    name: 'AllClans',
    data(){
        return{
            allclans: [],
            clanDescription: null
        }
    },
    async mounted(){
        this.allclans = await ClansService.getClans();
    }
}
</script>