import React from 'react'
import FooterBackground from '../assets/images/background/heroBackground.jpg'
import FormInput from './FormInput'

export default function Footer() {
  return (
    <footer
      className='footer'
      style={{
        backgroundImage: `url(${FooterBackground})`,
        backgroundPosition: 'center ',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        imageRendering: 'auto'
      }}
    >
      <div className='footer__container'>
        <div className='footer__row'>
          <h4 className='footer__header'>Resources</h4>
          <p tabIndex='6' className='footer__link'>
            Contact Us
          </p>
          <p tabIndex='6' className='footer__link'>
            Forums
          </p>
          <p tabIndex='6' className='footer__link'>
            Blog
          </p>
          <p tabIndex='6' className='footer__link'>
            Help Center
          </p>
        </div>

        <div className='footer__row'>
          <h4 className='footer__header'>Account</h4>
          <p tabIndex='6' className='footer__link'>
            My Account
          </p>
          <p tabIndex='6' className='footer__link'>
            Watchlist
          </p>
          <p tabIndex='6' className='footer__link'>
            Collections
          </p>
          <p tabIndex='6' className='footer__link'>
            User Guide
          </p>
        </div>

        <div className='footer__row'>
          <h4 className='footer__header'>Legal</h4>
          <p tabIndex='6' className='footer__link'>
            Terms of Use
          </p>
          <p tabIndex='6' className='footer__link'>
            Privacy Policy
          </p>
          <p tabIndex='6' className='footer__link'>
            Security
          </p>
        </div>

        <div className='footer__row'>
          <h4 className='footer__header'>Newsletter</h4>
          <p>
            Subscribe to our newsletter system now to get latest news from us
          </p>
          <FormInput className={'form-input'} />
        </div>
        <div className='footer__row'>
          <p className='logo'>LOGO</p>
          <p>Copyright @ 2021</p>
          <p>Designed & Developed by Ryuse</p>
        </div>
      </div>
    </footer>
  )
}
