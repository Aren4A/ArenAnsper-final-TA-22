// components/About.jsx
import React from 'react';

function About() {
  return (
    <section id="visioon">
      <div class="flex flex-col lg:px-20 px-4 py-12 text-3xl text-justify text-[#012579] bg-[#E3C10C]">
        <div class="flex flex-col lg:flex-row-reverse gap-5 justify-between mt-9">
          <img src="/syda1.png" class="self-start aspect-[1.03] lg:w-[50px] w-20" />  
          <div class="flex-auto self-end mt-10 italic">
            Kamur Finance OÜ pooldab paberivaba raamatupidamist - eelkõige
            teeb see aruandluse kajastamise mugavamaks, kiiremaks ja
            ajakohasemaks. Meie eesmärk on julgustada alustavate
            mikroettevõtete ideede elluviimist nii, et loomingulised ideed ei
            jääks ellu viimata tüütu raamatupidamise kohustuse pärast, millege
            ise ei jõua või ei soovi esmajärjekorras tegeleda.
          </div>
          <img src="/syda2.png" class="self-start aspect-[1.03] lg:w-[50px] w-20" />
        </div>
      </div>
    </section>
  );
}

export default About;