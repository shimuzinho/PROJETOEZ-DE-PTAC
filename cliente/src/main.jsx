import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Consult from './pages/Consult.jsx';
import Register from './pages/Register.jsx';
import Alter from './pages/Alter.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/consult' element={<Consult />} />
      <Route path='/register' element={<Register />} />
      <Route path='alter/:id' element={<Alter />}/>
    </Routes>
  </BrowserRouter>
);