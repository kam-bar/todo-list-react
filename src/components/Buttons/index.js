import "./Buttons.css";

const Buttons = ({ tasks, setAllDone, hideCompleted, toggleHideCompleted }) => {
    if (tasks.length === 0) {
        return null;
    }

    const allDone = tasks.every(({ done }) => done);

    const toggleButtonText = hideCompleted
        ? "Pokaż ukończone"
        : "Ukryj ukończone";

    return (
        <div className="buttons">
            <button className="buttons__button" onClick={toggleHideCompleted}>
                {toggleButtonText}
            </button>
            <button
                className="buttons__button"
                onClick={setAllDone}
                disabled={allDone}
            >
                Ukończ wszystkie
            </button>
        </div>
    );
};

export default Buttons;
