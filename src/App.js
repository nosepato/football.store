import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import AdsSection from './components/AdsSection';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import ProductReal1 from './components/ProductReal1';
import ProductReal2 from './components/ProductReal2';
import ProductCity1 from './components/ProductCity1';
import ProductCity2 from './components/ProductCity2';
import ProductJuve from './components/ProductJuve';
import ProductMilan from './components/ProductMilan';
import ProductInter from './components/ProductInter';


function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <AdsSection />
      <ProductGrid />
      <Footer />

    <div>
      <ProductReal1 />
    </div>
    
    <div>
      <ProductReal2 />
    </div>
    
    <div>
      <ProductCity1 />
    </div>

    <div>
      <ProductCity2 />
    </div>

    <div>
      <ProductJuve />
    </div>

    <div>
      <ProductMilan />
    </div>

    <div>
      <ProductInter />
    </div>

    </div>

  );
}

export default App;