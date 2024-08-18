import React from 'react';
import './Navbar.css';  // CSS faylni import qilamiz
import Logo from '../img/image.png'
function Navbar() {
    const handleScrollToPortfolio = () => {
        const portfolioSection = document.getElementById('portfolio-section');
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
    const handleScrollToPortfolioo = () => {
        const portfolioSection = document.getElementById('portfolio-sectionn');
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
    const handleScrollToPortfoliooo = () => {
        const portfolioSection = document.getElementById('portfolio-sectionnn');
        portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
   
    return (
        <div>
            
            <nav className="navbar">

                <ul className="nav-list">
                    
                    <li className="nav-item">
                        <a onClick={handleScrollToPortfoliooo}  className="nav-link">O'zim haqimda</a>
                    </li>
                    <li className="nav-item">
                        <a href='#' className="nav-link">Yutuqlarim</a>
                    </li>
                    <img href='#' className='Logo' src={Logo} alt="" />
                    <li className="nav-item">
                        <a onClick={handleScrollToPortfolio}  className="nav-link">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={handleScrollToPortfolioo}  className="nav-link">IT sohasidagi o'zgarishlar</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
