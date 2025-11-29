import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Section from "../../../common/Section";
import { selectTasksList } from "../TaskSlice";

const TaskPage = () => {
    const { id } = useParams();
    const tasks = useSelector(selectTasksList);
    const task = tasks.find((task) => task.id === id);

    if (!task) {
        return (
            <Section
                title="Szczegóły zadania"
                body={<p>Sorka, nie ma takiego zadania.</p>}
            />
        );
    }

    return (
        <Section
            title="Szczegóły zadania"
            body={
                <>
                    <p>{task.content}</p>
                    <p>Ukończono: {task.done ? "Tak" : "Nie"}</p>
                </>
            }
        />
    );
};

export default TaskPage;
