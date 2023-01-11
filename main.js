/* eslint-disable prefer-const */
// eslint-disable-next-line no-undef
import { createApp, ref, onMounted } from "vue";

const app = createApp({
  setup() {
    const newTask = ref("");
    const todos = ref([]);
    onMounted(() => {
      todos.value = JSON.parse(localStorage.getItem("todos") || "[]");
    });

    const addTask = () => {
      if (newTask.value === "") return;
      const todo = {
        task: newTask.value,
        isDone: false,
        isEditing: false,
      };
      todos.value.push(todo);
      newTask.value = "";
      localStorage.setItem("todos", JSON.stringify(todos.value));
    };

    const deleteTask = (index) => {
      todos.value.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(todos.value));
    };

    const updateTask = (index) => {
      todos.value[index].isEditing = true;
    };

    const updateDone = (index) => {
      todos.value[index].isEditing = false;
      localStorage.setItem("todos", JSON.stringify(todos.value));
    };

    return {
      newTask,
      todos,
      addTask,
      deleteTask,
      updateTask,
      updateDone,
    };
  },
});
app.mount("#app");
