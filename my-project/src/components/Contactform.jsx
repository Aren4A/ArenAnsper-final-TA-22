import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { infoboxes } from "../utils/infoboxes";
import { services } from "../utils/services";
import { useHistory } from "react-router-dom";

function Contactform() {
    const [total, setTotal] = useState(0);
    const [selectedServices, setSelectedServices] = useState({});
    const [hourlyAccounting, setHourlyAccounting] = useState(false); // New state for the "Soovin tunnipõhist raamatupidamist" checkbox
    
    const [acheckedState, asetCheckedState] = useState(
      new Array(infoboxes.length).fill(false)
    );

    const [checkedState, setCheckedState] = useState(
      new Array(services.length).fill(false)
    );
    const history = useHistory();

  // Example function to navigate to a different route
  const handleClick = () => {
    // Navigate to a specific route
    history.push("/hind");
  };
    
  
  
    const ahandleOnChange = (position) => {
      const updatedCheckedState = acheckedState.map((item, index) =>
        index === position ? !item : item
      );
  
      asetCheckedState(updatedCheckedState);
    };


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
    

    const handleCheck = (isChecked, service) => {
        if (service.label === 'soovin tunnipõhist raamatupidamist') {
            setHourlyAccounting(isChecked);
            if (isChecked) {
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
        
        setSelectedServices(prevServices => ({
          ...prevServices,
          [service.label]: isChecked ? service.price : 0
        }));


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
        <section>
          <form ref={form} onSubmit={sendEmail}>
            <input type="hidden" name="total" value={total} />
            {Object.entries(services).map(([name, price], index) => (
                <input type="hidden" name={`service-${index}`} />
            ))}
            <div className="flex flex-col items-start lg:px-20 px-4 pt-8 pb-1.5  text-[#E6E5E0]">
            <div id="hind" className="text-lg lg:text-2xl text-blue-900 max-md:max-w-full">
            Mul on ühes kalendrikuus:
            </div>

              <div className="flex flex-col gap-5 justify-between mt-2 w-full max-w-[1107px]">

              <ul>

            {services.map(({ name}, index) => {
          return (
            <li key={index}>
              <div className="flex gap-4 py-2 sm:text-2xl text-sm text-blue-900">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={`service-${index}`}
                    className="checkbox checkbox-warning"
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                    disabled={hourlyAccounting}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                </div>
              </div>
            </li>
          );
        })}
            
              </ul>
              <div className="flex gap-1.5 my-auto text-2xl text-blue-900">
                  <div className="flex align-middle sm:text-2xl text-sm">
                  <input 
                        id="hourly-accounting-checkbox" 
                        name="hourly-accounting" 
                        type="checkbox" 
                        className="checkbox checkbox-warning mt-1.5"
                        onChange={(e) => handleCheck(e.target.checked, { label: 'soovin tunnipõhist raamatupidamist', price: 50 })}
                        disabled={checkedState.some(checked => checked)}                    />
                    <label for="hourly-accounting-checkbox" className="ms-3 flex-auto">Soovin tunnipõhist raamatupidamist</label>
                  </div>
                </div>

                
                <div className="flex gap-3.5">
                  <div className="flex justify-end">
                    <div className="bg-[#E3C10C] px-2 py-1 text-3xl text-black max-md:px-5 w-40 input max-w-xs">{total}</div>
                    </div>
                    <div className="flex justify-end w-20 grow my-auto sm:text-2xl text-sm  text-blue-900">
                        <p> {hourlyAccounting ? '€/tunnis' : '€/kuus'}</p>
                    </div>
                </div>
              </div>
              <div className="w-full max-w-[1107px]">
              <div className="flex justify-end pr-4 mr-15 self-end mt-3.5 text-base text-blue-900">
                *täpne hind kujuneb personaalse<br />kokkuleppe alusel
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
                <label className="form-label">Eesnimi</label>
                <input name="user_name" type="text" className="input input-bordered w-full lg:max-w-xs dark:bg-white" required />
                </div>
                <div className="flex flex-col mb-3">
                <label className="form-label">Perekonnanimi</label>
                <input name="last_name" type="text" className="input input-bordered w-full lg:max-w-xs dark:bg-white" required />
                </div>
                <div className="flex flex-col mb-3">
                <label className="form-label">Ettevõtte nimi</label>
                <input name="company_name" type="text" className="input input-bordered w-full lg:max-w-xs dark:bg-white" required />
                </div>

                <div className="flex flex-col mb-3">
                <label className="form-label">Email</label>
                <input name="user_email" type="email" className="input input-bordered w-full lg:max-w-xs dark:bg-white" required />
                </div>

                <div className="flex flex-col mb-3">
                <label className="form-label">Telefon</label>
                <input name="phone" type="tel" className="input input-bordered w-full lg:max-w-xs dark:bg-white" required />
                </div>
                </div>
                 <div className="flex flex-col gap-4">

      <ul className="flex flex-col gap-4">
        {infoboxes.map(({ name }, index) => {
          return (
            <li key={index}>
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={`custom-checkbox-${index}`}
                    value={name}
                    className="checkbox checkbox-warning"
                    checked={acheckedState[index]}
                    onChange={() => ahandleOnChange(index)}
                  />
                  <label htmlFor={`custom-checkbox-${index}`}> {name}</label>
                </div>
            </li>
          );
        })}
      </ul>


                    

                             
                <label className="form-label">Lisainfo</label>              
                <textarea name="message" className="textarea textarea-bordered w-full dark:bg-white" rows="8" required></textarea>
                </div>
                </div>
                </div>
                <div className="flex flex-col items-center pb-5">
                    <button onClick={handleClick} className="btn btn-warning bg-[#E3C10C] w-80">Saada päring</button>
                </div>
              </div>
            </div>
          </form>
        </section>
      );
}

export default Contactform;