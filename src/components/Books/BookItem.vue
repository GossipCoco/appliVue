<template>
    <div>
        <div class="container-card">
        <b-card            
            :img-src="require('@/assets/images/cover/'+book.image)"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 25rem; min-height: 55rem"
            class="mb-2"
        >
            <b-card-text class="container-title-book">
                <h2>{{book.name}}</h2>
            </b-card-text>
            <b-card-text>{{book.resume | substring}}...</b-card-text>
            <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
        </div>
    </div>
</template>
<script>
export default {
    name: 'BookItem',
    props: {
        book: {
            type: Object,
            default: null
        }
    },
    data() {
        return{

        }
    },
    filters: {
        substring: function (value) {
            return value.substring(0, 150)
        }
    }
}
</script>
<style scoped>
    .container-card{
        margin: 2rem;
    }
</style>