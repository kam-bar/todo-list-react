import { useSelector, useDispatch } from "react-redux";
import {
    TaskList,
    TaskItem,
    TaskContent,
    TaskButton,
    StyledLink,
} from "./styled";
import { selectTasksList, toggleTaskDone, removeTask } from "../TaskSlice";
import { ROUTES } from "../../../routes";

const Tasks = () => {
    const tasks = useSelector(selectTasksList);
    console.log(tasks);
    const dispatch = useDispatch();

    return (
        <TaskList>
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    done={task.done}
                    hidden={task.hidden}
                    style={{ display: task.hidden ? "none" : "grid" }}
                >
                    <TaskButton
                        toggle="true"
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✔" : ""}
                    </TaskButton>

                    <StyledLink to={ROUTES.task(task.id)}>
                        <TaskContent className="taskContent">
                            {task.content}
                        </TaskContent>
                    </StyledLink>

                    <TaskButton
                        remove="true"
                        onClick={() => dispatch(removeTask(task.id))}
                    >
                        🗑
                    </TaskButton>
                </TaskItem>
            ))}
        </TaskList>
    );
};

export default Tasks;
