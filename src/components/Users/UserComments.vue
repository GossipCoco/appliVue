<template>
    <div>
        Les commentaires
        <ul  class="list-group">
            <li v-for="photo in photoUser" :key="photo.id"  class="list-group-item">
                <p>Titre {{photo.title}}</p>
                <p>{{photo.id}}</p>
                <img :src="photo.thumbnailUrl" />
            </li >
        </ul>
    </div>
</template>
<script>
export default {
    props:['photoUser']    
}
</script>