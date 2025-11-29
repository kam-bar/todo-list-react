import { takeEvery, call, put, select } from "redux-saga/effects";
import {
    fetchExampleTasks,
    fetchExampleTasksSuccess,
    fetchExampleTasksError,
    selectTasksList,
} from "./TaskSlice";

const API_URL = process.env.PUBLIC_URL + "/exampleTasks.json";

async function getExampleTasks() {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error(response.statusText);
    }
    return response.json();
}

function* fetchExampleTasksHandler() {
    try {
        const tasks = yield call(getExampleTasks);
        yield put(fetchExampleTasksSuccess(tasks));
    } catch (error) {
        console.error("Błąd pobierania:", error);
        yield put(fetchExampleTasksError());
        alert("Błąd: " + error.message);
    }
}

function* saveTasksToLocalStorageHandler() {
    const tasks = yield select(selectTasksList);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

export default function* tasksSaga() {
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksToLocalStorageHandler);
}
