// components/About.jsx
import React from 'react';

function About() {
  return (
    <section id="visioon">
      <div class="flex flex-col lg:px-20 px-4 text-xl lg:text-3xl text-justify text-[#012579] bg-[#E3C10C]">
        <div class="flex flex-col gap-5 justify-between my-9">
          <img src="/syda1.png" class="self-start aspect-[1.03] w-[55px] lg:w-[80px] w-20" />  
          <div class="px-2 text-center flex-auto self-end lg:my-10 italic leading-[45px]">
            Kamur Finance OÜ pooldab paberivaba raamatupidamist - eelkõige
            teeb see aruandluse kajastamise mugavamaks, kiiremaks ja
            ajakohasemaks. Meie eesmärk on julgustada alustavate
            mikroettevõtete ideede elluviimist nii, et loomingulised ideed ei
            jääks ellu viimata tüütu raamatupidamise kohustuse pärast, millege
            ise ei jõua või ei soovi esmajärjekorras tegeleda.
          </div>
          <img src="/syda2.png" class="self-end aspect-[1.03] w-[55px] lg:w-[80px] w-20" />
        </div>
      </div>
    </section>
  );
}

export default About;