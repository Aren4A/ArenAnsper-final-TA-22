import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { infoboxes } from "../utils/infoboxes";
import { services } from "../utils/services";
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";


function Contactform() {
//react-i18next
const { t, i18n: {changeLanguage, language} } = useTranslation();
const [currentLanguage, setCurrentLanguage] = useState(language)
const handleChangeLanguage = () => {
   const newLanguage = currentLanguage === "et" ? "en" : "et";
   setCurrentLanguage(newLanguage);
   changeLanguage(newLanguage);
 }
 {currentLanguage}
//Kokku algseis
const [total, setTotal] = useState(0);
//Valitud teenused
const [selectedServices, setSelectedServices] = useState({});
//Tunnipõhine raamatupidamine
const [hourlyAccounting, setHourlyAccounting] = useState(false);
//Info väärtused infoboxes.js-st
const [infocheckedState, infoSetCheckedState] = useState(
      new Array(infoboxes.length).fill(false)
    );
//Teenuste väärtused services.js-st
const [checkedState, setCheckedState] = useState(
      new Array(services.length).fill(false)
);
//Info märkeruutude haldamine
const infoHandleOnChange = (position) => {
      const updatedCheckedState = infocheckedState.map((item, index) =>
        index === position ? !item : item
      );
      infoSetCheckedState(updatedCheckedState);
    };
//Teenuste märkeruutude haldamine    
const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
      setCheckedState(updatedCheckedState);   
    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + services[index].price;
        }
        return sum;
      },
      0
    );
    setTotal(totalPrice);
  };
//Tunnipõhise hinna loogika
const handleCheck = (isChecked, service) => {
        if (service.label === 'soovin tunnipõhist raamatupidamist') {
            setHourlyAccounting(isChecked);
            if (isChecked) {
                // Määra tunnipõhise hind
                setTotal(50);
            } else {
                // Määra summa 0
                setTotal(0);
            }
        }
    };
