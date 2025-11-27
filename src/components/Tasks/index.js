import { TaskList, TaskItem, TaskContent, TaskButton } from "./styled";

const Tasks = ({ tasks, removeTask, toggleTaskDone }) => (
    <TaskList>
        {tasks.map((task) => (
            <TaskItem key={task.id} done={task.done}>
                <TaskButton toggle onClick={() => toggleTaskDone(task.id)}>
                    {task.done ? "✓" : ""}
                </TaskButton>
                <TaskContent className="taskContent">
                    {task.content}
                </TaskContent>
                <TaskButton remove onClick={() => removeTask(task.id)}>
                    🗑
                </TaskButton>
            </TaskItem>
        ))}
    </TaskList>
);

export default Tasks;