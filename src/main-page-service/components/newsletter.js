import React, { useState, useEffect } from 'react';
import '../styleSheets/newsletter.css';
import firstImage from '../images/384852340.jpg'
import secondImage from '../images/grazhdanskij-samolet-1920x1080.jpg'
import thirdImage from '../images/Passenger_Airplanes_Evening_Sky_Flight_520132_1920x1080.jpg'

const Newsletter = () => {
    const images = [
        firstImage,
        secondImage,
        thirdImage,
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
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
            </div>
            <form    className='newsletter-form'>
                <div className="newsletterForm-text">
                    <p>Отримуй корисні новини та гарячі спецпропозиції</p>
                </div>
                <input type="email" required='true' placeholder="youremail@gmail.com" id = "email" name = "email"/>
                <button type='submit'>Підписатися на розсилку</button>
                <div className='personalInfo'>
                    <p>Натискаючи на цю кнопку, ви надаєте свою згоду на обробку і передачу персональних даних</p>
                </div>
            </form>
        </div>
    );
};

export default Newsletter;
