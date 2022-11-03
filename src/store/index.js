import Vue from "vue";
import Vuex from "vuex";
import { v4 as uuidv4 } from "uuid";

Vue.use(Vuex);

const store = new Vuex.Store({
    tasks: [],
    state: {
        filters: ["All", "Active", "Completed"],
        filter: "All",
        tasks1: [{
                id: "1",
                name: "Task1",
                isChecked: true,
            },
            {
                id: "2",
                name: "Task2",
                isChecked: false,
            },
            {
                id: "3",
                name: "Task3",
                isChecked: false,
            },
        ],
    },
    mutations: {
        ADD_TASK: (state, text) => {
            const newTask = {
                id: uuidv4(),
                name: text,
                isChecked: false,
            };
            state.tasks1.push(newTask);
        },
        DELETE_TASK: (state, id) => {
            state.tasks1 = state.tasks1.filter((task) => task.id != id);
        },
        CHECKED_TASK: (state, id) => {
            state.tasks1.map((task) => {
                if (task.id === id) {
                    task.isChecked = !task.isChecked;
                }
            });
        },
    },
    actions: {},
    getters: {
        TASKS(state) {
            return state.tasks1;
        },
        filterTasks(state) {
            if (state.filter === "All") {
                return state.tasks1;
            }
            if (state.filter === "Active") {
                return state.tasks1.filter((task) => task.isChecked === false);
            }
            if (state.filter === "Completed") {
                return state.tasks1.filter((task) => task.isChecked === true);
            }
        },
    },
});

export default store;