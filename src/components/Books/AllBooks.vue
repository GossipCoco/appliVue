<template>
    <div>
        <div class="row">
            <div class="col">
                <div class="presentation-contain">
                    <p>Les romans</p>                                
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col main-container-app accueil-app">
                <div class="container-allBooks">                    
                    <div v-for="book in books" :key="book.slug">
                        <book-item :book="book"></book-item>
                    </div>               
                </div>
            </div>
        </div>
    </div>    
</template>
<script>
import booksDB from '../../components/datas/books.db'
import BookItem from './BookItem.vue'

export default {
    name: 'AllBooks',
    components: {
        'book-item' : BookItem,
    },
    data(){
        return{
            books: booksDB
        }
    }
}
</script>
<style scoped>

</style>
