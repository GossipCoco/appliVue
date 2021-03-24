<template>
    <div>
        <b-card                                                
            :title="char.name"
            :img-src="require('@/assets/images/personnage/'+characterCard.image)"
            :img-alt="characterCard.name"
            img-top
            tag="article"
            style="width: 20rem; height: 30rem"
            class="mb-4 card-contain-character"
        >
            <b-card-text>
            {{characterCard.name}}
            </b-card-text>
            <router-link v-bind:to="'/characters/characterDetails/'+characterCard.id" v-bind:charId="characterCard.id" class="btn btn-primary">En savoir plus</router-link>
            <transition>
                <router-view v-bind:charId="char.id"/>
            </transition>
            <b-button :to="'/characters/characterDetailsBySlug/'+characterCard.slug" variant="primary" :character="characterCard">Plus d'infos</b-button>
        </b-card>   
    </div>
</template>

<script>
export default {
    name: 'CharacterCard',
    props: ['characterCard'],
    data () {
        return {

        }
    }
}
</script>