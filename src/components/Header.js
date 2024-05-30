import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="logo">Logotipo</div>
      <div className="search-bar">
        <input type="text" placeholder="Buscar produtos..." />
      </div>
      <div className="cart">Carrinho</div>
    </header>
  );
}

export default Header;
