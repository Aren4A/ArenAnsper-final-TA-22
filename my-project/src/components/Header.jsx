import React from 'react';
import '../App.css';
import { useState } from "react";
import { Link } from "react-router-dom";
import backgroundImage from '../assets/cropped_ananass.jpg';
import { useTranslation } from "react-i18next";

function Header() {
const { t, i18n: {changeLanguage, language} } = useTranslation();
const [currentLanguage, setCurrentLanguage] = useState(language)
const handleChangeLanguage = () => {
const newLanguage = currentLanguage === "et" ? "en" : "et";
   setCurrentLanguage(newLanguage);
   changeLanguage(newLanguage);
 }

  return (
 <div className="bg-cover bg-center w-full" style={{ backgroundImage: `url(${backgroundImage})` }}>
      
      <header className="navbar lg:justify-end flex bg-slate-600 bg-opacity-50">
  <div className="lg:navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden justify-start">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-fit">
        <li>
          <ul className="p-2">
          <li><a><Link to="/extra" className="text-black">{t('headerExtraLinks', { appName: "App" })}</Link></a></li>
          <li><a><Link to="/accountant" className="text-black">{t('headerWhatAccountant', { appName: "App" })}</Link></a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div className="flex justify-end">
    <h3 className='flex lg:hidden gap-4 pr-4'>
      <button onClick={() => changeLanguage('et')}><img src="/flag_est.png" alt="EST Flag" /></button>
      <button onClick={() => changeLanguage('en')}><img src="/flag_uk.png" alt="UK Flag" /></button>
     </h3>
     </div>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <h3 className='flex gap-4 pr-4'>
      <button onClick={() => changeLanguage('et')}><img src="/flag_est.png" alt="EST Flag" /></button>
      <button onClick={() => changeLanguage('en')}><img src="/flag_uk.png" alt="UK Flag" /></button>
     </h3>
     <li>
        <details>
          <summary className="lg:flex hidden text-[#E3C10C] mr-4 text-2xl font-semibold">{t('Links', { appName: "App" })}</summary>
          <ul className="p-2">
          <li><a><Link to="/extra" className="text-black">{t('headerExtraLinks', { appName: "App" })}</Link></a></li>
          <li><a><Link to="/accountant" className="text-black">{t('headerWhatAccountant', { appName: "App" })}</Link></a></li>
          </ul>
        </details>
      </li>
        <a href="#visioon" className="lg:flex pt-2 hidden text-[#E3C10C] mr-7 text-2xl font-semibold">{t('headerVisioon', { appName: "App" })}</a>
        <a href="#hind" className="lg:flex pt-2 hidden text-[#E3C10C] mr-7 text-2xl font-semibold">{t('headerHind', { appName: "App" })}</a>
        <a href="#kontakt" className="lg:flex pt-2 hidden text-[#E3C10C] mr-5 text-2xl font-semibold">{t('headerKontakt', { appName: "App" })}</a>
    </ul>
  </div>
</header>
      <div className='flex flex-col justify-center'>
        <h1 className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.6)] dancing-script lg:pl-20 text-[#E3C10C] [font-size:_clamp(3em,5vw,20em)] px-3 leading-[45px] lg:leading-[90px]'>{t('headerTitle1', { appName: "App" })} <br /> {t('headerTitle2', { appName: "App" })}</h1>
        <h1 className='montserrat text-black lg:pl-20 text-lg pr-[45%] pl-3 pt-3'>“If you think it's expensive to hire a professional to do the job, wait until you hire an amateur.”</h1>
        <h1 className='montserrat text-black lg:pl-20 text-lg pr-[45%] pl-3 pt-3'>Red Adair</h1>
      </div>
    </div>
  );
}

export default Header;