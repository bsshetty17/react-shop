import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header-area'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8'>
            <div className='user-menu'>
              <ul>
                <li>
                  <Link to='/'>
                    <i className='fa fa-user'></i> My Account
                  </Link>
                </li>
                <li>
                  <Link to='/'>
                    <i className='fa fa-heart'></i> Wishlist
                  </Link>
                </li>
                <li>
                  <Link to='/cart'>
                    <i className='fa fa-user'></i> My Cart
                  </Link>
                </li>
                <li>
                  <Link to='/cart'>
                    <i className='fa fa-user'></i> Checkout
                  </Link>
                </li>
                <li>
                  <Link to='/login'>
                    <i className='fa fa-user'></i> Login
                  </Link>
                </li>
                <li>
                  <Link to='/register'>
                    <i className='fa fa-user'></i> Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='col-md-4'>
            <div className='header-right'>
              <ul className='list-unstyled list-inline'>
                <li className='dropdown dropdown-small'>
                  <a
                    data-toggle='dropdown'
                    data-hover='dropdown'
                    className='dropdown-toggle'
                    href='#'
                  >
                    <span className='key'>currency :</span>
                    <span className='value'>INR </span>
                    <b className='caret'></b>
                  </a>
                  <ul className='dropdown-menu'>
                    <li>
                      <a href='#'>INR</a>
                    </li>
                  </ul>
                </li>

                <li className='dropdown dropdown-small'>
                  <a
                    data-toggle='dropdown'
                    data-hover='dropdown'
                    className='dropdown-toggle'
                    href='#'
                  >
                    <span className='key'>language :</span>
                    <span className='value'>English </span>
                    <b className='caret'></b>
                  </a>
                  <ul className='dropdown-menu'>
                    <li>
                      <a href='#'>English</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
