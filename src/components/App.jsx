import { Route,Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage/MainPage';
import CharacterDetails from '../pages/CharacterDetails/CharacterDetails';
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<CharacterDetails />} />
      </Routes>
    </>
  );
};
