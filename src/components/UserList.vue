<template>
  <div>
    -- User List --
    <div v-for="user in users" :key="user.id">{{ user.name }}</div>
  </div>
</template>

<script>
// import axios from "axios";
// import { mapState, mapActions } from "vuex";
// import { mapActions } from "vuex";

export default {
  // data() {
  //   return {
  //     users: []
  //   };
  // },
  created() {
    this.getUsers();
  },
  computed: {
    // ...mapState(["users"])
    // ...mapState({ users: (state) => state.users.users })
    users() {
      return this.$store.state.users;
    }
  },
  methods: {
    // ...mapActions("users", ["getUsers"])
    getUsers() {
      // axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      //   console.log(res);
      //   this.users = res.data;
      // });
      this.$store.dispatch("getUsers");
    }
  }
};
</script>

<style></style>
