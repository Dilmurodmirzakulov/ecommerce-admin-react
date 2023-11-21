import React from 'react';
import { Dropdown, DropdownMenu, DropdownToggle } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <>
        <Dropdown className="nav-item dropdown ml-auto">
            <DropdownToggle className="btn dropdown-toggle es-language-dropdown" type="button" id="languageDropdown"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {i18n.language === 'ru' ? 'Рус' : i18n.language === 'uz' ? 'O\'zb' : 'Eng'}
            </DropdownToggle>
            <DropdownMenu className="dropdown-menu es-dropdown-menu" aria-labelledby="languageDropdown">
              <a
                className={`dropdown-item ${i18n.language === 'ru' ? 'active' : ''}`}
                onClick={() => changeLanguage('ru')}
              >
                Рус
              </a>
              <a
                className={`dropdown-item ${i18n.language === 'uz' ? 'active' : ''}`}
                onClick={() => changeLanguage('uz')}
              >
                O'zb
              </a>
              <a
                className={`dropdown-item ${i18n.language === 'en' ? 'active' : ''}`}
                onClick={() => changeLanguage('en')}
              >
                Eng
              </a>
            </DropdownMenu>
        </Dropdown>
    </>
  )
}

export default LanguageDropdown;
