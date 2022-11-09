import Vue from "vue";
import Vuex from "vuex";
import { v4 as uuidv4 } from "uuid";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    filter: "All",
    tasks: [
      {
        id: uuidv4(),
        name: "Task1",
        isChecked: true,
      },
      {
        id: uuidv4(),
        name: "Task2",
        isChecked: false,
      },
      {
        id: uuidv4(),
        name: "Task3",
        isChecked: false,
      },
    ],
  },
  mutations: {
    addTask: (state, text) => {
      const newTask = {
        id: uuidv4(),
        name: text,
        isChecked: false,
      };
      state.tasks.push(newTask);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    deleteTask: (state, id) => {
      state.tasks = state.tasks.filter((task) => task.id != id);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    checkedTask: (state, id) => {
      state.tasks.map((task) => {
        if (task.id === id) {
          task.isChecked = !task.isChecked;
        }
      });
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    setActiveTab: (state, title) => {
      state.filter = title;
    },
  },
  actions: {},
  getters: {
    TASKS(state) {
      return state.tasks;
    },
    filterTab(state) {
      state.tasks = JSON.parse(localStorage.getItem("tasks"));
      if (state.filter === "All") {
        return state.tasks;
      }
      if (state.filter === "Active") {
        return state.tasks.filter((task) => task.isChecked === false);
      }
      if (state.filter === "Completed") {
        return state.tasks.filter((task) => task.isChecked === true);
      }
    },
    doNotDo(state) {
      return state.tasks.filter((task) => task.isChecked == !true).length;
    },
    doDo(state) {
      return state.tasks.length;
    },
  },
});

export default store;
