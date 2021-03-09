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
            <div class="col-sm container-all-locations" v-for="clan in allclans" :key="clan.id">
                <b-card :img-src="require('@/assets/images/backgrounds/'+ clan.illustration)" img-alt="Card image" img-top class="mb-2 card-contain-location" v-if="clan.id!==12">
                    <b-card title="Card title" sub-title="Card subtitle">
                        <b-card-text>
                        Some quick example text to build on the <em>card title</em> and make up the bulk of the card's
                        content.
                        </b-card-text>
                        <b-card-text>A second paragraph of text in the card.</b-card-text>                     
                    </b-card>
                </b-card>
            </div>
        </div>
    </div>
</template>
<script>
import AllClans from "../datas/clans.json"
export default {
    name: 'AllClans',
    data(){
        return{
            allclans: AllClans
        }
    }
}
</script>