import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // 🧠 IMPORTANTE
import RotasApp from './rotas.jsx';
import './pages/Login/index.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <RotasApp />
    </BrowserRouter>
  </StrictMode>
);
