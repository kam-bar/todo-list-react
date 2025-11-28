import { StyledHeader, Title } from "./styled";

const Header = ({ title }) => (
    <StyledHeader>
        <Title>{title}</Title>
    </StyledHeader>
);

export default Header;
