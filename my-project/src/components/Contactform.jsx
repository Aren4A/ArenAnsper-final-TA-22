import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

function Contactform() {
    const [total, setTotal] = useState(0);
    const [selectedServices, setSelectedServices] = useState({});
    const [group1, setGroup1] = useState([false, false]);
    const [group2, setGroup2] = useState([false, false]);
    const [group3, setGroup3] = useState([false, false]);
    const [lastChecked, setLastChecked] = useState({ 1: null, 2: null, 3: null });
    const [hourlyAccounting, setHourlyAccounting] = useState(false); // New state for the "Soovin tunnipõhist raamatupidamist" checkbox
    const services = [
        // Group 1
        { label: 'Palgaarvestus 1 töötaja', price: 30, group: 1, index: 0 },
        { label: 'Palgaarvestus 2-10 töötajat', price: 55, group: 1, index: 1 },
        // Group 2
        { label: 'Ostuarved kuni 10tk/kuus (EE)', price: 25, group: 2, index: 0 },
        { label: 'Ostuarved 10-50 tk kuus (EE)', price: 50, group: 2, index: 1 },
        // Group 3
        { label: 'Müügiarved 1 -  5 tk/kuus', price: 25, group: 3, index: 0 },
        { label: 'Müügiarved 6 - 15 tk', price: 40, group: 3, index: 1 },
        // Other checkboxes
        { label: 'Käibedeklaratsiooni esitamine', price: 25, },
        { label: 'TSD esitamine', price: 25, },
        { label: 'Majandusaasta ülevaatus koos aruande esitamisega RIK-ile (mikroettevōte)', price: 200 },
        { label: 'Majandusaasta aruande esitamine RIK-ile', price: 100 },
        { label: 'Ostuarved EU, USA, GBP kuni 5 tk', price: 30 },
        { label: 'Dividendide deklareerimine', price: 30 },
        { label: 'Üksikute kannetega abistamine (sōiduauto kompensatsioon, osakapitali sissemaksmine jne)', price: 25 },
    ];
    const [otherChecked, setOtherChecked] = useState(false);
    const handleCheck = (isChecked, service) => {
        if (service.label === 'soovin tunnipõhist raamatupidamist') {
            setHourlyAccounting(isChecked);
            if (isChecked) {
                // Uncheck all other checkboxes
                setGroup1(group1.map(() => false));
                setGroup2(group2.map(() => false));
                setGroup3(group3.map(() => false));
                // Reset selectedServices to only include 'soovin tunnipõhist raamatupidamist'
                setSelectedServices({ 'soovin tunnipõhist raamatupidamist': 50 });
                // Reset total to the price of 'soovin tunnipõhist raamatupidamist'
                setTotal(50);
            } else {
                // Remove 'soovin tunnipõhist raamatupidamist' from selectedServices
                setSelectedServices({});
                // Reset total to 0
                setTotal(0);
            }
        } else {
        let newTotal = total;
        // Subtract the price of the last checked service in the same group only if a new service in the same group is being checked
        if (isChecked && service.group && lastChecked[service.group]) {
            newTotal -= lastChecked[service.group].price;
        }
        // Add the price of the newly checked service or subtract the price of the unchecked service
        if (isChecked) {
            newTotal += service.price;
        } else {
            newTotal -= service.price;
        }
        setTotal(newTotal);
        setSelectedServices(prevServices => ({
          ...prevServices,
          [service.label]: isChecked ? service.price : 0
        }));

            // Handle group state and update the last checked service
            if (service.group) {
                if (service.group === 1) {
                    setGroup1(group1.map((value, index) => index === service.index ? isChecked : false));
                } else if (service.group === 2) {
                    setGroup2(group2.map((value, index) => index === service.index ? isChecked : false));
                } else if (service.group === 3) {
                    setGroup3(group3.map((value, index) => index === service.index ? isChecked : false));
                }

                setLastChecked(prevLastChecked => ({
                  ...prevLastChecked,
                  [service.group]: isChecked ? service : null
                }));
            }
        }
    };
    //
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_p5mxn2a', 'contact_form', form.current, {
        publicKey: 'NuE1gTFl8K5yX9qCN',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
    //
      return (
        <section id="hind">
          <form ref={form} onSubmit={sendEmail}>
            <input type="hidden" name="total" value={total} />
            {Object.entries(selectedServices).map(([service, price], index) => (
                <input key={index} type="hidden" name={`service-${index}`} value={`${service}: ${price}`} />
            ))}
            <div class="flex flex-col items-start lg:px-20 px-4 pt-8 pb-1.5  text-[#E6E5E0]">
            <div class="text-lg lg:text-2xl text-blue-900 max-md:max-w-full">
            Mul on ühes kalendrikuus:
            </div>
                {services.map((service, index) => (
                <div class="flex gap-4 sm:text-2xl text-sm text-blue-900">
                <div>
                    <div className="flex">
                    <label className="cursor-pointer label gap-4">
                    <input 
                        type="checkbox" 
                        id={`checkbox-${index}`} 
                        name={`service-${index}`} 
                        onChange={(e) => handleCheck(e.target.checked, service)} 
                        className="checkbox checkbox-warning" 
                        checked={service.group === 1 ? group1[service.index] : service.group === 2 ? group2[service.index] : group3[service.index]} // Set the checked property based on the group state
                        />
                        <span className="">{service.label}</span>
                    </label>
                    </div>
                </div>
                </div>
            ))}
              <div class="flex gap-5 justify-between mt-2 w-full max-w-[1107px]">
                <div class="flex gap-1.5 my-auto text-2xl text-blue-900">
                  <div class="flex align-middle sm:text-2xl text-sm">
                  <input 
                        id="hourly-accounting-checkbox" 
                        name="hourly-accounting" 
                        type="checkbox" 
                        className="checkbox checkbox-warning mt-1.5"
                        onChange={(e) => handleCheck(e.target.checked, { label: 'soovin tunnipõhist raamatupidamist', price: 50 })}
                        disabled={group1.some(checked => checked) || group2.some(checked => checked) || group3.some(checked => checked) || otherChecked}                    />
                    <label for="hourly-accounting-checkbox" class="ms-3 flex-auto">Soovin tunnipõhist raamatupidamist</label>
                  </div>
                </div>
                <div class="flex gap-3.5">
                    <div class="grow justify-center px-7 py-3 text-2xl text-black bg-white border border-black border-solid max-md:px-5">{total}</div>
                    <div class="grow my-auto sm:text-2xl text-sm  text-blue-900">
                        <p> {hourlyAccounting ? '€/tunnis' : '€/kuus'}</p>
                    </div>
                </div>
              </div>
              <div class=" flex justify-end mr-15 self-end mt-3.5 text-base text-blue-900">
                *täpne hind kujuneb personaalse kokkuleppe alusel
              </div>
            </div>
            <div class="text-black flex flex-row">
              <div class="flex flex-col">
                <div class="flex flex-col mb-3">
                </div>

                <div class="flex flex-col lg:px-20 px-4 py-12">
                  <div class="flex flex-col lg:flex-row">
                <div class="flex flex-col">
                <div class="flex flex-col mb-3">
                <label class="form-label">Eesnimi</label>
                <input name="user_name" type="text" className="input input-bordered w-full lg:max-w-xs dark:bg-white" required />
                </div>
                <div class="flex flex-col mb-3">
                <label class="form-label">Perekonnanimi</label>
                <input name="last_name" type="text" className="input input-bordered w-full lg:max-w-xs dark:bg-white" required />
                </div>
                <div class="flex flex-col mb-3">
                <label class="form-label">Ettevõtte nimi</label>
                <input name="company_name" type="text" className="input input-bordered w-full lg:max-w-xs dark:bg-white" required />
                </div>

                <div class="flex flex-col mb-3">
                <label class="form-label">Email</label>
                <input name="user_email" type="email" className="input input-bordered w-full lg:max-w-xs dark:bg-white" required />
                </div>

                <div class="flex flex-col mb-3">
                <label class="form-label">Telefon</label>
                <input name="phone" type="tel" className="input input-bordered w-full lg:max-w-xs dark:bg-white" required />
                </div>
                </div>
                 <div class="flex flex-col gap-4">
                    <div className="form-control">
                                
                    <label className="flex gap-2">
                        <input name="kaibemaksukohustuslane" type="checkbox" className=" checkbox checkbox-warning" />
                        <span className="label-text text-black ">Olen käibemaksukohustuslane</span> 
                    </label>
                    </div>

                    <div className="form-control">
                    <label className="flex gap-2">
                        <input name="abivajadus" type="checkbox" className=" checkbox checkbox-warning" />
                        <span className="label-text text-black">Olen alustav mikroettevõte ja vajan abi raamatupidamise sisseseadmisel</span> 
                    </label>
                    </div>

                    <div className="form-control">
                    <label className="flex gap-2">
                        <input name="vaikeettevõte" type="checkbox" className=" checkbox checkbox-warning" />
                        <span className="label-text text-black">Olen tegutsev väikeettevõte</span> 
                    </label>
                    </div>
                    

                             
                <label class="form-label">Lisainfo</label>              
                <textarea name="message" className="textarea textarea-bordered w-full dark:bg-white" rows="8" required></textarea>
                </div>
                </div>
                </div>
                <div class="flex flex-col items-center pb-5">
                    <button className="btn btn-warning bg-[#E3C10C] w-80">Saada päring</button>
                </div>
              </div>
            </div>
          </form>
        </section>
      );
}

export default Contactform;