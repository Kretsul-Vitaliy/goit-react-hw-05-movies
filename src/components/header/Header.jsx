import React from 'react';
import { v4 } from 'uuid';
import { HeaderMenuItem, HeaderMenuList, NavLinkStyled } from './Header.styled';

export default function MainNav() {
    const menuList = [
        { id: v4(), name: 'Home', to: '/', exact: true },
        { id: v4(), name: 'Movies', to: '/movies', exact: false },
    ];
    const menuListItems = menuList.map(item => (
        <HeaderMenuItem key={item.id}>
            <NavLinkStyled {...item}>{item.name}</NavLinkStyled>
        </HeaderMenuItem>
    ));

    return (
        <header>
            <div>
                <HeaderMenuList>{menuListItems}</HeaderMenuList>
            </div>
        </header>
    );
}
