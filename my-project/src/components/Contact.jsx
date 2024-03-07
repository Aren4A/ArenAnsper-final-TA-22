// components/Contact.jsx
import React from 'react';

function Contact() {
  return (
    <section id="contact">
    
    

    <form action="https://formsubmit.co/ametikoolitest@gmail.com" method="POST">
      
  <div class="text-black flex flex-row px-20 py-12">
    <div class="flex flex-col">
            <div class="flex flex-col mb-3">
              <label class="form-label">Eesnimi</label>
              <input name="first_name" type="text" class="form-control lg:w-80 rounded-xl" required />
            </div>

            <div class="flex flex-col mb-3">
              <label class="form-label">Perekonnanimi</label>
              <input name="last_name" type="text" class="form-control lg:w-80 rounded-xl" required />
            </div>

            <div class="flex flex-col mb-3">
              <label class="form-label">Ettevõtte nimi</label>
              <input name="company_name" type="text" class="form-control lg:w-80 rounded-xl" required />
            </div>

            <div class="flex flex-col mb-3">
              <label class="form-label">Email</label>
              <input name="email" type="email" class="form-control lg:w-80 rounded-xl" required />
            </div>

            <div class="flex flex-col mb-3">
              <label class="form-label">Telefon</label>
              <input name="phone" type="tel" class="form-control lg:w-80 rounded-xl" />
            </div>

            <div class="flex flex-col mb-3 w-1/2">
              <label class="form-label">Lisainfo</label>
              <textarea
                name="message"
                class="form-control w-full rounded-xl"
                rows="10"
                required
              ></textarea>
            </div>
            
  </div>
  <div class="flex flex-col">

<button className="btn btn-warning bg-[#E3C10C]">Saada päring</button>
</div>

  </div>
    </form>
    
    </section>
  );
}

export default Contact;