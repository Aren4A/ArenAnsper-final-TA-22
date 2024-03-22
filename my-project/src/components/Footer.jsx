// components/Footer.jsx
import React from 'react';

function Footer() {
    return (
        <div class="flex justify-center items-center py-20 text-xl lg:text-3xl font-medium text-center text-blue-900 bg-yellow-500" id='kontakt'>
  <div class="flex flex-col items-center w-full leading-[60px]">
    <img src="/LogoMakr.png"
      class="max-w-full aspect-[0.77] w-[138px]"
    />
    <div class="mt-5 whitespace-nowrap">Kamur Finance OÜ</div>
    <div>Registrikood: 16337204</div>
    <div>kamurmp@gmail.com</div>
    <div>+372 5330 3813</div>
    <div class="mt-5 text-base whitespace-nowrap">
      Kõik õigused kaitstud Kamur Finance OÜ 2024 ©
    </div>
  </div>
</div>

    );
}

export default Footer;