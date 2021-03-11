import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";
import TODOS from "./modules/todos";
import USERS from "./modules/users";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    TODOS,
    USERS,
  },

  // state: {
  //   todos: [
  //     { id: 1, text: "놀자 React ...", done: false },
  //     { id: 2, text: "놀자 JavaScript ...", done: false },
  //     { id: 3, text: "놀자 Vue ...", done: false },
  //   ],
  //   // users: []
  // },
  // mutations: {
  //   // GET_USERS(state, users) {
  //   //   console.log("store : mutations : GET_USERS() : ", users);
  //   //   state.users = users;
  //   // },
  //   ADD_TODO(state, text) {
  //     console.log("store : mutations : ADD_TODO() : ", text);
  //     state.todos.push({ id: Date.now(), text: text, done: false });
  //   },
  //   TOGGLE_TODO(state, id) {
  //     console.log("store : mutations : TOGGLE_TODO() : ", id);
  //     const todo = state.todos.find((todo) => todo.id === id);
  //     if (todo) todo.done = !todo.done;
  //   },
  //   DELETE_TODO(state, id) {
  //     console.log("store : mutations : DELETE_TODO() : ", id);
  //     state.todos = state.todos.filter((todo) => todo.id !== id);
  //   },
  // },

  // actions: {
  //   // 시간이 걸리는 작업 - DB 작업 ... 비동기
  //   // getUsers({ commit }) {
  //   //   console.log("store : actions : getUsers() : 비동기 작업 : ");
  //   //   axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
  //   //     console.log(res.data);
  //   //     commit("GET_USERS", res.data);
  //   //   });
  //   // },
  //   addTodo({ commit }, text) {
  //     // dispatch 는 언제?
  //     console.log("store : actions : addTodo() : 비동기 작업 : ", text);
  //     setTimeout(() => commit("ADD_TODO", text), 500);
  //   },
  //   toggleTodo({ commit }, id) {
  //     // dispatch 는 언제?
  //     console.log("store : actions : toggleTodo() : 비동기 작업 : ", id);
  //     setTimeout(() => commit("TOGGLE_TODO", id), 500);
  //   },
  //   deleteTodo({ commit }, id) {
  //     // dispatch 는 언제?
  //     console.log("store : actions : deleteTodo() : 비동기 작업 : ", id);
  //     setTimeout(() => commit("DELETE_TODO", id), 500);
  //   },
  // },

  // getters: {
  //   numberOfCompletedTodo: (state) => {
  //     return state.todos.filter((todo) => todo.done).length;
  //   },
  // },
});
