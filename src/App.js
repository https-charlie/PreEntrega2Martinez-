
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NotFound from './components/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <section>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:category' element={<ItemListContainer />} />
          <Route path='/detalle/:idUser' element={<ItemDetailContainer />} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </section>

  );
}

export default App;
