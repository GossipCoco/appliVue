<template>
    <div>
        <b-card                                                
            :title="char.name"
            :img-src="require('@/assets/images/personnage/'+char.image)"
            :img-alt="char.name"
            img-top
            tag="article"
            style="width: 20rem; height: 30rem"
            class="mb-4 card-contain-character"
        >
            <b-card-text>
            {{char.name}}
            </b-card-text>
            <router-link v-bind:to="'/characters/characterDetails/'+char.id" v-bind:charId="char.id" class="btn btn-primary">En savoir plus</router-link>
            <transition>
                <router-view v-bind:charId="char.id"/>
            </transition>
            <b-button :to="'/characters/characterDetailsBySlug/'+char.slug" variant="primary" :character="char">Plus d'infos</b-button>
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