import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CartProvider } from './context/CartContext.jsx';
import { PcBuilderProvider } from "./context/PcBuilderContext.jsx";
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <PcBuilderProvider>
        <App />
      </PcBuilderProvider>
    </CartProvider>
  </StrictMode>
);
