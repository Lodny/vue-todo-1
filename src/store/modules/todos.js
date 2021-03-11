export default {
  namespaced: true,
  state: {
    todos: [
      { id: 1, text: "놀자 React ...", done: false },
      { id: 2, text: "놀자 JavaScript ...", done: false },
      { id: 3, text: "놀자 Vue ...", done: false },
    ],
  },
  mutations: {
    ADD_TODO(state, text) {
      console.log("todos.js : mutations : ADD_TODO() : ", text);
      state.todos.push({ id: Date.now(), text: text, done: false });
    },
    TOGGLE_TODO(state, id) {
      console.log("todos.js : mutations : TOGGLE_TODO() : ", id);
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) todo.done = !todo.done;
    },
    DELETE_TODO(state, id) {
      console.log("todos.js : mutations : DELETE_TODO() : ", id);
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
  },
  actions: {
    addTodo({ commit }, text) {
      // dispatch 는 언제?
      console.log("todos.js : actions : addTodo() : 비동기 작업 : ", text);
      setTimeout(() => commit("ADD_TODO", text), 500);
    },
    toggleTodo({ commit }, id) {
      // dispatch 는 언제?
      console.log("todos.js : actions : toggleTodo() : 비동기 작업 : ", id);
      setTimeout(() => commit("TOGGLE_TODO", id), 500);
    },
    deleteTodo({ commit }, id) {
      // dispatch 는 언제?
      console.log("todos.js : actions : deleteTodo() : 비동기 작업 : ", id);
      setTimeout(() => commit("DELETE_TODO", id), 500);
    },
  },
  getters: {
    numberOfCompletedTodo: (state) => {
      return state.todos.filter((todo) => todo.done).length;
    },
  },
};
