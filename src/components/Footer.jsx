import React from 'react';
import FooterBackground from '../assets/images/background/heroBackground.jpg';

export default function Footer() {
	return (
		<footer
			className='footer'
			style={{
				backgroundImage: `url(${FooterBackground})`,
				backgroundPosition: 'center ',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				imageRendering: 'auto',
			}}>
			<div className='footer__container'>
				<div className='footer__row'>
					<h4>Resources</h4>
					<p>Contact Us</p>
					<p>Forums</p>
					<p>Blog</p>
					<p>Help Center</p>
				</div>

				<div className='footer__row'>
					<h4>Account</h4>
					<p>My Account</p>
					<p>Watchlist</p>
					<p>Collections</p>
					<p>User Guide</p>
				</div>

				<div className='footer__row'>
					<h4>Legal</h4>
					<p>Terms of Use</p>
					<p>Privacy Policy</p>
					<p>Security</p>
				</div>

				<div className='footer__row'>
					<h4>Newsletter</h4>
					<p>
						Subscribe to our newsletter system now to get latest news from us
					</p>
					<p>ENTER YOUR EMAIL</p>
				</div>
				<div className='footer__row'>
					<h4 className='logo'>LOGO</h4>
					<p>Copyright @ 2021</p>
					<p>Designed & Developed by Ryuse</p>
				</div>
			</div>
		</footer>
	);
}
