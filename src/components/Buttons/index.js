import "./Buttons.css";

const Buttons = ({ tasks }) => (
    <div className="buttons">
        {tasks.length > 0 && (
            <>
                <button className="buttons__button">Ukryj ukończone</button>
                <button
                    className="buttons__button"
                    disabled={tasks.every((task) => task.done)}
                >
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div>
);

export default Buttons;
