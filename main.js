/* eslint-disable prefer-const */
// eslint-disable-next-line no-undef
const app = Vue.createApp({
  data() {
    return {
      newTask: "",
      todos: [],
    };
  },
  mounted() {
    this.todos = JSON.parse(localStorage.getItem("todos") || "[]");
  },
  methods: {
    addTask() {
      if (this.newTask === "") return;
      const todo = {
        task: this.newTask,
        isDone: false,
        isEditing: false,
      };
      this.todos.push(todo);
      this.newTask = "";
    },
    deleteTask(index) {
      this.todos.splice(index, 1);
    },
    updateTask(index) {
      this.todos[index].isEditing = true;
    },
    updateDone(index) {
      this.todos[index].isEditing = false;
    },
  },
  // あとで新しくこの部分を変更したPull Request上げる
  watch: {
    todos: {
      handler(val, oldval) {
        localStorage.setItem("todos", JSON.stringify(this.todos));
      },
      deep: true,
    },
  },
});
app.mount("#app");
