import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "boxicons/css/boxicons.min.css";
import './assets/css/core.css';
import './assets/css/custom.css';
import './assets/css/demo.css';
import './assets/css/theme-default.css';
import Login from './pages/login';
import Home from './pages';
import MainLayout from './layout/mainLayout';
import RequireAuth from './routes/RequireAuth';
import Product from './pages/product/[id]';
import Products from './pages/products';
import Customers from './pages/customers';
import Customer from './pages/customer/[id]';
import Orders from './pages/orders';
import Order from './pages/order/[id]';
import Banners from './pages/banners';
import Banner from './pages/banner/[id]';
import Contacts from './pages/contacts';
import Contact from './pages/contact/[id]';

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
            <Route path="/product" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/customer" element={<Customers />} />
            <Route path="/customer/:id" element={<Customer />} />
            <Route path="/order" element={<Orders />} />
            <Route path="/order/:id" element={<Order />} />
            <Route path="/banner" element={<Banners />} />
            <Route path="/banner/:id" element={<Banner />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/contact/:id" element={<Contact />} />
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
