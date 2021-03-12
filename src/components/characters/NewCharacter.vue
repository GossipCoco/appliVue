<template>
    <div>
        <p>Votre nouveau personnage</p>
        <ul>
            <li v-for="newChar of newCharacter" :key="newChar.id">
                {{ newChar.name }}
            </li>
        </ul>
    </div>
</template>
<script>

export default {
    name: 'NewCharacter',
    props:['newCharacter'],
    data(){
        return {
            allNewsCharacters: newCharacter
        }
    },
}
</script>