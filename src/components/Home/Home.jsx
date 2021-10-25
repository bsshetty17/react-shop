import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary';
import CircleLoader from 'react-spinners/CircleLoader';
import Header from '../Header';
import Footer from '../Footer';
import Brand from '../Brand';
import ProductsWidget from '../ProductsWidget';
import Brands from '../Brands';
import MainContent from '../MainContent';
import Promo from '../Promo';
import Slider from '../Slider';
import MainMenu from '../MainMenu';
import Register from '../Register';
import Login from '../Login';

const Home = () => {
  return (
    <>
      <Header />
      <Brand />
      <MainMenu />
      <Slider />
      <Promo />
      <MainContent />
      <Brands />
      <ProductsWidget />
      <Footer />
    </>
  );
};

export default Home;
