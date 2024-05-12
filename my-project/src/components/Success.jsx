import React from 'react';
import '../App.css';
import { useTranslation } from "react-i18next";
import { useState } from "react";

function Extra() {
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
 <div className="bg-cover bg-center w-full" >
      <header className='flex justify-between p-5 lg:flex bg-slate-600 bg-opacity-50'>
      <div>
      <a href="/" className="lg:flex hidden text-[#E3C10C] mr-7 text-2xl font-semibold">{t('headerHome', { appName: "App" })}</a>
      </div>
      <div className="flex justify-end gap-4">
      <button onClick={() => changeLanguage('et')}><img src="/flag_est.png" alt="EST Flag" /></button>
      <button onClick={() => changeLanguage('en')}><img src="/flag_uk.png" alt="UK Flag" /></button>
      </div>
      </header>
      <div className='flex flex-col justify-center'>
        <h1 className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.6)] dancing-script lg:pl-20 text-[#E3C10C] [font-size:_clamp(3em,5vw,20em)] px-3 leading-[45px] lg:leading-[90px]'>
        {t('messageSentSuccessfully', { appName: "App" })}</h1>
      </div>
    </div>
  );
}

export default Extra;
