import React, { useEffect, useRef } from 'react';
import { CardContainer } from './style'; // Ajuste o caminho conforme necessário

const Card = ({ title, description, imageUrl, buttonText }) => {
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <CardContainer ref={ref}>
            <img src={imageUrl} alt={title} className="card-image" />
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <button className="card-button">{buttonText}</button>
        </CardContainer>
    );
};

export default Card;
