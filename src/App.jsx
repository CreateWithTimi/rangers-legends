import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import Apparel from './pages/Apparel/Apparel.jsx';
import Cards from './pages/Cards/Cards.jsx';
import ComicReader from './pages/ComicReader/ComicReader.jsx';
import Film from './pages/Film/Film.jsx';
import Graphics from './pages/Graphics/Graphics.jsx';
import Home from './pages/Home/Home.jsx';
import LegendHub from './pages/LegendHub/LegendHub.jsx';
import Legends from './pages/Legends/Legends.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="legends" element={<Legends />} />
        <Route path="legends/christian-chukwu" element={<LegendHub />} />
        <Route path="legends/christian-chukwu/story" element={<ComicReader />} />
        <Route path="legends/christian-chukwu/film" element={<Film />} />
        <Route path="legends/christian-chukwu/graphics" element={<Graphics />} />
        <Route path="legends/christian-chukwu/apparel" element={<Apparel />} />
        <Route path="legends/christian-chukwu/cards" element={<Cards />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
