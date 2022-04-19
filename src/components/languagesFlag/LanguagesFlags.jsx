import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { MdLanguage } from 'react-icons/md';
import { v4 } from 'uuid';
import { SelectLanguage, SelectLanguageBox } from './LanguagesFlags.styled';

const languages = [
    {
        code: 'uk',
        country_code: 'ua',
        name: 'Українська',
        id: v4(),
    },
    {
        code: 'en',
        country_code: 'gb',
        name: 'English',
        id: v4(),
    },
    {
        code: 'ru',
        country_code: 'ru',
        name: 'Русский',
        id: v4(),
    },
];

function LanguagesFlags({ handleOnChange }) {
    const languagesList = languages.map(language => (
        <option key={language.id} value={language.code}>
            {language.name}
        </option>
    ));

    return (
        <>
            <SelectLanguageBox>
                <SelectLanguage onChange={handleOnChange}>
                    {languagesList}
                </SelectLanguage>
                <MdLanguage size={30} color="#4a77e8c9" />
            </SelectLanguageBox>
        </>
    );
}

export default LanguagesFlags;
