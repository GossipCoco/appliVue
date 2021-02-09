<template>
    <div>
        <ul  class="list-group">
            <li v-for="char in charList" :key="char.id"  class="list-group-item">
                {{char.name}} <br>
                <img class="image-character" :src="char.image" />
            </li >
        </ul>
    </div>
</template>
<script>
export default {
    name: 'AllCharacters',
    props:['charList'],
    data () {
        return{
            imageChar: this.charList.image
        }
    }
}
</script>