import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa os estilos do carrossel

const ProductInter = () => {
  return (
    <div className="product-page-container">
      <div className="product-images">
        <Carousel>
          <div>
            <img
              src="/camisadainter.jpg"
              alt="Camisa Torcedor Inter"
            />
          </div>
          <div>
            <img
              src="/camisadaintercostas.jpg"
              alt="Camisa Torcedor Inter Costas"
            />
          </div>

          <div>
            <img
              src="/camisadainterdetail.jpg"
              alt="Camisa Torcedor Inter Detail"
            />
          </div>

          <div>
            <img
              src="/camisadaintergola.jpg"
              alt="Camisa Torcedor Inter Gola"              
            />
          </div>
        </Carousel>
      </div>
      <div className="product-details">
        <h1 className="product-title">Camisa Torcedor Inter de Milão I 2023/24 Masculina</h1>
        <div className="product-price">
          <span className="price-new">R$ 199,99</span>
          <span className="price-old">R$ 249,99</span>
        </div>
        <div className="product-description">
          <p>
            Vista a Camisa da Inter de Milão e garanta o estilo de um verdadeiro NeoAzurre dentro e fora dos estádios.
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

export default ProductInter;