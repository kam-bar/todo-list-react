import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../TaskSlice";
import { Button } from "../Buttons/styled";

const FetchExampleTasksButton = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading);

    return (
        <Button
            onClick={() => dispatch(fetchExampleTasks())}
            disabled={loading}
        >
            {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
        </Button>
    );
};

export default FetchExampleTasksButton;
