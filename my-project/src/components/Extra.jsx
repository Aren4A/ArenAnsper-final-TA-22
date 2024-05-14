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
      <a href="/" className="lg:flex text-[#E3C10C] mr-7 text-2xl font-semibold">{t('headerHome', { appName: "App" })}</a>
      </div>
      <div className="flex justify-end gap-4">
      <button onClick={() => changeLanguage('et')}><img src="/flag_est.png" alt="EST Flag" /></button>
      <button onClick={() => changeLanguage('en')}><img src="/flag_uk.png" alt="UK Flag" /></button>
      </div>
      </header>
      <div className="flex flex-col gap-2 p-6">

        <div className="flex h-fit border-2 rounded-xl border-black bg-[#E3C10C] text-[#012579]">
  <div className="flex flex-col px-2 text-xl">
  <a className="font-medium py-2" href={t('WhyBecomeATaxResidentLink', { appName: "App" })}>{t('WhyBecomeATaxResident', { appName: "App" })}</a>
  </div>
</div>

<div className="flex h-fit border-2 rounded-xl border-black bg-[#E3C10C] text-[#012579]">
  <div className="flex flex-col px-2 text-xl">
  <a className="font-medium py-2" href={t('LetterOfResignationLink', { appName: "App" })}>{t('LetterOfResignation', { appName: "App" })}</a>
  </div>
</div>

<div className="flex h-fit border-2 rounded-xl border-black bg-[#E3C10C] text-[#012579]">
  <div className="flex flex-col px-2 text-xl">
  <a className="font-medium py-2" href="https://www.fin.ee/finantspoliitika-valissuhted/arvestusvaldkond/raamatupidamise-toimkond">3. RTJ</a>
  </div>
</div>
</div>
    </div>
  );
}

export default Extra;
