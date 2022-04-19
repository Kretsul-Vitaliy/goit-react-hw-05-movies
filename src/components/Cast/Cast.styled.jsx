import styled from 'styled-components';

export const AuthorsListStyled = styled.ul`
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    grid-gap: 16px;
    border-radius: 8px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 15px 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
`;
