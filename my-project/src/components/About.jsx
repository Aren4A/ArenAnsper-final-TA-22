import React from 'react';
import '../App.css';
import { useState } from "react";
import { useTranslation } from "react-i18next";

function About() {
  const { t, i18n: {changeLanguage, language} } = useTranslation();
 const [currentLanguage, setCurrentLanguage] = useState(language)
 const handleChangeLanguage = () => {
   const newLanguage = currentLanguage === "et" ? "en" : "et";
   setCurrentLanguage(newLanguage);
   changeLanguage(newLanguage);
 }
 {currentLanguage}
  return (
    <section id="visioon">
      <div class="flex flex-col lg:px-20 px-4 text-xl lg:text-3xl text-justify text-[#012579] bg-[#E3C10C]">
        <div class="flex flex-col gap-5 justify-between my-9">
          <img src="/syda1.png" class="self-start aspect-[1.03] w-[55px] lg:w-[80px] w-20" />  
          <div class="px-2 text-center flex-auto self-end lg:my-10 italic leading-[35px] lg:leading-[45px]">
            {t('Visioon', { appName: "App" })}
          </div>
          <img src="/syda2.png" class="self-end aspect-[1.03] w-[55px] lg:w-[80px] w-20" />
        </div>
      </div>
    </section>
  );
}

export default About;