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
      <div className="flex flex-col gap-2 p-8">

        <div className="flex h-fit border-2 rounded-xl border-black bg-[#E3C10C] text-[#012579]">
  <div className="flex flex-col px-2 pb-4 text-xl">
  <h2 className="font-medium py-2">1. Millal hakata Eesti maksuresidendiks?</h2>
  <a className="text-sm lg:text-lg" href="https://www.emta.ee/ariklient/registreerimine-ettevotlus/mitteresidendile-e-residendile/residentsuse-maaramine" >https://www.emta.ee/ariklient/registreerimine-ettevotlus/mitteresidendile-e-residendile/residentsuse-maaramine</a>
  </div>
</div>

<div className="flex h-fit border-2 rounded-xl border-black bg-[#E3C10C] text-[#012579]">
  <div className="flex flex-col px-2 pb-4 text-xl">
  <h2 className="font-medium py-2">2. Lahkumisavaldus palgatööl</h2>
  <a className="text-sm lg:text-lg" href="https://lahkumisavaldus.ee/" >https://lahkumisavaldus.ee/</a>
  </div>
</div>

<div className="flex h-fit border-2 rounded-xl border-black bg-[#E3C10C] text-[#012579]">
  <div className="flex flex-col px-2 pb-4 text-xl">
  <h2 className="font-medium py-2">3. RTJ</h2>
<a className="text-sm lg:text-lg" href="https://www.fin.ee/finantspoliitika-valissuhted/arvestusvaldkond/raamatupidamise-toimkond" >https://www.fin.ee/finantspoliitika-valissuhted/arvestusvaldkond/raamatupidamise-toimkond</a>
  </div>
</div>
</div>
    </div>
  );
}

export default Extra;
