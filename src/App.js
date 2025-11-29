import { useEffect } from "react";
import { useSelector } from "react-redux";
import Container from "./common/Container";
import Header from "./common/Header";
import Section from "./common/Section";
import Form from "./features/tasks/Form";
import Tasks from "./features/tasks/Tasks";
import Buttons from "./features/tasks/Buttons";
import { selectTasksList } from "./features/tasks/TaskSlice";

function App() {
    const tasks = useSelector(selectTasksList);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return (
        <Container>
            <Header title="Lista zadań" />
            <Section title="Dodaj nowe zadanie" body={<Form />} />
            <Section
                title="Lista zadań"
                body={<Tasks />}
                extraHeaderContent={<Buttons />}
            />
        </Container>
    );
}

export default App;
