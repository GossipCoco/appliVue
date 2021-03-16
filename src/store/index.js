import Vue from "vue";
import Vuex from "vuex";
import books from "@/store/modules/books.js"

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        books: [],
    },    
  });
  