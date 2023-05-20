import React, { useState, useEffect } from 'react';
import '../styleSheets/newsletter.css';

const Newsletter = () => {
    const images = [
        'https://klike.net/uploads/posts/2019-11/1572612050_1.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuG-X_6MywzInty1-WAUTTis6pKU0pOA9kwNOnMolCpw&s',
        'https://klike.net/uploads/posts/2019-11/1574605232_1.jpg',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            nextSlide();
        }, 7000);

        return () => clearTimeout(timer);
    }, [currentIndex]);

    return (
        <div className="newsletter-container">
            <div className="slider">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Slide ${index}`}
                        style={{ display: index === currentIndex ? 'block' : 'none' }}
                    />

                ))}
                <div className='slider-arrows'>
                    <button className="slider-arrow-left" onClick={prevSlide}>
                        🠔
                    </button>
                    <button className="slider-arrow-right" onClick={nextSlide}>
                        🠖
                    </button>
                </div>
            </div>
            <div className='newsletter-form'>
                <div className="newsletterForm-text">
                    <p>Отримуй корисні новини та гарячі спецпропозиції</p>
                </div>
                <input type="email" required='true' placeholder="youremail@gmail.com" id = "email" name = "email"/>
                <button type='submit'>Підписатися на розсилку</button>
                <div className='personalInfo'>
                    <p>Натискаючи на цю кнопку, ви надаєте свою згоду на обробку і передачу персональних даних</p>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;
