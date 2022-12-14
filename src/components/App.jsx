import { lazy } from 'react';

import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import { MoviesSearch } from './MoviesSearch';
import { MovieDetails } from './MovieDetails';
import { Cast } from './Cast';
import { Reviews } from './Reviews';

const HomePage = lazy(() => import('../pages/HomePage'));
const MoviePage = lazy(() => import('../pages/MoviePage'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviePage />}>
            <Route index element={<MoviesSearch />} />
          </Route>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  );
};
