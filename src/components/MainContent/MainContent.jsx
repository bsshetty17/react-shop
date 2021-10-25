import React from 'react';
import { Link } from 'react-router-dom';

const MainContent = () => {
  return (
    <div className='maincontent-area'>
      <div className='zigzag-bottom'></div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='latest-product'>
              <h2 className='section-title'>Latest Products</h2>
              <div className='product-carousel'>
                <div className='single-product'>
                  <div className='product-f-image'>
                    <img src='../assets/img/product-1.jpg' alt='' />
                    <div className='product-hover'>
                      <div className='add-to-cart-link'>
                        <Link to='/'>
                          <i className='fa fa-shopping-cart'></i> Add to cart
                        </Link>
                      </div>
                      <div className='view-details-link'>
                        <Link to='/product'>
                          <i className='fa fa-link'></i> See details
                        </Link>
                      </div>
                    </div>
                  </div>

                  <h2>
                    <Link to='/product'>Samsung Galaxy s5- 2015</Link>
                  </h2>

                  <div className='product-carousel-price'>
                    <ins>$700.00</ins> <del>$100.00</del>
                  </div>
                </div>
                <div className='single-product'>
                  <div className='product-f-image'>
                    <img src='../assets/img/product-2.jpg' alt='' />
                    <div className='product-hover'>
                      <div className='add-to-cart-link'>
                        <Link to='/'>
                          <i className='fa fa-shopping-cart'></i> Add to cart
                        </Link>
                      </div>
                      <div className='view-details-link'>
                        <Link to='/product'>
                          <i className='fa fa-link'></i> See details
                        </Link>
                      </div>
                    </div>
                  </div>

                  <h2>Nokia Lumia 1320</h2>
                  <div className='product-carousel-price'>
                    <ins>$899.00</ins> <del>$999.00</del>
                  </div>
                </div>
                <div className='single-product'>
                  <div className='product-f-image'>
                    <img src='../assets/img/product-3.jpg' alt='' />
                    <div className='product-hover'>
                      <div className='add-to-cart-link'>
                        <Link to='/'>
                          <i className='fa fa-shopping-cart'></i> Add to cart
                        </Link>
                      </div>
                      <div className='view-details-link'>
                        <Link to='/product'>
                          <i className='fa fa-link'></i> See details
                        </Link>
                      </div>
                    </div>
                  </div>

                  <h2>LG Leon 2015</h2>

                  <div className='product-carousel-price'>
                    <ins>$400.00</ins> <del>$425.00</del>
                  </div>
                </div>
                <div className='single-product'>
                  <div className='product-f-image'>
                    <img src='../assets/img/product-4.jpg' alt='' />
                    <div className='product-hover'>
                      <div className='add-to-cart-link'>
                        <Link to='/'>
                          <i className='fa fa-shopping-cart'></i> Add to cart
                        </Link>
                      </div>
                      <div className='view-details-link'>
                        <Link to='/product'>
                          <i className='fa fa-link'></i> See details
                        </Link>
                      </div>
                    </div>
                  </div>

                  <h2>
                    <Link to='/product'>Sony microsoft</Link>
                  </h2>

                  <div className='product-carousel-price'>
                    <ins>$200.00</ins> <del>$225.00</del>
                  </div>
                </div>
                <div className='single-product'>
                  <div className='product-f-image'>
                    <img src='../assets/img/product-5.jpg' alt='' />
                    <div className='product-hover'>
                      <div className='add-to-cart-link'>
                        <Link to='/'>
                          <i className='fa fa-shopping-cart'></i> Add to cart
                        </Link>
                      </div>
                      <div className='view-details-link'>
                        <Link to='/product'>
                          <i className='fa fa-link'></i> See details
                        </Link>
                      </div>
                    </div>
                  </div>

                  <h2>iPhone 6</h2>

                  <div className='product-carousel-price'>
                    <ins>$1200.00</ins> <del>$1355.00</del>
                  </div>
                </div>
                <div className='single-product'>
                  <div className='product-f-image'>
                    <img src='../assets/img/product-6.jpg' alt='' />
                    <div className='product-hover'>
                      <div className='add-to-cart-link'>
                        <Link to='/'>
                          <i className='fa fa-shopping-cart'></i> Add to cart
                        </Link>
                      </div>
                      <div className='view-details-link'>
                        <Link to='/product'>
                          <i className='fa fa-link'></i> See details
                        </Link>
                      </div>
                    </div>
                  </div>

                  <h2>
                    <Link to='/product'>Samsung gallaxy note 4</Link>
                  </h2>

                  <div className='product-carousel-price'>
                    <ins>$400.00</ins>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
