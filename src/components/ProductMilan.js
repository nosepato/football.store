import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa os estilos do carrossel

const ProductMilan = () => {
  return (
    <div className="product-page-container">
      <div className="product-images">
        <Carousel>
          <div>
            <img
              src="/camisadomilan.jpg"
              alt="Camisa Torcedor Milan"
            />
          </div>
          <div>
            <img
              src="/camisadomilancostas.jpg"
              alt="Camisa Torcedor Milan Costas"
            />
          </div>

        </Carousel>
      </div>
      <div className="product-details">
        <h1 className="product-title">Camisa Torcedor Mialn I 2024/25 Masculina</h1>
        <div className="product-price">
          <span className="price-new">R$ 199,99</span>
          <span className="price-old">R$ 249,99</span>
        </div>
        <div className="product-description">
          <p>
            Vista a Camisa do Milan e garanta o estilo de um verdadeiro Rossoneri dentro e fora dos estádios.
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

export default ProductMilan;