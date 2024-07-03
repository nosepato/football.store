import React from 'react';

function AdsSection() {
  return (
    <div className="ads-section">
      <div className="ad">
        <ul className="ad-list">
          <li><img src="/umbro.jpg" alt="Anúncio 1" className="ad-image" /></li>
          <li><img src="/adidas.jpg" alt="Anúncio 2" className="ad-image" /></li>
          <li><img src="/nike.jpg" alt="Anúncio 3" className="ad-image" /></li>
          <li><img src="/puma.jpg" alt="Anúncio 4" className="ad-image" /></li>
          <li><img src="/nb.jpg" alt="Anúncio 5" className="ad-image" /></li>
        </ul>
        <ul className="ad-list">
          <li><img src="/brasileirao.jpg" alt="Anúncio 1" className="ad-image" /></li>
          <li><img src="/laliga.jpg" alt="Anúncio 2" className="ad-image" /></li>
          <li><img src="/pl.jpg" alt="Anúncio 3" className="ad-image" /></li>
          <li><img src="/bundesliga.jpg" alt="Anúncio 4" className="ad-image" /></li>
          <li><img src="/seriea.jpg" alt="Anúncio 5" className="ad-image" /></li>
        </ul>
      </div>
      
    </div>
  );
}

export default AdsSection;
