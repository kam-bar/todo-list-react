import styled from "styled-components";

export const Wrapper = styled.div`
    margin-bottom: 20px;
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.colors.gallery};
    border-radius: 0;
`;
