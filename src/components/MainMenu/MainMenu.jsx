import React from 'react';
import { Link } from 'react-router-dom';

const MainMenu = () => {
  return (
    <div className='mainmenu-area'>
      <div className='container'>
        <div className='row'>
          <div className='navbar-header'>
            <button
              type='button'
              className='navbar-toggle'
              data-toggle='collapse'
              data-target='.navbar-collapse'
            >
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
          </div>
          <div className='navbar-collapse collapse'>
            <ul className='nav navbar-nav'>
              <li className='active'>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/products'>Shop</Link>
              </li>
              <li>
                <Link to='/product'>Single product</Link>
              </li>
              <li>
                <Link to='/cart'>Cart</Link>
              </li>
              <li>
                <Link to='/checkout'>Checkout</Link>
              </li>
              <li>
                <Link to='/'>Category</Link>
              </li>
              <li>
                <Link to='/'>Others</Link>
              </li>
              <li>
                <Link to='/'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;
