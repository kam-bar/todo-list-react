import { createSlice } from "@reduxjs/toolkit";

const getInitialTasks = () => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
        try {
            return JSON.parse(savedTasks);
        } catch (error) {
            console.error("Błąd parsowania tasks z localStorage:", error);
            return [];
        }
    }

    return [];
};

const initialState = {
    tasks: getInitialTasks(),
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

export const selectTasksState = (state) => state.tasks;
export const selectTasksList = (state) => selectTasksState(state).tasks;
export const selectHideDone = (state) => selectTasksState(state).hideDone;
export const selectTasksEmpty = (state) => selectTasksList(state).length === 0;
export const selectIsEveryTaskDone = (state) =>
    selectTasksList(state).length > 0 &&
    selectTasksList(state).every((task) => task.done);

export default taskSlice.reducer;
