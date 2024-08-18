import React, { useState } from 'react';
import './Navbar.css';  
import Logo from '../img/image.png';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleScrollToPortfolio = () => {
        const portfolioSection = document.getElementById('portfolio-section');
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false); // Close the sidebar when a link is clicked
    }

    const handleScrollToPortfolioo = () => {
        const portfolioSection = document.getElementById('portfolio-sectionn');
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false); // Close the sidebar when a link is clicked
    }

    const handleScrollToPortfoliooo = () => {
        const portfolioSection = document.getElementById('portfolio-sectionnn');
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false); // Close the sidebar when a link is clicked
    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <div>
            <nav className="navbar">
                <img className='Logo' src={Logo} alt="Logo" />

                <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                <ul className={`nav-list ${menuOpen ? 'open' : ''}`}>
                    <li className="nav-item">
                        <a onClick={handleScrollToPortfoliooo} className="nav-link">O'zim haqimda</a>
                    </li>
                    <li className="nav-item">
                        <a href='#' className="nav-link">Yutuqlarim</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={handleScrollToPortfolio} className="nav-link">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={handleScrollToPortfolioo} className="nav-link">IT sohasidagi o'zgarishlar</a>
                    </li>
                </ul>
            </nav>

            <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
                <ul className="sidebar-list">
                    <li className="sidebar-item">
                        <a onClick={handleScrollToPortfoliooo} className="sidebar-link">O'zim haqimda</a>
                    </li>
                    <li className="sidebar-item">
                        <a href='#' className="sidebar-link">Yutuqlarim</a>
                    </li>
                    <li className="sidebar-item">
                        <a onClick={handleScrollToPortfolio} className="sidebar-link">Portfolio</a>
                    </li>
                    <li className="sidebar-item">
                        <a onClick={handleScrollToPortfolioo} className="sidebar-link">IT sohasidagi o'zgarishlar</a>
                    </li>
                </ul>
            </div>

            <div className={`overlay ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}></div>
        </div>
    );
}

export default Navbar;
