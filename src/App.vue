<script setup>
import { useTodosStore } from './store/todos';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const todoStore = useTodosStore();
const { filter, filteredTodso } = storeToRefs(todoStore);

const newTodo = ref('');

const { addTodos, toggle, updateFilter } = todoStore;

const addNewTodo = (todo) => {
  addTodos(todo);
  newTodo.value = '';
};
</script>

<template>
  <div>
    <button @click="() => updateFilter('all')">All</button>
    <button @click="() => updateFilter('finish')">Finished</button>
    <button @click="() => updateFilter('unfinish')">Unfinished</button>
    <input type="text" v-model="newTodo" />
    <button @click="() => addNewTodo(newTodo)">Add Todo</button>
  </div>
  <div v-for="todo in filteredTodso" :key="todo.id">
    <h1 :style="todo.isCompleted && { textDecoration: 'line-through' }">
      {{ todo.text }}
    </h1>
    <h2>{{ todo.id }}</h2>
    <h3>{{ filter }}</h3>
    <button @click="() => toggle(todo.id)">Toggle</button>
  </div>
</template>

<style scoped></style>
