<template>
  <div class="col">
    <all-characters v-bind:charList="listCharacters"/>
  </div>    
</template>

<script>
import charactersJson from './datas/characters.json'
import AllCharacters from './characters/AllCharacters.vue'

export default {
  name: 'CharactersContain',
  components: {
    'all-characters': AllCharacters
  },
  data () {
    return {
      listCharacters: charactersJson,
    }
  },
  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
    },

  }
}
</script>
