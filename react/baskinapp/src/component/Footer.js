import react from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-top-container">
                <div className="top-first-div">
                    <div className="top-foot-1">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Our Stores</a></li>
                        <li><a href="#">Blog</a></li>
                    </div>
                    <div className="top-foot-2">
                        <li><a href="#">Contact Us</a></li>
                        <li><a href="#">Franchise Enquiry</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms & Condition</a></li>
                    </div>
                </div>
                <div className="top-second-div">
                    <div className="top-foot-3">
                        <li>Subscribe to news letter</li>
                        <li><input type="email" placeholder="Enter your E-mail"/><button>SUBMIT</button></li>
                    </div>
                </div>

            </div>

            <div className="footer-bottom-container">
                <div className="bottom-foot1">
                    <a href="#">Copyright&copy; | Baskin Robbins India</a>
                </div>
                <div className="bottom-foot2">
                    <a href="https://www.youtube.com/user/BaskinRobbinsIn" target="_blank"><img
                        src="https://i.ibb.co/hMmh539/Youtube.webp" alt="" className="foot-logo"/></a>
                    <a href="https://www.instagram.com/baskinrobbinsin/?hl=en" target="_blank"><img
                        src="https://i.ibb.co/LN2cQYC/Instagram.webp" alt="" className="foot-logo"/></a>
                    <a href="https://twitter.com/BaskinRobbinsIn" target="_blank"><img
                        src="https://i.ibb.co/cCY7Tg0/Twitter.webp" alt="" className="foot-logo"/></a>
                    <a href="https://www.facebook.com/BaskinRobbinsIn/" target="_blank"><img
                        src="https://i.ibb.co/Kwjck43/Facebook.webp" alt="" className="foot-logo"/></a>
                </div>
                <div className="bottom-foot3">
                    <a href="#">Sitemap</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;