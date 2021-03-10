<template>
  <div class="mb-2 d-flex">
    <span class="ml-3 flex-grow-1" :class="todo.done ? 'text-muted done' : ''" @click="toggleTodo(todo.id)">{{
      todo.text
    }}</span>
    <button class="btn btn-danger btn-sm" @click="deleteTodo(todo.id)">X</button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },

  methods: {
    toggleTodo(id) {
      console.log("Todo : toggleTodo() : ", id);
      // this.$emit("toggleTodo", id);
      this.$store.commit("TOGGLE_TODO", id);
    },

    deleteTodo(id) {
      console.log("Todo : deleteTodo() : ", id);
      // this.$emit("deleteTodo", id);
      this.$store.commit("DELETE_TODO", id);
    },
  },
};
</script>

<style>
span {
  text-align: left;
}

.done {
  text-decoration: line-through;
}
</style>
