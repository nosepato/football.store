import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ProductReal1 = () => {
  return (
    <div className="product-page-container">
      <div className="product-images">
        <Carousel>
          <div>
            <img
              src="/camisadoreal1.jpg"
              alt="Camisa Torcedor Real Madrid"
            />
          </div>
          <div>
            <img
              src="/camisadorealcostas.jpg"
              alt="Camisa Torcedor Real Madrid Costas"
            />
          </div>
          <div>
            <img
              src="/camisadorealhalamadrid.jpg"
              alt="Camisa Torcedor Real Madrid Detail"
            />
          </div>
          <div>
            <img
              src="/camisadorealgola.jpg"
              alt="Camisa Torcedor Real Madrid Gola"              
            />
          </div>
        </Carousel>
      </div>
      <div className="product-details">
        <h1 className="product-title">Camisa Torcedor Real Madrid I 2023/24 Masculina</h1>
        <div className="product-price1">
          <span className="price-new">R$ 120,00</span>
          <span className="price-old">R$ 149,99</span>
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
        <div className="product-actions">
          <button className="buy-button">Comprar</button>
          <button className="add-to-cart-button">Adicionar ao Carrinho</button>
        </div>
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

export default ProductReal1;