import './App.css';
import { BrowserRouter, Routes, Route, RouterProvider, Link } from 'react-router-dom';
import Home from './pages/home/index'
import Contacts from './pages/contacts'
import Publications from './pages/publications'
import Fotos from './pages/fotos'

function App() {
  return (
    <BrowserRouter >
      <nav className='navigation'>
        <Link to='/'>Home</Link>
        <Link to='/publications'>Publications</Link>
        <Link to='/fotos'>Fotos</Link>
        <Link to='/contacts'>Contacts</Link>
      </nav>
     
        <Routes>
          <Route index element={<Home />} />
          <Route path='publications' element={<Publications />} />
          <Route path='fotos' element={<Fotos />} />
          <Route path='contacts' element={<Contacts />} />
        </Routes>
      </BrowserRouter>
  
  );
}

export default App;
