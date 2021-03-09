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
            <div class="col-sm" v-for="clan in allclans" :key="clan.id">
                <div class="card mb-6" style="max-width: 640px;">
                    <div class="row g-0">
                        <div class="col-md-2">
                             <img :src="require('@/assets/images/backgrounds/'+clan.illustration)"/>
                        </div>
                        <div class="col-md-10">
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                            </div>
                        </div>
                    </div>
                </div>
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