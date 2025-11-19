import "./Tasks.css";

const Tasks = ({ tasks, removeTask, toggleTaskDone }) => (
    <ul className="tasks">
        {tasks.map((task) => (
            <li
                key={task.id}
                className={`tasks__item${
                    task.done ? " tasks__item--done" : ""
                }`}
            >
                <button className="tasks__button tasks__button--toggleDone"
                onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✓" : ""}
                </button>
                <span className="tasks__content">{task.content}</span>
                <button className="tasks__button tasks__button--remove"
                onClick={() => removeTask(task.id)}
                >
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;
