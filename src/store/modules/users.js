import axios from "axios";

export default {
  state: {
    users: []
  },
  mutations: {
    GET_USERS(state, users) {
      console.log("store : mutations : GET_USERS() : ", users);
      state.users = users;
    }
  },
  actions: {
    getUsers({ commit }) {
      console.log("store : actions : getUsers() : 비동기 작업 : ");
      axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
        console.log(res.data);
        commit("GET_USERS", res.data);
      });
    }
  }
};
