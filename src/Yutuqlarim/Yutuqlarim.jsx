import React, { useState } from 'react';
import './Yutuqlarim.css';

const sections = [
    {
        title: "Dasturlash Asoslari",
        content: "Dasturlashni o'rganish uchun quyidagi manbalar foydali:\n\n- [Codecademy](https://www.codecademy.com/)\n- [freeCodeCamp](https://www.freecodecamp.org/)\n- [W3Schools](https://www.w3schools.com/)"
    },
    {
        title: "Veb Dasturlash",
        content: "Veb dasturlashni o'rganish uchun manbalar:\n\n- [MDN Web Docs](https://developer.mozilla.org/)\n- [CSS-Tricks](https://css-tricks.com/)\n- [Frontend Masters](https://frontendmasters.com/)"
    },
    {
        title: "Ma'lumotlar Bazasi",
        content: "Ma'lumotlar bazalari haqida o'rganish uchun manbalar:\n\n- [MySQL Documentation](https://dev.mysql.com/doc/)\n- [PostgreSQL Tutorial](https://www.postgresqltutorial.com/)\n- [MongoDB University](https://university.mongodb.com/)"
    },
    {
        title: "Sun'iy Intellekt va Mashinaviy O'qitish",
        content: "AI va ML bo'yicha o'rganish uchun manbalar:\n\n- [Coursera - Machine Learning](https://www.coursera.org/learn/machine-learning)\n- [Kaggle](https://www.kaggle.com/)\n- [Fast.ai](https://www.fast.ai/)"
    },
    {
        title: "Kiberxavfsizlik",
        content: "Kiberxavfsizlikni o'rganish uchun manbalar:\n\n- [Cybrary](https://www.cybrary.it/)\n- [OWASP](https://owasp.org/)\n- [Hack The Box](https://www.hackthebox.com/)"
    }
];

const AccordionItem = ({ title, content, isOpen, onClick, imageSrc }) => (
    <div className="accordion-item">
        <div className="accordion-title" onClick={onClick}>
            <h3>{title}</h3>
            <span>{isOpen ? '-' : '+'}</span>
        </div>
        {isOpen && (
            <div className="accordion-content">
                {imageSrc && <img src={imageSrc} alt={title} className="accordion-image" />}
                <p>{content}</p>
            </div>
        )}
    </div>
);

const AytInfo = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = index => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (

        <div id='portfolio-sectionnnn' className="accordion-container">
            <br /><br />
            <h2 className='qs'>IT sohasida foydali manbalar:</h2>
            <br />
            {sections.map((section, index) => (
                <AccordionItem
                    key={index}
                    title={section.title}
                    content={section.content}
                    isOpen={openIndex === index}
                    onClick={() => handleToggle(index)}

                />
            ))}
        </div>

    );
};

export default AytInfo;
