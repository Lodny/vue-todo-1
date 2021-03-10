<template>
  <form class="container d-flex" @submit.prevent="addTodo">
    <!-- <input type="text" class="w-100" @keyup.enter="handleClick" placeholder="할 일을 입력하세요." />
    <button @click.prevent="handleClick">추가</button> -->
    <input name="todo" type="text" class="flex-grow-1 p-1" placeholder="할 일을 입력하세요." />
    <button>추가</button>
  </form>
</template>

<script>
export default {
  props: {},

  data() {
    return {
      inputText: "",
    };
  },

  methods: {
    addTodo(e) {
      console.log("NewTodo : addTodo() : ", e.target.todo.value);
      // this.$emit("addTodo", e.target.todo.value);
      this.$store.commit("ADD_TODO", e.target.todo.value);
      e.target.todo.value = "";
    },
  },
};
</script>

<style></style>
