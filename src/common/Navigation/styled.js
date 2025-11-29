import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
    background-color: ${({ theme }) => theme.colors.teal};
    padding: 20px;
    display: flex;
    gap: 40px;
    justify-content: center;
`;

export const StyledNavLink = styled(NavLink)`
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    font-weight: ${({ isActive }) => (isActive ? "bold" : "normal")};
    border-bottom: 1px solid transparent;
    padding-bottom: 4px;

    &.active {
        font-weight: bold;
    }

    &:hover {
        border-bottom: 1px solid ${({ theme }) => theme.colors.white};
    }
`;
