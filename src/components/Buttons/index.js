import "./Buttons.css";

const Buttons = ({ tasks, setAllDone }) => {
    if (tasks.length === 0) {
        return null;
    }

    const allDone = tasks.every(({ done }) => done);

    return (
        <div className="buttons">
            <button className="buttons__button">Ukryj ukończone</button>
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
