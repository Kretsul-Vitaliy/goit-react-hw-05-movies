import React from 'react';
import { v4 } from 'uuid';
import {
    HeaderMenuItem,
    HeaderMenuList,
    HeaderSection,
    NavLinkStyled,
} from './Header.styled';
import LanguagesFlags from '../languagesFlag/LanguagesFlags';

export default function Header({ lang, handleOnChange }) {
    const menuList = [
        { id: v4(), code: 'en', name: 'Home', to: '/', exact: true },
        { id: v4(), code: 'uk', name: 'Додому', to: '/', exact: true },
        { id: v4(), code: 'ru', name: 'Домой', to: '/', exact: true },
        { id: v4(), code: 'en', name: 'Movies', to: '/movies', exact: false },
        { id: v4(), code: 'uk', name: 'Фільми', to: '/movies', exact: false },
        { id: v4(), code: 'ru', name: 'Фильмы', to: '/movies', exact: false },
    ];
    const menuListFilter = menuList.filter(language => {
        return language.code.includes(`${lang}`);
    });

    const menuListItems = menuListFilter.map(item => (
        <HeaderMenuItem key={item.id}>
            <NavLinkStyled {...item}>{item.name}</NavLinkStyled>
        </HeaderMenuItem>
    ));

    return (
        <HeaderSection>
            <div>
                <HeaderMenuList>{menuListItems}</HeaderMenuList>
            </div>
            <LanguagesFlags handleOnChange={handleOnChange} />
        </HeaderSection>
    );
}
