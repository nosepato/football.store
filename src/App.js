import React from 'react';
import Header from './components/Header';
import Carousel from './components/Carousel';
import AdsSection from './components/AdsSection';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import ProductPage from './components/ProductPage';


function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <AdsSection />
      <ProductGrid />
      <Footer />

    <div>
      <ProductPage />
    </div>

    </div>

  );
}

export default App;