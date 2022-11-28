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
      let todo = {
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
    setTasks() {
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
  },
});
app.mount("#app");
