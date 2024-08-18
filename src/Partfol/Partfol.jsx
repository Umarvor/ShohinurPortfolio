import React from 'react';
import './Partfol.css';
import Vrg from '../img/Снимок экрана 2024-08-17 184607.png'
function Portfolio() {
   
    return (
        <div id='portfolio-section'>
            <h1 className='Partfol'>Portfoliyam</h1>
            <div className="portfolio-container">

                <div className="portfolio-item">
                    <a href="https://Varganzaliklar.netlify.app" target="_blank" rel="noopener noreferrer" className="portfolio-link">
                           <img src={Vrg} alt="Project 1" className="portfolio-image" />
                        <div className="overlay">
                            <div className="text">Varganzaliklar!</div>
                        </div>
                    </a>
                </div>
                <div className="portfolio-item">
                    <a href="https://example.com/project2" target="_blank" rel="noopener noreferrer" className="portfolio-link">
                        <img src="https://via.placeholder.com/300" alt="Project 2" className="portfolio-image" />
                        <div className="overlay">
                            <div className="text">Project 2</div>
                        </div>
                    </a>
                </div>
                <div className="portfolio-item">
                    <a href="https://example.com/project3" target="_blank" rel="noopener noreferrer" className="portfolio-link">
                        <img src="https://via.placeholder.com/300" alt="Project 3" className="portfolio-image" />
                        <div className="overlay">
                            <div className="text">Project 3</div>
                        </div>
                    </a>
                </div>
                <div className="portfolio-item">
                    <a href="https://example.com/project4" target="_blank" rel="noopener noreferrer" className="portfolio-link">
                        <img src="https://via.placeholder.com/300" alt="Project 4" className="portfolio-image" />
                        <div className="overlay">
                            <div className="text">Project 4</div>
                        </div>
                    </a>
                </div>
                <div className="portfolio-item">
                    <a href="https://example.com/project5" target="_blank" rel="noopener noreferrer" className="portfolio-link">
                        <img src="https://via.placeholder.com/300" alt="Project 5" className="portfolio-image" />
                        <div className="overlay">
                            <div className="text">Project 5</div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
