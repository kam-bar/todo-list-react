import { useState } from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import Section from "./components/Section";
import Form from "./components/Form";
import Tasks from "./components/Tasks";
import Buttons from "./components/Buttons";

function App() {
    const [tasks, setTasks] = useState([
        { id: 1, content: "przejść na Reacta", done: false },
        { id: 2, content: "zjeść obiad", done: true },
    ]);

    const removeTask = (id) => {
        setTasks((tasks) => tasks.filter((task) => task.id !== id));
    };

    const toggleTaskDone = (id) => {
        setTasks((tasks) =>
            tasks.map((task) => {
                if (task.id === id) {
                    return { ...task, done: !task.done };
                }
                return task;
            })
        );
    };

    const setAllDone = () => {
        setTasks((tasks) => tasks.map((task) => ({ ...task, done: true })));
    };

    const addNewTask = (content) => {
        setTasks((tasks) => [
            ...tasks,
            {
                content,
                done: false,
                id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
            },
        ]);
    };

    return (
        <Container>
            <Header title="Lista zadań" />

            <Section
                title="Dodaj nowe zadanie"
                body={<Form addNewTask={addNewTask} />}
            />

            <Section
                title="Lista zadań"
                body={
                    <Tasks
                        tasks={tasks}
                        removeTask={removeTask}
                        toggleTaskDone={toggleTaskDone}
                    />
                }
                extraHeaderContent={
                    <Buttons tasks={tasks} setAllDone={setAllDone} />
                }
            />
        </Container>
    );
}

export default App;
