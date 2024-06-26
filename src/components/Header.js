import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo">Logotipo</div>
      <div className="search-bar">
        <input type="text" placeholder="Buscar produtos..." />
      </div>
      <div className="cart">
        <button className="cart-button">
          <img src="/cart-icon.jpg" alt="Carrinho de Compras" />
        </button>
      </div>
    </header>
  );
}

export default Header;
