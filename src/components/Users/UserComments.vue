<template>
    <div class="photos-contain">
        <p>ID utilisateur : {{userId}} correspond à l'id de l'album</p>
        <ul  class="list-group" v-for="(photo, id, index) in allPhotosById" :key="photo.id">
            <li class="list-group-item">    
                <div class="id-album-photo-contain">            
                    <p>ID PHOTO : {{photo.id}}</p>
                    <p>ID Album : {{photo.albumId}}</p>
                    <p>{{index}}</p>
                </div>
                <div class="thumbnai-contain">
                    <img :src="photo.thumbnailUrl" />
                </div>
            </li >
        </ul>
    </div>
</template>
<script>
export default {
    props:['photoUser', 'userId'],
    data (){
        return{
            allPhotos: this.photoUser,
            photoUserFilter:[],
            albumById: this.userId,
            thumbnailUrl: ''
        }
    },
    computed: {
        allPhotosById: function () {
            //Retourn allPhoto où albumId = userId
            
            const result = this.allPhotos.filter(photo => photo.albumId = this.userId);
            console.log(result)
            this.photoUserFilter = result
            return result
        }
    }
}
</script>
<style scoped>

.list-group-item{
    display: flex;
    flex-direction: row;
    }
    .id-album-photo-contain{
        display: flex;
        flex-direction: column;
        flex:2;
    }
    .thumbnai-contain{
        flex:1;
        align-items: center;
    }
    .thumbnai-contain img{
        width: 100px;
        height: 100px;
    }
</style>