//Kontaktvorm
const form = useRef();
const sendEmail = (e) => {
    e.preventDefault();
    const apiService = import.meta.env.VITE_SERVICE_ID;
    const apiTemplate = import.meta.env.VITE_TEMPLATE_ID;
    const apiPublic = import.meta.env.VITE_PUBLIC_KEY;
    
    emailjs
      .sendForm(`${apiService}`, `${apiTemplate}`, form.current, {
        publicKey: `${apiPublic}`,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          window.location.href = "/success";
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      
  };
    //
      return (
        <section>
          <form ref={form} onSubmit={sendEmail}>
            <input type="hidden" name="total" value={total} />
            {Object.entries(services).map(([name, price], index) => (
                <input type="hidden" name={`service-${index}`} />
            ))}
            <div className="flex flex-col items-start lg:px-20 px-4 pt-20 pb-1.5 text-[#E6E5E0]">
            <div id="hind" className="text-lg lg:text-2xl text-blue-900 max-md:max-w-full font-bold">
            {t('AccountingTitle', { appName: "App" })}
            </div>

              <div className="flex flex-col pl-1 lg:pl-0 justify-between mt-2 w-full max-w-[1107px]">

              <div className="flex gap-1.5 my-auto text-2xl text-blue-900">
                  <div className="flex gap-4 items-center lg:text-2xl text-xl">
                  <input 
                        id="hourly-accounting-checkbox" 
                        name="hourly-accounting" 
                        type="checkbox" 
                        className="bg-base-100 checkbox checkbox-warning mt-1.5"
                        onChange={(e) => handleCheck(e.target.checked, { label: 'soovin tunnipõhist raamatupidamist', price: 50 })}
                        disabled={checkedState.some(checked => checked)}                    />
                    <label for="hourly-accounting-checkbox">{t('HourlyAccounting', { appName: "App" })}</label>
                  </div>
                </div>

      <div className="pt-2 text-lg lg:text-2xl text-blue-900 max-md:max-w-full font-bold">
        {t('OR', { appName: "App" })}
        </div>
              
              <ul>
            {services.map(({ name }, index) => {
          return (
            <li key={index}>
              <div className="flex gap-4 py-2 lg:text-2xl text-xl text-blue-900 lg:w-[700px]">
                <div className="flex items-center gap-4">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={`service-${index}`}
                    className="bg-base-100 checkbox checkbox-warning"
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                    disabled={hourlyAccounting 
                      || (index === 0 && checkedState[1]) || (index === 1 && checkedState[0])
                      || (index === 2 && checkedState[3]) || (index === 3 && checkedState[2])
                      || (index === 4 && checkedState[5]) || (index === 5 && checkedState[4])
                    }
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{t(name, { appName: "App" })}</label>
                </div>
              </div>
            </li>
          );
        })}
            
              </ul>
              

                
                <div className="flex gap-2 sticky lg:bottom-2">
                  <div className="flex justify-end">
                    <div className="bg-[#E3C10C] px-2 py-1 text-3xl text-black max-md:px-5 w-40 input max-w-xs">{total}</div>
                    </div>
                    <div className="flex w-20 grow my-auto text-2xl text-blue-900">
                        <div> {hourlyAccounting ? t('InHour') : t('InMonth')}</div>
                    </div>
                </div>
                
              </div>
              <div className="w-full max-w-[1235px]">
              <div className="flex justify-end pr-2 mr-15 self-end mt-2 text-base text-blue-900">
              {t('PrecisePrice1', { appName: "App" })}<br />{t('PrecisePrice2', { appName: "App" })}<br />
              {t('EiOleKaibekas', { appName: "App" })}
              </div>
              </div>
            </div>
            <div className="text-black flex flex-row">
              <div className="flex flex-col">
                <div className="flex flex-col mb-3">
                </div>

                <div className="flex flex-col lg:px-20 px-4 py-12">
                  <div className="flex flex-col lg:flex-row">
                <div className="flex flex-col">
                <div className="flex flex-col mb-3">
                <label className="form-label">{t('FirstName', { appName: "App" })}</label>
                <input name="user_name" type="text" className="input input-bordered w-full lg:max-w-xs dark:bg-white" required onInvalid={e => e.target.setCustomValidity("Kohustuslik väli!")}
    onInput={e => e.target.setCustomValidity("")}/>
                </div>
                <div className="flex flex-col mb-3">
                <label className="form-label">{t('LastName', { appName: "App" })}</label>
                <input name="last_name" type="text" className="input input-bordered w-full lg:max-w-xs dark:bg-white" required onInvalid={e => e.target.setCustomValidity("Kohustuslik väli!")}
    onInput={e => e.target.setCustomValidity("")}/>
                </div>
                <div className="flex flex-col mb-3">
                <label className="form-label">{t('Company', { appName: "App" })}</label>
                <input name="company_name" type="text" className="input input-bordered w-full lg:max-w-xs dark:bg-white" required onInvalid={e => e.target.setCustomValidity("Kohustuslik väli!")}
    onInput={e => e.target.setCustomValidity("")}/>
                </div>

                <div className="flex flex-col mb-3">
                <label className="form-label">{t('Email', { appName: "App" })}</label>
                <input name="user_email" type="email" className="input input-bordered w-full lg:max-w-xs dark:bg-white" required onInvalid={e => e.target.setCustomValidity("Kohustuslik väli!")}
    onInput={e => e.target.setCustomValidity("")}/>
                </div>

                <div className="flex flex-col mb-3">
                <label className="form-label">{t('Phone', { appName: "App" })}</label>
                <input name="phone" type="number" className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none input input-bordered w-full lg:max-w-xs dark:bg-white" required onInvalid={e => e.target.setCustomValidity("Kohustuslik väli!")}
    onInput={e => e.target.setCustomValidity("")}/>
                </div>
                </div>
                 <div className="flex flex-col gap-4">

      <ul className="flex flex-col gap-4">
        {infoboxes.map(({ name, link }, index) => {
          return (
            <li key={index}>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={`custom-checkbox-${index}`}
                    value={name}
                    className="checkbox checkbox-warning"
                    checked={infocheckedState[index]}
                    onChange={() => infoHandleOnChange(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}><a href={t(link, { appName: "App" })} className="hover:text-blue-500 hover:underline">{t(name, { appName: "App" })}</a></label>
                </div>
            </li>
          );
        })}
      </ul>

     
                             
                <label className="form-label">{t('ExtraInfo', { appName: "App" })}</label>              
                <textarea name="message" className="textarea textarea-bordered w-full dark:bg-white" rows="8" required onInvalid={e => e.target.setCustomValidity("Kohustuslik väli!")}
    onInput={e => e.target.setCustomValidity("")}></textarea>
                </div>
                </div>
                </div>
                <div className="flex flex-col items-center pb-5">
                  <button className="text-xl lg:text-2xl btn btn-warning bg-[#E3C10C] w-[300px] lg:w-[350px]">{t('Submit', { appName: "App" })}</button>
                </div>
              </div>
            </div>
          </form>
        </section>
      );
}

export default Contactform;