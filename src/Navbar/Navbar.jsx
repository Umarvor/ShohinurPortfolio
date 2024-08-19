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
    const handleScrollToPortfolioooo = () => {
        const portfolioSection = document.getElementById('portfolio-sectionnnn');
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
                        <a onClick={handleScrollToPortfolioooo} href='#' className="nav-link">Foydali manbalar</a>
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
            <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
                <ul className="sidebar-list">
                    <li id='nav-item'  className="sidebar-item">
                        <a onClick={handleScrollToPortfoliooo} id='nav-link' className="sidebar-link">O'zim haqimda</a>
                    </li>
                    <li id='nav-item' className="sidebar-item">
                        <a href='#' id='nav-link' className="sidebar-link">Foydali manbalar</a>
                    </li>
                    <li id='nav-item' className="sidebar-item">
                        <a onClick={handleScrollToPortfolio} id='nav-link' className="sidebar-link">Portfolio</a>
                    </li>
                    <li id='nav-item' className="sidebar-item">
                        <a onClick={handleScrollToPortfolioo} id='nav-link' className="sidebar-link">IT sohasidagi o'zgarishlar</a>
                    </li>
                </ul>
            </div>

          
        </div>
    );
}

export default Navbar;
