<template>
  <div class="container">
    <!-- <Todo v-for="todo in todos" :key="todo.id" :todo="todo" @toggleTodo="toggleTodo" @deleteTodo="deleteTodo" /> -->
    <Todo v-for="todo in todos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script>
import Todo from "@/components/Todo";

export default {
  components: {
    Todo,
  },

  props: {
    // todos: {
    //   type: Array,
    //   required: true,
    // },
  },

  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },

  methods: {
    toggleTodo(id) {
      console.log("TodoList : toggleTodo() : ", id);
      this.$emit("toggleTodo", id);
    },

    deleteTodo(id) {
      console.log("TodoList : deleteTodo() : ", id);
      this.$emit("deleteTodo", id);
    },
  },
};
</script>

<style></style>
