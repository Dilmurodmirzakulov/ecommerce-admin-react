import React from 'react';
import { Link } from 'react-router-dom';

const AsideNav = () => {
  return (
    <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
        <div className="app-brand demo justify-content-start">
          <Link to={'/'} className="app-brand-link">
            <span className="app-brand-text demo menu-text fw-bolder text-uppercase text-gray">
              BOY TOYS
            </span>
          </Link>

          {/* <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none">
            <i className="bx bx-chevron-left bx-sm align-middle"></i>
          </a> */}
        </div>

        <div className="menu-inner-shadow"></div>

        <ul className="menu-inner py-1">
          <li className="menu-item active">
            <Link to={'/'} className="menu-link">
              <i className='menu-icon tf-icons bx bx-home-alt-2'></i>
              <div data-i18n="Analytics">Dashboard</div>
            </Link>
          </li>
          <li className="menu-header small text-uppercase"><span className="menu-header-text">Shop</span></li>
          <li className="menu-item">
            <Link to={'/product'} className="menu-link">
              <i className="menu-icon tf-icons bx bx-collection"></i>
              <div data-i18n="Boxicons">Products</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to={'/customer'} className="menu-link">
              <i className='menu-icon tf-icons bx bx-group'></i>
              <div data-i18n="Boxicons">Customers</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to={'/order'} className="menu-link">
              <i className='menu-icon tf-icons bx bx-package'></i>
              <div data-i18n="Boxicons">Orders</div>
            </Link>
          </li>
          <li className="menu-header small text-uppercase"><span className="menu-header-text">Content</span></li>
          <li className="menu-item">
            <Link to={'/'} className="menu-link">
              <i className="menu-icon tf-icons bx bx-collection"></i>
              <div data-i18n="Boxicons">Banners</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to={'/'} className="menu-link">
              <i className='menu-icon tf-icons bx bx-package'></i>
              <div data-i18n="Boxicons">Contacts</div>
            </Link>
          </li>
          <li className="menu-item">
            <Link to={'/'} className="menu-link">
              <i className='menu-icon tf-icons bx bx-group'></i>
              <div data-i18n="Boxicons">Authors</div>
            </Link>
          </li>
        </ul>
      </aside>
  )
}

export default AsideNav;