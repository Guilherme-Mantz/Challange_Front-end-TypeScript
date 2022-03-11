import { Route, Routes } from 'react-router-dom';
import Index from '../pages/Index';
import SelectedFilm from '../pages/SelectedFilm';

function Router() {
  return (
    <Routes>
      <Route path='/' element={<Index />} />
      <Route path='/:id' element={<Index />} />
      <Route path='movie/:id' element={<SelectedFilm />} />
    </Routes>
  )
}

export default Router;