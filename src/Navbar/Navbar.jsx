import React from 'react';
import './Navbar.css';  // CSS faylni import qilamiz
import Logo from '../img/image.png'
function Navbar() {
    return (
        <div>
            
            <nav className="navbar">

                <ul className="nav-list">
                    <li className="nav-item">
                        <a className="nav-link">Bosh sahifa</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">O'zim haqimda</a>
                    </li>
                    <img href='#' className='Logo' src={Logo} alt="" />
                    <li className="nav-item">
                        <a  className="nav-link">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a  className="nav-link">IT sohasidagi o'zgarishlar</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
