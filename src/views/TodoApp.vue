<template>
  <div class="conatiner">
    <h1>Todo List</h1>
    <Completed />
    <!-- <NewTodo @addTodo="addTodo"></NewTodo> -->
    <NewTodo />
    <hr />
    <!-- <TodoList :todos="todos" @toggleTodo="toggleTodo" @deleteTodo="deleteTodo"></TodoList> -->
    <TodoList />
    <UserList />
  </div>
</template>

<script>
import Completed from "@/components/Completed";
import NewTodo from "@/components/NewTodo";
import TodoList from "@/components/TodoList";
import UserList from "@/components/UserList";

export default {
  components: {
    Completed,
    NewTodo,
    TodoList,
    UserList
  }

  // data() {
  //   return {
  //     todos: [
  //       { id: 1, text: "놀자 React ...", done: false },
  //       { id: 2, text: "놀자 JavaScript ...", done: false },
  //       { id: 3, text: "놀자 Vue ...", done: false },
  //     ],
  //   };
  // },

  // methods: {
  //   addTodo(text) {
  //     console.log("TodoApp : addTodo() : ", text);
  //     this.todos.push({ id: Date.now(), text: text, done: false });
  //   },

  //   toggleTodo(id) {
  //     console.log("TodoApp : toggleTodo() : ", id);
  //     const todo = this.todos.find((todo) => todo.id === id);
  //     if (todo) todo.done = !todo.done;
  //   },

  //   deleteTodo(id) {
  //     console.log("TodoApp : deleteTodo() : ", id);
  //     this.todos = this.todos.filter((todo) => todo.id !== id);
  //   }
  // }
};
</script>
