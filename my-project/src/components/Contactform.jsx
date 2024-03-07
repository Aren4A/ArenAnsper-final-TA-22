import React, { useState } from 'react';

function Contactform() {
    const [total, setTotal] = useState(0);
    const [selectedServices, setSelectedServices] = useState({});
    const services = [
        { label: 'Palgaarvestus 1 töötaja', price: 10 },
        { label: 'Palgaarvestus 2-10 töötajat', price: 20 },
        { label: 'Ostuarved kuni 10tk/kuus (EE)', price: 20 },
        { label: 'Ostuarved 10-50 tk kuus (EE)', price: 20 },
        { label: 'Müügiarved 1 -  5 tk/kuus', price: 20 },
        { label: 'Müügiarved 6 - 15 tk', price: 20 },
        { label: 'Käibedeklaratsiooni esitamine', price: 20 },
        { label: 'TSD esitamine', price: 20 },
        { label: 'Majandusaasta ülevaatus koos aruande esitamisega RIK-ile (mikroettevōte)', price: 20 },
        { label: 'Majandusaasta aruande esitamine RIK-ile', price: 20 },
        { label: 'Ostuarved EU, USA, GBP kuni 5 tk', price: 20 },
        { label: 'Dividendide deklareerimine', price: 20 },
        { label: 'Üksikute kannetega abistamine (sōiduauto kompensatsioon, osakapitali sissemaksmine jne)', price: 20 },
    ];

    const handleCheck = (isChecked, service) => {
        setTotal(isChecked ? total + service.price : total - service.price);
        setSelectedServices(prevServices => ({
          ...prevServices,
          [service.label]: isChecked ? service.price : 0
        }));
      };

      return (
        <section id="hind">
          <form action="https://formsubmit.co/f37873ecf8c93f56f795cc5e4ed75d0a" method="POST">
            <input type="hidden" name="total" value={total} />
            {Object.entries(selectedServices).map(([service, price], index) => (
                <input key={index} type="hidden" name={`service-${index}`} value={`${service}: ${price}`} />
            ))}
            <div class="flex flex-col items-start lg:px-20 px-4 pt-8 pb-1.5  text-[#E6E5E0]">
            <div class="text-lg lg:text-4xl text-blue-900 max-md:max-w-full">
            Mul on ühes kalendrikuus:
            </div>
              {services.map((service, index) => (
                <div class="flex gap-4 mt-4 sm:text-4xl text-sm text-blue-900">
                  <div>
                    <div className="flex">
                      <label className="cursor-pointer label gap-4">
                      <input 
                        type="checkbox" 
                        id={`checkbox-${index}`} 
                        name={`service-${index}`} 
                        onChange={(e) => handleCheck(e.target.checked, service)} 
                        className="checkbox checkbox-warning" 
                        />
                        <span className="">{service.label}</span>
                      </label>
                    </div>
                  </div>
                </div>
              ))}
              <div class="flex gap-5 justify-between mt-14 w-full max-w-[1107px]">
                <div class="flex gap-1.5 my-auto text-2xl text-blue-900">
                  <div class="flex align-middle sm:text-4xl text-sm">
                  <input 
                    id="hourly-accounting-checkbox" 
                    name="hourly-accounting" 
                    type="checkbox" 
                    className="checkbox checkbox-warning mt-1.5"
                    onChange={(e) => handleCheck(e.target.checked, { label: 'Hourly accounting', price: 50 })}
                    />
                    <label for="hourly-accounting-checkbox" class="ms-3 flex-auto">soovin tunnipõhist raamatupidamist</label>
                  </div>
                </div>
                <div class="flex gap-3.5">
                  <div class="grow justify-center px-8 py-4 text-4xl text-black bg-white border border-black border-solid max-md:px-5">{total}</div>
                  <div class="grow my-auto sm:text-4xl text-sm  text-blue-900">€/kuus</div>
                </div>
              </div>
              <div class=" flex justify-end mr-3 self-end mt-3.5 text-base text-blue-900">
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
                <input name="first_name" type="text" className="input input-bordered w-full lg:max-w-xs dark:bg-white" required />
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
                <input name="email" type="email" className="input input-bordered w-full lg:max-w-xs dark:bg-white" required />
                </div>

                <div class="flex flex-col mb-3">
                <label class="form-label">Telefon</label>
                <input name="phone" type="tel" className="input input-bordered w-full lg:max-w-xs dark:bg-white" required />
                </div>
                </div>
                <div class="flex flex-col">
                  
                  <div class="flex lg:flex-row flex-col gap-4">
  <div className="form-control">
              
  <label className="flex gap-2">
    <input type="checkbox" className="checkbox" />
    <span className="label-text">Olen käibemaksukohustuslane</span> 
  </label>
</div>

<div className="form-control">
<label className="flex gap-2">
    <input type="checkbox" className="checkbox" />
    <span className="label-text">Olen alustav mikroettevõte ja vajan abi raamatupidamise sisseseadmisel</span> 
  </label>
</div>

<div className="form-control">
<label className="flex gap-2">
    <input type="checkbox" className="checkbox" />
    <span className="label-text">Olen tegutsev väikeettevõte</span> 
  </label>
</div>
</div>

                <div class="flex flex-col mb-3">              
                <label class="form-label">Lisainfo</label>              
                <textarea name="message" className="textarea textarea-bordered w-full dark:bg-white" rows="10" required></textarea>
                </div>
                </div>
                
                </div>
                </div>
                <div class="flex flex-col items-center pb-5">
                    <button className="btn btn-warning bg-[#E3C10C] w-80">Saada päring</button>
                </div>
              </div>
            </div>
            <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />
            <input type="hidden" name="_captcha" value="false" />
          </form>
        </section>
      );
}

export default Contactform;

