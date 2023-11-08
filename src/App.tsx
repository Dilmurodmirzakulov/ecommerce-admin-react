import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages';
import MainLayout from './layout/mainLayout';
import RequireAuth from './routes/RequireAuth';
import Product from './pages/product/[id]';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* public routes */}
        <Route path="/login" element={<Login />} />

        {/* we want to protect these routes */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
          </Route>
        </Route>

        {/* catch all */}
        {/* <Route path="/" element={<Layout />}>
          <Route path="*" element={<PageNotFound />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
