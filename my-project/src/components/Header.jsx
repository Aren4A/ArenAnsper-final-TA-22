import React from 'react';
import '../App.css';
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import backgroundImage from '../assets/cropped_ananass.jpg';

function Header() {
  const { t, i18n: {changeLanguage, language} } = useTranslation();
 const [currentLanguage, setCurrentLanguage] = useState(language)
 const handleChangeLanguage = () => {
   const newLanguage = currentLanguage === "et" ? "en" : "et";
   setCurrentLanguage(newLanguage);
   changeLanguage(newLanguage);

   const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
 }
  return (
 <div className="bg-cover bg-center w-full" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <header className='flex justify-end p-5 lg:flex bg-slate-600 bg-opacity-50'>
      <h3 className='flex gap-4 pr-4'>
      <button onClick={() => changeLanguage('et')}><img src="/flag_est.png" alt="EST Flag" /></button>
      <button onClick={() => changeLanguage('en')}><img src="/flag_uk.png" alt="UK Flag" /></button>
     </h3>
        <Link to="/extra" className="lg:flex hidden text-[#E3C10C] mr-7 text-2xl font-semibold">{t('headerExtra', { appName: "App" })}</Link>
        <a href="#visioon" className="lg:flex hidden text-[#E3C10C] mr-7 text-2xl font-semibold">{t('headerVisioon', { appName: "App" })}</a>
        <a href="#hind" className="lg:flex hidden text-[#E3C10C] mr-7 text-2xl font-semibold">{t('headerHind', { appName: "App" })}</a>
        <a href="#kontakt" className="lg:flex hidden text-[#E3C10C] mr-5 text-2xl font-semibold">{t('headerKontakt', { appName: "App" })}</a>
      </header>
      <div className='flex flex-col justify-center'>
        <h1 className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.6)] dancing-script lg:pl-20 text-[#E3C10C] [font-size:_clamp(3em,5vw,20em)] px-3 leading-[45px] lg:leading-[90px]'>{t('headerTitle1', { appName: "App" })} <br /> {t('headerTitle2', { appName: "App" })}</h1>
        <h1 className='text-black lg:pl-20 text-lg pr-[45%] pl-3 pt-3'>“If you think it's expensive to hire a professional to do the job, wait until you hire an amateur.”</h1>
        <h1 className='text-black lg:pl-20 text-lg pr-[45%] pl-3 pt-3'>-Red Adair</h1>
      </div>
    </div>
  );
}

export default Header;