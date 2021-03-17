<template>
    <div class="photos-contain">
        <p>{{title}}: {{userUsrName}}</p>
        <div class="list-character-container">
            <ul class="list-group" v-for="photo in photoUser" :key="photo.id">
                <li class="list-group-item" v-if="photo.albumId === userId">    
                    <div class="id-album-photo-contain">     
                        <p>{{photo.title}}</p>       
                        <p>ID PHOTO : {{photo.id}}</p>
                        <p>ID Album : {{photo.albumId}}</p>
                    </div>
                    <div class="thumbnai-contain">
                        <img :src="photo.thumbnailUrl" />
                    </div>
                </li >
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props:['photoUser', 'userId', 'userUsrName'],
    data (){
        return{
            title: 'Personnages créés par ',
            allPhotos: this.photoUser,
            photoUserFilter:[],
            albumById: this.userId,
            thumbnailUrl: ''
        }
    },
    computed: {
        allPhotosById: function () {
            const result = this.allPhotos.filter();
            this.allPhotos = result
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