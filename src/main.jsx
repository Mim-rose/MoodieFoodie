import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";

import router from './Routes/router.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import CartProvider from './pages/CartProvider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider> {/* ✅ AuthContext is available to children */}
      <CartProvider> {/* ✅ Can safely use AuthContext */}
        <div className='max-w-screen-xl mx-auto'>
          <RouterProvider router={router} />
        </div>
      </CartProvider>
    </AuthProvider>
  </StrictMode>
);

