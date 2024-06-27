import React from 'react';

const ProductPage = () => {
  return (
    <div className="product-page-container">
      <div className="product-images">
        <img
          src="/camisadoreal1.jpg" // URL da imagem principal
          alt="Camisa Torcedor Real Madrid"
        />
      </div>
      <div className="product-details">
        <h1 className="product-title">Camisa Torcedor Real Madrid I 2023/24 Masculina</h1>
        <div className="product-price">
          <span className="price-new">R$ 199,99</span>
          <span className="price-old">R$ 249,99</span>
        </div>
        <div className="product-description">
          <p>
            Vista a Camisa do Real Madrid e garanta o estilo de um verdadeiro madridista dentro e fora dos estádios.
            Feita para os torcedores demonstrarem o orgulho pelo clube.
          </p>
        </div>
        <div className="product-size">
          <label>Tamanho:</label>
          <select>
            <option value="P">P</option>
            <option value="M">M</option>
            <option value="G">G</option>
            <option value="GG">GG</option>
          </select>
        </div>
        <button className="buy-button">Comprar</button>
        <div className="size-chart">
          <h3>Tabela de Tamanhos</h3>
          <img
            src="/tabela.jpg" // URL da tabela de tamanhos
            alt="Tabela de Tamanhos"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;