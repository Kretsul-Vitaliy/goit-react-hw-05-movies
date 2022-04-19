import styled from 'styled-components';

export const MoviesListStyled = styled.ul`
    display: grid;
    max-width: calc(100vw - 48px);
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    grid-gap: 16px;
    border-radius: 8px;
    margin-top: 0;
    margin-bottom: 0;
    padding: 15px 0;
    list-style: none;
    margin-left: auto;
    margin-right: auto;
`;
export const MoviesListItemStyled = styled.li`
    position: relative;
    img {
        border-radius: 8px;
    }
    &:hover {
        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
        transform: scale(1.03);
        cursor: zoom-in;
    }
`;
export const MovieListInfoBox = styled.div`
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 10px;
`;
export const MovieListInfoText = styled.h2`
    font-weight: 700;
    font-size: 1em;
    color: black;
`;
export const MovieListInfoDate = styled.p`
    font-weight: 400;
    font-size: 1em;
    color: rgba(0, 0, 0, 0.6);
`;
export const CircularProgressbarBox = styled.div`
    position: absolute;
    top: 2px;
    right: 4px;
`;
