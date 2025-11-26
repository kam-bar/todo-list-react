import styled from "styled-components";

const StyledSection = styled.section`
    background-color: ${({ theme }) => theme.colors.white};
    margin-bottom: 10px;
`;

const SectionHeader = styled.header`
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

const SectionTitle = styled.h2`
    font-size: 20px;
    font-weight: bold;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 18px;
    }
`;

const SectionBody = styled.div`
    padding: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 15px;
    }
`;

const Section = ({ title, body, extraHeaderContent }) => (
    <StyledSection>
        <SectionHeader>
            <SectionTitle>{title}</SectionTitle>
            {extraHeaderContent}
        </SectionHeader>
        <SectionBody>{body}</SectionBody>
    </StyledSection>
);

export default Section;
