import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import taskReducer from "./features/tasks/TaskSlice";
import tasksSaga from "./features/tasks/tasksSaga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        tasks: taskReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(tasksSaga);

export default store;
