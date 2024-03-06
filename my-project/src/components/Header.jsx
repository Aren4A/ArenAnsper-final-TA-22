// components/Header.jsx
import React from 'react';
import backgroundImage from '../assets/cropped_ananass.jpg';

function Header() {
  return (
    <div className="bg-cover bg-center h-" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <header className='flex justify-end '>
        <a href="/link1" className="text-amber-400 mr-4">Visioon</a>
        <a href="/link2" className="text-amber-400 mr-4">Hind</a>
        <a href="/link3" className="text-amber-400 mr-4">Kontakt</a>
      </header>
    <div>
      <h1>Kamur Finance OÜ</h1>
    </div>
  </div>
    
  );
}

export default Header;