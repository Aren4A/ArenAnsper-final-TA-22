// components/Footer.jsx
import React from 'react';

function Footer() {
    return (
        <div class="flex justify-center items-center py-20 text-xl lg:text-3xl font-medium text-center text-blue-900 bg-yellow-500" id='kontakt'>
  <div class="flex flex-col items-center w-full">
    <img src="/LogoMakr.png"
      class="max-w-full aspect-[0.77] w-[138px]"
    />
    <div class="mt-14 whitespace-nowrap">Kamur Finance OÜ</div>
    <div class="self-stretch mt-11">Registrikood: 16337204</div>
    <div class="mt-10">kamurmp@gmail.com</div>
    <div class="mt-10">+372 5330 3813</div>
    <div class="mt-10 text-base whitespace-nowrap">
      Kõik õigused kaitstud Kamur Finance OÜ 2024 ©
    </div>
  </div>
</div>

    );
}

export default Footer;