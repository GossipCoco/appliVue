<template>
    <div>
        <b-button variant="link" v-if="!isLiked" @click="toggleLiked"><b-icon icon="heart" font-scale="2" variant="danger"></b-icon></b-button>
        <b-button variant="link" v-if="isLiked"  @click="toggleLiked"><b-icon icon="heart-fill" font-scale="2" variant="danger"></b-icon></b-button>

    </div>
</template>

<script>
    export default {
        name:'Like',
        props:{
            book : {
                type: Object,
                default: null,
            }
        },
        data(){
            return{
                isLiked: false
            }
        },
        mounted(){
            //this.isLiked = this.book.liked
        },
        methods:{
            toggleLiked(){
                this.isLiked = !this.isLiked;
                //this.movie.liked = this.isLiked;
                //this.$store.dispatch("updateBook", this.book)
            }
        }
    }
</script>