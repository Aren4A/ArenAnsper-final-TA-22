// components/Header.jsx
import React from 'react';
import backgroundImage from '../assets/cropped_ananass.jpg';

function Header() {
  return (
    <div className="bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <header className='flex justify-end p-5'>
        <a href="/link1" className="text-amber-400 mr-7 text-3xl">Visioon</a>
        <a href="/link2" className="text-amber-400 mr-7 text-3xl">Hind</a>
        <a href="/link3" className="text-amber-400 mr-5 text-3xl">Kontakt</a>
      </header>
      <div className='flex flex-col justify-center'>
        <h1 className='text-amber-400 [font-size:_clamp(2em,5vw,10em)] px-3'>Kamur Finance OÜ</h1>


      </div>
    </div>
  );
}

export default Header;