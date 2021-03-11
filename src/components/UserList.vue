<template>
  <div>
    -- User List --
    <div v-for="user in users" :key="user.id">{{ user.name }}</div>
  </div>
</template>

<script>
// import axios from "axios";
import { mapState } from "vuex";
import { mapActions } from "vuex";

export default {
  // data() {
  //   return {
  //     users: []
  //   };
  // },
  created() {
    console.log("UserList : created() ");
    this.getUsers();
  },
  computed: {
    // ...mapState(["users"]),
    ...mapState("USERS", ["users"]),
    // users() {
    //   return this.$store.state.USERS.users;
    // },
  },
  methods: {
    ...mapActions("USERS", ["getUsers"]),
    // getUsers() {
    //   console.log("UserList : methods : getUsers() : ");
    //   // axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    //   //   console.log(res);
    //   //   this.users = res.data;
    //   // });
    //   this.$store.dispatch("USERS/getUsers");
    //   // this.$store.dispatch("getUsers");
    //   // this.$emit("getUsers");
    // },
  },
};
</script>

<style></style>
