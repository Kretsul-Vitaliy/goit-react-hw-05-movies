import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const InfoText = styled.p`
    font-weight: 700;
    font-size: 1em;
    color: black;
`;
export const NavLinkInfoStyled = styled(NavLink)`
    font-size: 16px;
    color: black;
    margin-right: 20px;

    &.active {
        color: red;
        font-size: 18px;
    }
`;
