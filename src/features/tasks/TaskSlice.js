import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
    hideDone: false,
};

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, { payload: task }) => {
            state.tasks.push(task);
        },
        toggleTaskDone: (state, { payload: taskId }) => {
            const task = state.tasks.find((task) => task.id === taskId);
            if (task) {
                task.done = !task.done;
            }
        },
        removeTask: (state, { payload: taskId }) => {
            state.tasks = state.tasks.filter((task) => task.id !== taskId);
        },
        setAllDone: (state) => {
            state.tasks.forEach((task) => {
                task.done = true;
            });
        },
        toggleHideDone: (state) => {
            state.hideDone = !state.hideDone;
        },
    },
});

export const {
    addTask,
    toggleTaskDone,
    removeTask,
    setAllDone,
    toggleHideDone,
} = taskSlice.actions;

export const selectTasks = (state) => state.tasks;
export const selectTasksList = (state) => state.tasks.tasks;
export const selectHideDone = (state) => state.tasks.hideDone;
export const selectTasksEmpty = (state) => state.tasks.tasks.length === 0;
export const selectIsEveryTaskDone = (state) =>
    state.tasks.tasks.length > 0 &&
    state.tasks.tasks.every((task) => task.done);

export default taskSlice.reducer;
