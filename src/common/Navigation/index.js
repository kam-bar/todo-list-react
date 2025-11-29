import { NavLink } from "react-router-dom";
import { Nav, StyledNavLink } from "./styled";
import { ROUTES } from "../../routes";

const Navigation = () => (
    <Nav>
        <StyledNavLink to={ROUTES.tasks} end>
            Lista zadań
        </StyledNavLink>
        <StyledNavLink to={ROUTES.author}>O autorze</StyledNavLink>
    </Nav>
);

export default Navigation;
