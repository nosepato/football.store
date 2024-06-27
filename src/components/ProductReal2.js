import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa os estilos do carrossel

const ProductReal2 = () => {
  return (
    <div className="product-page-container">
      <div className="product-images">
        <Carousel>
          <div>
            <img
              src="/camisadoreal2.jpg"
              alt="Camisa Torcedor Real Madrid"
            />
          </div>
          <div>
            <img
              src="/camisadoreal2costas.jpg"
              alt="Camisa Torcedor Real Madrid Costas"
            />
          </div>

          <div>
            <img
              src="/camisadoreal2detail.jpg"
              alt="Camisa Torcedor Real Madrid Detail"
            />
          </div>

          <div>
            <img
              src="/camisadoreal2gola.jpg"
              alt="Camisa Torcedor Real Madrid Gola"              
            />
          </div>
        </Carousel>
      </div>
      <div className="product-details">
        <h1 className="product-title">Camisa Torcedor Real Madrid II 2023/24 Masculina</h1>
        <div className="product-price">
          <span className="price-new">R$ 199,99</span>
          <span className="price-old">R$ 249,99</span>
        </div>
        <div className="product-description">
          <p>
            Vista a Camisa do Real Madrid e garanta o estilo de um verdadeiro Madridista dentro e fora dos estádios.
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
            src="/tabela.jpg"
            alt="Tabela de Tamanhos"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductReal2;