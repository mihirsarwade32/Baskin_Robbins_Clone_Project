import react from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <div className="title primary-dark" id="title-id">
            <header className="title-bar">
                <div className="title-right">
                    <a data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                        <img src="https://i.ibb.co/VMZNVR2/Burger-Menu.png" alt="" width="30" />
                    </a>

                    <div className="offcanvas offcanvas-start primary-dark" tabIndex="-1" id="offcanvasExample"
                        aria-labelledby="offcanvasExampleLabel">
                        <div className="offcanvas-header">
                            <button type="button" className="btn-close text-reset sixth-dark" data-bs-dismiss="offcanvas"
                                aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul><a className="dropdown-item secondary-dark" href="shop.html">Shop</a></ul>
                            <ul><a className="dropdown-item secondary-dark" href="#">Partner With Us</a></ul>
                            <ul><a className="dropdown-item secondary-dark" href="#">About Us</a></ul>
                            <ul><a className="dropdown-item secondary-dark" href="#">Our Stores</a></ul>
                        </div>
                    </div>
                </div>

                <img src="https://i.ibb.co/yfqH6X7/Main-Logo.webp" alt="logo" className="logo" />

                <div className="shop-btn">
                    <Link to={`/`}><button>Home</button></Link>

                </div>


            </header>
        </div>
    )
}

export default Header;