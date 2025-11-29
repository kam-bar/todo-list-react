import Container from "./common/Container";
import Header from "./common/Header";
import Section from "./common/Section";
import Form from "./features/tasks/Form";
import Tasks from "./features/tasks/Tasks";
import Buttons from "./features/tasks/Buttons";
import FetchExampleTasksButton from "./features/tasks/FetchExampleTasksButton";

function App() {
    return (
        <Container>
            <Header title="Lista zadań" />
            <Section
                title="Dodaj nowe zadanie"
                body={<Form />}
                extraHeaderContent={<FetchExampleTasksButton />}
            />
            <Section
                title="Lista zadań"
                body={<Tasks />}
                extraHeaderContent={<Buttons />}
            />
        </Container>
    );
}

export default App;
