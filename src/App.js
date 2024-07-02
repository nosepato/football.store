import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Carousel from './components/Carousel';
import AdsSection from './components/AdsSection';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import Cart from './components/Cart';
import ProductReal1 from './components/ProductReal1';
import ProductReal2 from './components/ProductReal2';
import ProductCity1 from './components/ProductCity1';
import ProductCity2 from './components/ProductCity2';
import ProductJuve from './components/ProductJuve';
import ProductMilan from './components/ProductMilan';
import ProductInter from './components/ProductInter';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <Carousel />
            <AdsSection />
            <ProductGrid />
            <Footer />
          </>
        } />
        <Route path="/product/real-madrid-1" element={<ProductPage Component={ProductReal1} />} />
        <Route path="/product/real-madrid-2" element={<ProductPage Component={ProductReal2} />} />
        <Route path="/product/man-city-1" element={<ProductPage Component={ProductCity1} />} />
        <Route path="/product/man-city-2" element={<ProductPage Component={ProductCity2} />} />
        <Route path="/product/juventus" element={<ProductPage Component={ProductJuve} />} />
        <Route path="/product/milan" element={<ProductPage Component={ProductMilan} />} />
        <Route path="/product/inter-milao" element={<ProductPage Component={ProductInter} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

function ProductPage({ Component }) {
  return (
    <>
      <Header />
      <Component />
    </>
  );
}

export default App;
