<template>
  <div>
      <div>
        <div class="row">
            <div class="col">
                <div class="presentation-contain book-presentation">
                    <b-card :img-src="require('@/assets/images/cover/'+book.image)" :img-alt="book.name" img-left class="mb-3 img-fluid">
                        <b-card-title>
                        <h2>{{book.name}}</h2>
                        </b-card-title>
                        <b-card-text>
                            <p>Année de sortie : {{book.year}}</p>
                            <p>Résumé <br> {{book.resume}}</p>
                            <p><like-contain :book="book"></like-contain></p>
                            <p><b-button to="/book/allbooks">Retour à la liste des livres</b-button></p>                            
                        </b-card-text>
                    </b-card>                            
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>

import booksDB from '../../components/datas/books.db'
import Like from './Like'
export default {
    name: 'BookDetails',
    components:{
        'like-contain': Like
    },
    data() {
        return {
            book: null
        }
    },
    mounted(){
        const slug = this.$route.params.slug;        
        console.log(booksDB);
        this.book = booksDB.find((book)=>book.slug === slug);
        
    }
}
</script>

<style>

</style>