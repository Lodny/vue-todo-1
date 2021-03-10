<template>
  <div class="conatiner">
    <h1>Todo List</h1>
    <NewTodo @addTodo="addTodo"></NewTodo>
    <hr />
    <TodoList :todos="todos" @toggleTodo="toggleTodo" @deleteTodo="deleteTodo"></TodoList>
  </div>
</template>

<script>
import NewTodo from "@/components/NewTodo";
import TodoList from "@/components/TodoList";

export default {
  components: {
    NewTodo,
    TodoList,
  },

  data() {
    return {
      todos: [
        { id: 1, text: "놀자 React ...", done: false },
        { id: 2, text: "놀자 JavaScript ...", done: false },
        { id: 3, text: "놀자 Vue ...", done: false },
      ],
    };
  },

  methods: {
    addTodo(text) {
      console.log("TodoApp : addTodo() : ", text);
      this.todos.push({ id: Date.now(), text: text, done: false });
    },

    toggleTodo(id) {
      console.log("TodoApp : toggleTodo() : ", id);
      const todo = this.todos.find((todo) => todo.id === id);
      if (todo) todo.done = !todo.done;
    },

    deleteTodo(id) {
      console.log("TodoApp : deleteTodo() : ", id);
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
};
</script>
