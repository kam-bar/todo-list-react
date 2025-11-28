import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyledForm, Input, Button } from "./styled";
import { addTask, selectTasksList } from "../TaskSlice";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);
    const dispatch = useDispatch();
    const tasks = useSelector(selectTasksList);

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimmedContent = newTaskContent.trim();

        if (!trimmedContent) {
            return;
        }

        const newId = tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1;

        dispatch(
            addTask({
                id: newId,
                content: trimmedContent,
                done: false,
            })
        );

        setNewTaskContent("");
        inputRef.current.focus();
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button>Dodaj zadanie</Button>
        </StyledForm>
    );
};

export default Form;
