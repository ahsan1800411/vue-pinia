import { defineStore } from 'pinia';

export const useTodosStore = defineStore('todos', {
  state: () => {
    return {
      todos: [{ id: 1, text: 'Learn Vue', isCompleted: false }],
      filter: 'all',
    };
  },
  actions: {
    addTodos(text) {
      if (!text) return;
      this.todos.push({ id: this.todos.length + 1, text, isCompleted: false });
    },
    toggle(id) {
      const idx = this.todos.findIndex((todo) => todo.id === id);
      this.todos[idx].isCompleted = !this.todos[idx].isCompleted;
    },
    updateFilter(value) {
      this.filter = value;
    },
  },

  getters: {
    filteredTodso() {
      if (this.filter === 'unfinish') {
        return this.todos.filter((todo) => !todo.isCompleted);
      } else if (this.filter === 'finish') {
        return this.todos.filter((todo) => todo.isCompleted);
      }
      return this.todos;
    },
  },
});
