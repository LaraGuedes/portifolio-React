import React, { useEffect, useRef } from 'react';
import { CardContainer } from './style';
import Button from "../../../Button/button";

// Imagens
import Github from "/public/icones/github.png";
import Deploy from "/public/icones/deploy.png";

const Card = ({ title, description, imageUrl, buttonLink, deploy }) => {
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
            <div className='about'>
                <p className="card-description">{description}</p>
                <div className="card-button">
                    <Button link={buttonLink} name="GitHub" describe="GitHub" img={Github} />
                    <Button link={deploy} name="Deploy" describe="Deploy" img={Deploy} />
                </div>
            </div>
        </CardContainer>
    );
};

export default Card;
