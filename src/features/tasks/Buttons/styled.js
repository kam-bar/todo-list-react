import styled from "styled-components";

export const StyledButtons = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
`;

export const Button = styled.button`
    padding: 8px 16px;
    background-color: transparent;
    color: ${({ theme }) => theme.colors.teal};
    border: none;
    cursor: pointer;
    transition: color 0.3s, transform 0.2s;
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    font-weight: normal;

    &:hover {
        color: ${({ theme }) => theme.colors.tealDark};
        transform: scale(1.05);
    }

    &:disabled {
        color: ${({ theme }) => theme.colors.silver};
        cursor: not-allowed;

        &:hover {
            color: ${({ theme }) => theme.colors.silver};
            transform: none;
        }
    }
`;
