<template>
  <div>Completed : {{ numberOfCompletedTodo }}</div>
</template>

<script>
export default {
  computed: {
    numberOfCompletedTodo() {
      return this.$store.getters["TODOS/numberOfCompletedTodo"];
      // return this.$store.getters.numberOfCompletedTodo;
    },
  },
};
</script>
