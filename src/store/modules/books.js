import booksDb from "../../components/datas/books.db"

export default {
    states: {
        books: []
    },
    mutation: {
        //Les mutations peuvent modifier les states
        updateTableau(state, valeur){
            state.books =  valeur;
        }
    },
    actions: {
        // les actions sont dispo dans notre code pour utiliser les mutations
        updateTableau({commit}, valeurTableau){
            //opérations divers: ex récupérer de données axios
            //utilisations de services
            commit('updateTableau', valeurTableau);
        }
    },
    getters:{
        getTableauLenght: state => {
            return state.books.length;
        }
    }
}