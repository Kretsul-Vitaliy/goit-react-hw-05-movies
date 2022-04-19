import React, { lazy, Suspense } from 'react';
import { Route, Switch, useRouteMatch, useLocation } from 'react-router-dom';
import { v4 } from 'uuid';
import Section from '../Section';
import Loader from '../Loader';
import { InfoText, NavLinkInfoStyled } from './AdditionalInformation.styled';
const Cast = lazy(() => import('../Cast' /*webpackChunkName: "Cast__page"*/));
const Reviews = lazy(() =>
    import('../Reviews' /*webpackChunkName: "Reviews__page"*/)
);
export default function AdditionalInformation({ lang, movieDetailId }) {
    const location = useLocation();
    const { url, path } = useRouteMatch();

    const movieDetailPageListLang = [
        {
            id: v4(),
            code: 'en',
            buttonBack: 'Go back',
            info: 'Additional information',
            cast: 'Cast',
            reviews: 'Reviews',
        },
        {
            id: v4(),
            code: 'uk',
            buttonBack: 'Повернутися',
            info: 'Додаткова інформація',
            cast: 'Акторський склад',
            reviews: 'Відгуки',
        },
        {
            id: v4(),
            code: 'ru',
            buttonBack: 'Назад',
            info: 'Дополнительная информация',
            cast: 'Актерский состав',
            reviews: 'Отзывы',
        },
    ];
    const movieDetailPageListFilter = movieDetailPageListLang.filter(
        language => {
            return language.code.includes(`${lang}`);
        }
    );
    return movieDetailId ? (
        <>
            <Section>
                <hr />
                <InfoText>{movieDetailPageListFilter[0].info}</InfoText>
                <div>
                    <NavLinkInfoStyled
                        to={{
                            pathname: `${url}/cast`,
                            state: { detail: location.state?.detail },
                        }}
                    >
                        {movieDetailPageListFilter[0].cast}
                    </NavLinkInfoStyled>
                    <NavLinkInfoStyled
                        to={{
                            pathname: `${url}/reviews`,
                            state: { detail: location.state?.detail },
                        }}
                    >
                        {movieDetailPageListFilter[0].reviews}
                    </NavLinkInfoStyled>
                </div>
                <Suspense fallback={<Loader />}>
                    <Switch>
                        <Route path={`${path}/cast`}>
                            <Cast lang={lang} />
                        </Route>
                        <Route path={`${path}/reviews`}>
                            <Reviews lang={lang} />
                        </Route>
                    </Switch>
                </Suspense>
            </Section>
        </>
    ) : null;
}
