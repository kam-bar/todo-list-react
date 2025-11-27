import { StyledButtons, Button } from "./styled";

const Buttons = ({ tasks, setAllDone, hideCompleted, toggleHideCompleted }) => {
    if (tasks.length === 0) {
        return null;
    }

    const allDone = tasks.every(({ done }) => done);
    const toggleButtonText = hideCompleted
        ? "Pokaż ukończone"
        : "Ukryj ukończone";

    return (
        <StyledButtons>
            <Button onClick={toggleHideCompleted}>{toggleButtonText}</Button>
            <Button onClick={setAllDone} disabled={allDone}>
                Ukończ wszystkie
            </Button>
        </StyledButtons>
    );
};

export default Buttons;
