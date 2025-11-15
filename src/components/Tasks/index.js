import "./Tasks.css";

const Tasks = ({ tasks }) => (
    <ul className="tasks">
        {tasks.map((task) => (
            <li
                key={task.id}
                className={`tasks__item${
                    task.done ? " tasks__item--done" : ""
                }`}
            >
                <button className="tasks__button tasks__button--toggleDone">
                    {task.done ? "✓" : ""}
                </button>
                <span className="tasks__content">{task.content}</span>
                <button className="tasks__button tasks__button--remove">
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;
