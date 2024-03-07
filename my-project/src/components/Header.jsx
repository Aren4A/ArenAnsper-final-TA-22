// components/Header.jsx
import React from 'react';
import backgroundImage from '../assets/cropped_ananass.jpg';

function Header() {
  return (
    <div className="bg-cover bg-center w-full" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <header className='flex justify-end p-5'>
        <a href="#visioon" className="text-[#E3C10C] mr-7 text-3xl">Visioon</a>
        <a href="#hind" className="text-[#E3C10C] mr-7 text-3xl">Hind</a>
        <a href="#kontakt" className="text-[#E3C10C] mr-5 text-3xl">Kontakt</a>
      </header>
      <div className='flex flex-col justify-center'>
        <h1 className='text-[#E3C10C] [font-size:_clamp(2em,5vw,10em)] px-3'>Kamur Finance OÜ</h1>
        <h1 className='text-[#E3C10C] [font-size:_clamp(2em,3vw,10em)] px-3'>Raamatupidamine mikro- ja <br />väikeettevõtetele</h1>
        <h1 className='text-black text-lg pr-[45%] pl-3 pt-3'>“If you think it's expensive to hire a professional to do the job, wait until you hire an amateur.”</h1>
      </div>
    </div>
  );
}

export default Header;