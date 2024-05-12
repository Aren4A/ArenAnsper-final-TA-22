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
      <div className='flex flex-col'>
        <h1 className='flex p-4 text-sm text-[#012579] px-4'>
        Epp Adler on tabavalt kirjutanud raamatupidajate olemusest artiklis “Suhtlev raamatupidaja – fantaasia või võimalikkus?” (Raamatupidamise praktik, mai 2024)
        </h1>
<div className="flex flex-col gap-2">
        <div className="border-2 rounded-xl border-black bg-green-200 text-[#012579]">
  <div className="flex flex-col p-4 text-xl">
  <h2 className="font-medium pb-2">Pedagoogi tüüpi raamatupidajad</h2>
  <p className="text-base lg:text-lg">Nad on targad ja enesekindlad ehk sellised, keda ma tegelikult vajan…Nad kipuvad pead vangutama, imestavad, kui sa midagi elementaarset ei tea ja annavad selgelt teada, kuidas ei tehta. Pärast nendega kohtumist on tunne, et kukkusid justkui eksamil läbi ning oled veel viletsam, kui sa alguses arvasid. Nende kohtumiste tagajärjel on veel suurem hirm raamatupidamise ees ning probleemid ei lahene. Raamatupidaja tarkus, oskus ja kogemus rakendus abisaamise asemel hoopis hirmu kasvatamisse. Sellist raamatupidajat on lihtne asendada, sest temata on lihtsalt toredam.</p>
  </div>
</div>

<div className="border-2 rounded-xl border-black bg-green-200 text-[#012579]">
  <div className="flex flex-col p-4 text-xl">
  <h2 className="font-medium pb-2">Hiirekese tüüp raamatupidajad</h2>
  <p className="text-base lg:text-lg">Nemad on usinad, korralikud, usaldusväärsed, tagasihoidlikud ja tegelikult meeldivad inimesed, aga… Nendega ei saa üldse suhelda, sest nad arvavad, et nemad on eksamil kontrollitavad. Nende fookus on kartmisel, ebakindlusel ja enesekriitikal. Nendega ei saa sisuliselt suhelda. Nad vastavad vahel küsimustele, kui julgevad. Oma mõtteid ei väljenda nad kunagi, ükskõik kui targad nad ka poleks. Nemad tahavad peitu pugeda ja iseseisvalt edasi nokitseda. Nendega suheldes on oht, et nende hirm suureneb ja mina saan nendega veel vähem suhelda. Tulemuseks on aga taas probleemid, sest üllataval kombel teevad nad minu raha suhtes üsna julgelt otsuseid. Mingil põhjusel on nad valmis oma eelduste põhjal makse deklareerima, selle asemel, et küsida üle või anda nõu, kuidas teisiti teha. See eeldaks ju suhtlemist, mida nemad ei tee. Nad mõtlevad oma turvalises urus ise. Alati mitte minu kasuks. Ka nemad on asendatavad, sest vaatamata tarkusele ja usinusele, kaob usaldus.</p>
  </div>
</div>

<div className="border-2 rounded-xl border-black bg-green-200 text-[#012579]">
  <div className="flex flex-col p-4 text-xl">
  <h2 className="font-medium pb-2">Vana aja tüüpi raamatupidajad</h2>
  <p className="text-base lg:text-lg">Nemad hoolitsevad selle eest, et asjad ei muutuks. Kliendid peavad kohanema nende töövõtetega. Nad on uhked, et ei käi ajaga kaasas, ei tunne ega kasuta uusi võimalusi. Nad räägivad rõõmuga ja pikalt, kuidas vanasti oli. Nemad on eriti lihtsalt asendatavad. Piisab, et sa lihtsalt ei vii enam talle koju füüsiliselt tšekke. Tema sulle järele ei tule, sest asjad lihtsalt nii ei käi. Tema ootab sinu kingakarpi enda hoovis. Ja jääbki ootama. Küll ta leiab kellegi teise, kellega vanast ajast edasi rääkida.</p>
  </div>
</div>
<h1 className='flex p-4 text-sm text-[#012579] px-4'>
Kui Sind kõnetab keegi, kes oleks seal kuskil vahepeal, siis kirjuta kamurmp@gmail.com. 
        </h1>
</div>
      </div>
    </div>
  );
}

export default Extra;
