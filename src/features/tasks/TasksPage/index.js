import Section from "../../../common/Section";
import Form from "../Form";
import Tasks from "../Tasks";
import Buttons from "../Buttons";
import FetchExampleTasksButton from "../FetchExampleTasksButton";
import Search from "../Search";

const TasksPage = () => (
    <>
        <Section
            title="Dodaj nowe zadanie"
            body={<Form />}
            extraHeaderContent={<FetchExampleTasksButton />}
        />
        <Section title="Wyszukiwarka" body={<Search />} />
        <Section
            title="Lista zadań"
            body={<Tasks />}
            extraHeaderContent={<Buttons />}
        />
    </>
);

export default TasksPage;
