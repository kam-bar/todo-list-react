import { useState, useRef } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
        gap: 10px;
    }
`;

const Input = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    font-family: inherit;
    font-size: 16px;

    &:focus {
        outline: 2px solid ${({ theme }) => theme.colors.teal};
        border-color: ${({ theme }) => theme.colors.teal};
    }
`;

const Button = styled.button`
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.colors.teal};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    font-weight: bold;
    cursor: pointer;
    font-family: inherit;
    transition: background-color 0.3s, transform 0.3s;

    &:hover {
        background-color: ${({ theme }) => theme.colors.tealDark};
        transform: scale(1.05);
    }

    &:active {
        background-color: ${({ theme }) => theme.colors.tealDarker};
        transform: scale(0.95);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width: 100%;
    }
`;

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimmedContent = newTaskContent.trim();

        if (!trimmedContent) {
            return;
        }

        addNewTask(trimmedContent);
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
