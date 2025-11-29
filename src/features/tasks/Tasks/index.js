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
import { useQueryParameter } from "../useQueryParameter";

const SEARCH_QUERY_PARAM_NAME = "search";

const Tasks = () => {
    const tasks = useSelector(selectTasksList);
    const dispatch = useDispatch();
    const searchQuery = useQueryParameter(SEARCH_QUERY_PARAM_NAME) || "";

    const normalizedQuery = searchQuery.trim().toLowerCase();

    const filteredTasks = tasks.filter((task) =>
        task.content.toLowerCase().includes(normalizedQuery)
    );

    return (
        <TaskList>
            {filteredTasks.map((task) => (
                <TaskItem
                    key={task.id}
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
