import { useSelector, useDispatch } from "react-redux";
import { TaskList, TaskItem, TaskContent, TaskButton } from "./styled";
import {
    selectTasksList,
    selectHideDone,
    toggleTaskDone,
    removeTask,
} from "../TaskSlice";

const Tasks = () => {
    const tasks = useSelector(selectTasksList);
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();

    const tasksToRender = hideDone ? tasks.filter((task) => !task.done) : tasks;

    return (
        <TaskList>
            {tasksToRender.map((task) => (
                <TaskItem key={task.id} done={task.done}>
                    <TaskButton
                        toggle
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✓" : ""}
                    </TaskButton>
                    <TaskContent className="taskContent">
                        {task.content}
                    </TaskContent>
                    <TaskButton
                        remove
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
