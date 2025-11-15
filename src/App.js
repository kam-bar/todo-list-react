import Container from "./components/Container";
import Header from "./components/Header";
import Section from "./components/Section";
import Form from "./components/Form";
import Tasks from "./components/Tasks";

function App() {
    const tasks = [
        { id: 1, content: "przejść na Reacta", done: false },
        { id: 2, content: "zjeść obiad", done: true },
        { id: 3, content: "napić się kawy", done: false },
    ];

    return (
        <Container>
            <Header title="Lista zadań" />
            <Section title="Dodaj nowe zadanie" body={<Form />} />
            <Section title="Lista zadań" body={<Tasks tasks={tasks} />} />
        </Container>
    );
}

export default App;
