import styled from "styled-components";

const StyledHeader = styled.header`
    margin-top: 40px;
    margin-bottom: 20px;
`;

const Title = styled.h1`
    font-size: 32px;
    font-weight: bold;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 24px;
    }
`;

const Header = ({ title }) => (
    <StyledHeader>
        <Title>{title}</Title>
    </StyledHeader>
);

export default Header;
