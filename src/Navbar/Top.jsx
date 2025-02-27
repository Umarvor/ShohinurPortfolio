import React, { useState, useEffect } from 'react';
import './Navbar.css';

const BackToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Show button when page is scrolled down 300px
    const toggleVisibility = () => {
        if (window.pageYOffset > 200) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        setIsLoading(true);
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        const handleScroll = () => {
            if (window.pageYOffset === 0) {
                setIsLoading(false);
                window.removeEventListener('scroll', handleScroll);
            }
        };

        window.addEventListener('scroll', handleScroll);
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div>
            <div className="back-to-top">
                {isVisible && !isLoading && (
                    <button onClick={scrollToTop}>
                        ↑
                    </button>
                )}
            </div>
            {isLoading && (
                <div className="loader-container">
                    <div className="loader"></div>
                </div>
            )}
        </div>
    );
};

export default BackToTopButton;
