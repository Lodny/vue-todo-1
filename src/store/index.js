import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: "놀자 React ...", done: false },
      { id: 2, text: "놀자 JavaScript ...", done: false },
      { id: 3, text: "놀자 Vue ...", done: false },
    ],
  },
  mutations: {
    ADD_TODO(state, text) {
      console.log("store : ADD_TODO() : ", text);
      state.todos.push({ id: Date.now(), text: text, done: false });
    },
    TOGGLE_TODO(state, id) {
      console.log("store : TOGGLE_TODO() : ", id);
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) todo.done = !todo.done;
    },
    DELETE_TODO(state, id) {
      console.log("store : DELETE_TODO() : ", id);
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
  },
  actions: {},
  getters: {},
});
