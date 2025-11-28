import styled from "styled-components";

export const StyledSection = styled.section`
    background-color: ${({ theme }) => theme.colors.white};
    margin-bottom: 10px;
`;

export const SectionHeader = styled.header`
    border-bottom: 2px solid ${({ theme }) => theme.colors.gallery};
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
`;

export const SectionTitle = styled.h2`
    font-size: 20px;
    font-weight: bold;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 18px;
    }
`;

export const SectionBody = styled.div`
    padding: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 15px;
    }
`;
