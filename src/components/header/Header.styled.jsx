// import { NavLink } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderMenuList = styled.ul`
    justify-content: flex-start;
    display: flex;
    align-items: center;
    margin-left: 20px;
`;
export const HeaderMenuItem = styled.li`
    &:not(:last-child) {
        margin-right: 50px;
    }
`;
export const NavLinkStyled = styled(NavLink)`
    font-size: 24px;

    &.active {
        color: red;
        font-size: 32px;
    }
`;
