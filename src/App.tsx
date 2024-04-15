import { PeoplePage } from './components/PeoplePage';
import { Navbar } from './components/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.scss';
import { HomePage } from './components/HomePage';
import { NotFoundPage } from './components/NotFoundPage';

export const App = () => {
  return (
    <div data-cy="app">
      <Navbar />

      <div className="section">
        <div className="container">
          <Routes>
            <Route path={'/'} element={<HomePage />} />
            <Route
              path={'home'}
              element={<Navigate to={'/'} replace={true} />}
            />
            <Route path={'people'}>
              <Route index element={<PeoplePage />} />
              <Route path={':slug'} element={<PeoplePage />} />
            </Route>
            <Route path={'*'} element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
