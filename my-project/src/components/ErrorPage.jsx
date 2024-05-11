import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';

function ErrorPage() {
  return (
    <div class="flex justify-center items-center py-20 text-xl lg:text-3xl font-medium text-center text-[#012579] bg-[#E3C10C]">
  <div class="flex flex-col items-center w-full leading-[60px]">
        <h3>Page not found, please check the link again</h3>
       <p>
        Go to
        <Link to="/"><b> Home </b></Link>
        page</p>
        <img src="/LogoMakr.png"
      class="max-w-full aspect-[0.77] w-[138px]"
    />
    <div class="mt-5 whitespace-nowrap">Kamur Finance OÜ</div>
    <div>Registry code: 16337204</div>
    <div>kamurmp@gmail.com</div>
    <div>+372 5330 3813</div>
    <div class="mt-5 text-base whitespace-nowrap">
    All rights protected Kamur Finance OÜ 2024 ©
    </div>
    </div>
    </div>
    
   
    
  );
}

export default ErrorPage;
