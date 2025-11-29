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
    loading: false,
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
        fetchExampleTasks: (state) => {
            state.loading = true;
        },
        fetchExampleTasksSuccess: (state, { payload: tasks }) => {
            state.loading = false;
            state.tasks = tasks;
        },
        fetchExampleTasksError: (state) => {
            state.loading = false;
        },
    },
});

export const {
    addTask,
    toggleTaskDone,
    removeTask,
    setAllDone,
    toggleHideDone,
    fetchExampleTasks,
    fetchExampleTasksSuccess,
    fetchExampleTasksError,
} = taskSlice.actions;

export const selectTasksState = (state) => state.tasks;
export const selectTasksList = (state) => selectTasksState(state).tasks;
export const selectHideDone = (state) => selectTasksState(state).hideDone;
export const selectLoading = (state) => selectTasksState(state).loading;
export const selectTasksEmpty = (state) => selectTasksList(state).length === 0;
export const selectIsEveryTaskDone = (state) =>
    selectTasksList(state).length > 0 &&
    selectTasksList(state).every((task) => task.done);

export default taskSlice.reducer;
