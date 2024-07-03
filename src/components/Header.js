import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.jpg" alt="Logotipo" className='logo-image'/>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Buscar produtos..." />
      </div>
      <div className="cart">
        <a href="/cart" target="_blank" rel="noopener noreferrer" className="cart-button">
          <img src="/cart-icon.jpg" alt="Carrinho de Compras" />
        </a>
      </div>
    </header>
  );
}

export default Header;
