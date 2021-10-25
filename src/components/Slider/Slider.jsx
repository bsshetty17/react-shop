import React from 'react';
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <div className='slider-area'>
      <div className='block-slider block-slider4'>
        <ul className='' id='bxslider-home4'>
          <li>
            <img src='../assets/img/h4-slide.png' alt='Slide' />
            <div className='caption-group'>
              <h2 className='caption title'>
                iPhone{' '}
                <span className='primary'>
                  6 <strong>Plus</strong>
                </span>
              </h2>
              <h4 className='caption subtitle'>Dual SIM</h4>
              <div className='caption button-radius'>
                <Link to='products'>
                  <span className='icon'></span>Shop now
                </Link>
              </div>
            </div>
          </li>
          <li>
            <img src='../assets/img/h4-slide2.png' alt='Slide' />
            <div className='caption-group'>
              <h2 className='caption title'>
                by one, get one{' '}
                <span className='primary'>
                  50% <strong>off</strong>
                </span>
              </h2>
              <h4 className='caption subtitle'>
                school supplies & backpacks.*
              </h4>
              <div className='caption button-radius'>
                <Link to='products'>
                  <span className='icon'></span>Shop now
                </Link>
              </div>
            </div>
          </li>
          <li>
            <img src='../assets/img/h4-slide3.png' alt='Slide' />
            <div className='caption-group'>
              <h2 className='caption title'>
                Apple{' '}
                <span className='primary'>
                  Store <strong>Ipod</strong>
                </span>
              </h2>
              <h4 className='caption subtitle'>Select Item</h4>
              <div className='caption button-radius'>
                <Link to='products'>
                  <span className='icon'></span>Shop now
                </Link>
              </div>
            </div>
          </li>
          <li>
            <img src='../assets/img/h4-slide4.png' alt='Slide' />
            <div className='caption-group'>
              <h2 className='caption title'>
                Apple{' '}
                <span className='primary'>
                  Store <strong>Ipod</strong>
                </span>
              </h2>
              <h4 className='caption subtitle'>& Phone</h4>
              <div className='caption button-radius'>
                <Link to='products'>
                  <span className='icon'></span>Shop now
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Slider;
