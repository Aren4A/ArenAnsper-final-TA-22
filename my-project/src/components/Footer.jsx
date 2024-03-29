// components/Footer.jsx
import React from 'react';
import '../App.css';
import { useState } from "react";
import { useTranslation } from "react-i18next";

  

function Footer() {
  const { t, i18n: {changeLanguage, language} } = useTranslation();
 const [currentLanguage, setCurrentLanguage] = useState(language)
 const handleChangeLanguage = () => {
   const newLanguage = currentLanguage === "et" ? "en" : "et";
   setCurrentLanguage(newLanguage);
   changeLanguage(newLanguage);
 }
 {currentLanguage}
    return (
        <div class="flex justify-center items-center py-20 text-xl lg:text-3xl font-medium text-center text-[#012579] bg-[#E3C10C]" id='kontakt'>
  <div class="flex flex-col items-center w-full leading-[60px]">
    <img src="/LogoMakr.png"
      class="max-w-full aspect-[0.77] w-[138px]"
    />
    <div class="mt-5 whitespace-nowrap">Kamur Finance OÜ</div>
    <div>{t('RCode', { appName: "App" })}: 16337204</div>
    <div>kamurmp@gmail.com</div>
    <div>+372 5330 3813</div>
    <div class="mt-5 text-base whitespace-nowrap">
    {t('Rights', { appName: "App" })}
    </div>
  </div>
</div>

    );
}

export default Footer;