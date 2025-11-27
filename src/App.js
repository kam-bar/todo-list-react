import Container from "./components/Container";
import Header from "./components/Header";
import Section from "./components/Section";
import Form from "./components/Form";
import Tasks from "./components/Tasks";
import Buttons from "./components/Buttons";
import { useTasks } from "./useTasks";

function App() {
    const {
        tasks,
        tasksToRender,
        addNewTask,
        removeTask,
        toggleTaskDone,
        setAllDone,
        hideCompleted,
        toggleHideCompleted,
    } = useTasks();

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
                        tasks={tasksToRender}
                        removeTask={removeTask}
                        toggleTaskDone={toggleTaskDone}
                    />
                }
                extraHeaderContent={
                    <Buttons
                        tasks={tasks}
                        setAllDone={setAllDone}
                        hideCompleted={hideCompleted}
                        toggleHideCompleted={toggleHideCompleted}
                    />
                }
            />
        </Container>
    );
}

export default App;
