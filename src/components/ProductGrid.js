import React, { useState } from 'react';

// Produtos com URLs de imagem
const products = [
  { id: 1, category: 'Eletrônicos', name: 'Produto 1', image: 'https://via.placeholder.com/150' },
  { id: 2, category: 'Roupas', name: 'Produto 2', image: 'https://via.placeholder.com/150' },
  { id: 3, category: 'Eletrônicos', name: 'Produto 3', image: 'https://via.placeholder.com/150' },
  { id: 4, category: 'Roupas', name: 'Produto 4', image: 'https://via.placeholder.com/150' },
];

function ProductGrid() {
  const [category, setCategory] = useState('Todos');

  const filteredProducts = category === 'Todos' ? products : products.filter(product => product.category === category);

  return (
    <div className="product-grid">
      <h2 className='produtos'>Produtos</h2>
      <div className="filter">
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="Todos">Todos</option>
          <option value="Eletrônicos">Eletrônicos</option>
          <option value="Roupas">Roupas</option>
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
