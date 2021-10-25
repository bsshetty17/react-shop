import React from 'react';
import { Link } from 'react-router-dom';

const ProductsWidget = () => {
  return (
    <div className='product-widget-area'>
      <div className='zigzag-bottom'></div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <div className='single-product-widget'>
              <h2 className='product-wid-title'>Top Sellers</h2>
              <div className='wid-view-more'>
                <Link to='/'>View All</Link>
              </div>
              <div className='single-wid-product'>
                <Link to='/product'>
                  <img
                    src='../assets/img/product-thumb-1.jpg'
                    alt=''
                    className='product-thumb'
                  />
                </Link>

                <h2>
                  <Link to='/product'>Sony Smart TV - 2015</Link>
                </h2>
                <div className='product-wid-rating'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div>
                <div className='product-wid-price'>
                  <ins>$400.00</ins> <del>$425.00</del>
                </div>
              </div>
              <div className='single-wid-product'>
                <Link to='/product'>
                  <img
                    src='../assets/img/product-thumb-2.jpg'
                    alt=''
                    className='product-thumb'
                  />
                </Link>

                <h2>
                  <Link to='/product'>Apple new mac book 2015</Link>
                </h2>
                <div className='product-wid-rating'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div>
                <div className='product-wid-price'>
                  <ins>$400.00</ins> <del>$425.00</del>
                </div>
              </div>
              <div className='single-wid-product'>
                <Link to='/product'>
                  <img
                    src='../assets/img/product-thumb-3.jpg'
                    alt=''
                    className='product-thumb'
                  />
                </Link>

                <h2>
                  <Link to='/product'>Apple new i phone 6</Link>
                </h2>
                <div className='product-wid-rating'>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                  <i className='fa fa-star'></i>
                </div>
                <div className='product-wid-price'>
                  <ins>$400.00</ins> <del>$425.00</del>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsWidget;
