import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    flex-grow: 1;
`;

export const TaskList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;

export const TaskItem = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    gap: 10px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.gallery};

    &:last-child {
        border-bottom: none;
    }

    ${({ done }) =>
        done &&
        css`
            .taskContent {
                text-decoration: line-through;
            }
        `}
`;

export const TaskContent = styled.span`
    word-break: break-word;
`;

export const TaskButton = styled.button`
    width: 30px;
    height: 30px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
    color: ${({ color }) => (color ? color : "white")};
    font-weight: bold;
    font-size: 16px;

    ${({ toggle }) =>
        toggle &&
        css`
            background-color: ${({ theme }) => theme.colors.emerald};

            &:hover {
                background-color: ${({ theme }) => theme.colors.emeraldDark};
                transform: scale(1.1);
            }
            &:active {
                background-color: ${({ theme }) => theme.colors.emeraldDarker};
            }
        `}

    ${({ remove }) =>
        remove &&
        css`
            background-color: ${({ theme }) => theme.colors.crimson};

            &:hover {
                background-color: ${({ theme }) => theme.colors.crimsonDark};
                transform: scale(1.1);
            }
            &:active {
                background-color: ${({ theme }) => theme.colors.crimsonDarker};
            }
        `}
`;
