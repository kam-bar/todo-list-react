import { useSelector, useDispatch } from "react-redux";
import { StyledButtons, Button } from "./styled";
import {
    selectTasksEmpty,
    selectIsEveryTaskDone,
    selectHideDone,
    setAllDone,
    toggleHideDone,
} from "../TaskSlice";

const Buttons = () => {
    const dispatch = useDispatch();
    const isEmpty = useSelector(selectTasksEmpty);
    const isEveryDone = useSelector(selectIsEveryTaskDone);
    const hideDone = useSelector(selectHideDone);

    if (isEmpty) {
        return null;
    }

    const toggleButtonText = hideDone ? "Pokaż ukończone" : "Ukryj ukończone";

    return (
        <StyledButtons>
            <Button onClick={() => dispatch(toggleHideDone())}>
                {toggleButtonText}
            </Button>
            <Button
                onClick={() => dispatch(setAllDone())}
                disabled={isEveryDone}
            >
                Ukończ wszystkie
            </Button>
        </StyledButtons>
    );
};

export default Buttons;
