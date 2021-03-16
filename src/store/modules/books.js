import booksDb from "../../components/datas/books.db"
export default {
    states: {
        books: [],
    },
    mutations: {
        setBooks(state, books){
            state.books = books;            
        },
        updateBook(state, book){
            state.books = state.books.map(bookElement => {
                if(bookElement.slug === book.slug){
                    bookElement = book;
                }
                return bookElement;
            })
        }
    },
    actions: {
        fetchBooks({ commit }) {
            const books = booksDb;
            console.log("action : ", books)
            commit("setBooks", books);
          },
        updateBook({commit}, book){
            commit("updateBook", book)
        }
    },
    getters: {
        getBook: state => slug =>{
            const book = state.movie.filter(movieElement => movieElement.slug === slug)
            console.log("getters : ", book);
            return book;
        }
    }
}