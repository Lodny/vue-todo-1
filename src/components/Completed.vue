<template>
  <div>Completed : {{ numberOfCompletedTodo }}</div>
</template>

<script>
export default {
  computed: {
    numberOfCompletedTodo() {
      return this.$store.getters.numberOfCompletedTodo;
      // return this.$store.getters["numberOfCompletedTodo"];
      // return this.$store.getters["todos/numberOfCompletedTodo"];
    }
  }
};
</script>
