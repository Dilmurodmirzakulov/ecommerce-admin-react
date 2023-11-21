import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';

const AsideNav = () => {
  const { pathname } = useLocation();
  const { t } = useTranslation();

  return (
    <aside id="layout-menu" className="layout-menu menu-vertical menu bg-menu-theme">
        <div className="app-brand demo justify-content-start">
          <Link to={'/'} className="app-brand-link">
            <span className="app-brand-text demo menu-text fw-bolder text-uppercase text-gray">
              BOY TOYS
            </span>
          </Link>
        </div>

        <div className="menu-inner-shadow"></div>

        <ul className="menu-inner py-1">
          <li className={`menu-item ${pathname == "/" && "active"}`}>
            <Link to={'/'} className="menu-link">
              <i className='menu-icon tf-icons bx bx-home-alt-2'></i>
              <div data-i18n="Analytics">{t('dashboard')}</div>
            </Link>
          </li>
          <li className="menu-header small text-uppercase"><span className="menu-header-text">{t('shop')}</span></li>
          <li className={`menu-item ${pathname.includes("/product") && "active"}`}>
            <Link to={'/product'} className="menu-link">
              <i className="menu-icon tf-icons bx bx-collection"></i>
              <div data-i18n="Boxicons">{t('products')}</div>
            </Link>
          </li>
          <li className={`menu-item ${pathname.includes("/customer") && "active"}`}>
            <Link to={'/customer'} className="menu-link">
              <i className='menu-icon tf-icons bx bx-group'></i>
              <div data-i18n="Boxicons">{t('customers')}</div>
            </Link>
          </li>
          <li className={`menu-item ${pathname.includes("/order") && "active"}`}>
            <Link to={'/order'} className="menu-link">
              <i className='menu-icon tf-icons bx bx-package'></i>
              <div data-i18n="Boxicons">{t('orders')}</div>
            </Link>
          </li>
          <li className="menu-header small text-uppercase"><span className="menu-header-text">{t('content')}</span></li>
          <li className={`menu-item ${pathname.includes("/banner") && "active"}`}>
            <Link to={'/banner'} className="menu-link">
              <i className="menu-icon tf-icons bx bx-collection"></i>
              <div data-i18n="Boxicons">{t('banners')}</div>
            </Link>
          </li>
          <li className={`menu-item ${pathname.includes("/contact") && "active"}`}>
            <Link to={'/contact'} className="menu-link">
              <i className='menu-icon tf-icons bx bx-phone-call'></i>
              <div data-i18n="Boxicons">{t('contacts')}</div>
            </Link>
          </li>
          <li className={`menu-item ${pathname.includes("/payment") && "active"}`}>
            <Link to={'/payment'} className="menu-link">
              <i className='menu-icon tf-icons bx bx-money'></i>
              <div data-i18n="Boxicons">{t('payments')}</div>
            </Link>
          </li>
          <li className={`menu-item ${pathname.includes("/authors") && "active"}`}>
            <Link to={'/'} className="menu-link">
              <i className='menu-icon tf-icons bx bx-group'></i>
              <div data-i18n="Boxicons">{t('authors')}</div>
            </Link>
          </li>
        </ul>
      </aside>
  )
}

export default AsideNav;