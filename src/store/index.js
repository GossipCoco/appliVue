import Vue from "vue";
import Vuex from "vuex";
import books from "@/store/modules/books"

Vue.use(Vuex);
export const store = new Vuex.Store({
    modules: {
        books,
    },
  });
  