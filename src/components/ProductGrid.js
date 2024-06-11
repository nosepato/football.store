import React, { useState } from 'react';
import camisadoreal1 from '../images/camisadoreal1.jpg'
import camisadoreal2 from '../images/camisadoreal2.jpg'
import camisadocity1 from '../images/camisadocity1.jpg'
import camisadocity2 from '../images/camisadocity2.jpg'
import camisadainter from '../images/camisadainter.jpg'
import camisadajuve from '../images/camisadajuve.jpg'
import camisadomilan from '../images/camisadomilan.jpg'


const products = [
  { id: 1, category: 'Espanha', name: 'Real Madrid 1', image: camisadoreal1 },
  { id: 2, category: 'Espanha', name: 'Real Madrid 2', image: camisadoreal2 },
  { id: 3, category: 'Inglaterra', name: 'Man City 1', image: camisadocity1 },
  { id: 4, category: 'Inglaterra', name: 'Man City 2', image: camisadocity2 },
  { id: 5, category: 'Itália', name: 'Inter de Milão', image: camisadainter },
  { id: 6, category: 'Itália', name: 'Juventus', image: camisadajuve },
  { id: 7, category: 'Itália', name: 'Milan', image: camisadomilan }
];

//filtro
function ProductGrid() {
  const [category, setCategory] = useState('Todos');

  const filteredProducts = category === 'Todos' ? products : products.filter(product => product.category === category);
  
  return (
    <div className="product-grid">
      <h2 className='produtos'>Produtos</h2>
      <div className="filter">
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="Todos">Todos</option>
          <option value="Espanha">Espanha</option>
          <option value="Inglaterra">Inglaterra</option>
          <option value="Itália">Itália</option>
        </select>
      </div>
      <div className="products">
        {filteredProducts.map(product => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-name">{product.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductGrid;
