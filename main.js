/* eslint-disable prefer-const */
// eslint-disable-next-line no-undef
const app = Vue.createApp({
  data: () => ({
    newTask: "",
    todos: [],
  }),
  methods: {
    addTask: function (event) {
      // console.log('Clicked!')
      if (this.newTask === "") return;
      let todo = {
        task: this.newTask,
      };
      this.todos.push(todo);
      this.newTask = "";
    },
  },
});
app.mount("#app");
