import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Componentes
import Button from "../Button/button";

// Curriculo
import Curriculo from "../../assets/curriculo.pdf"; // Coloca na pasta do public

// Icones
import Download from "/icones/download.png";

// Estilo
import * as S from "./styled";

function About(props) {
    const { ref: refInView, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1
    });

    const { ref: refOutView, inView: outOfView } = useInView({
        triggerOnce: false,
        threshold: 0
    });

    return (
        <S.AboutDiv ref={refInView} className='about-section'>
            <motion.div
                className="photo"
                initial={{ x: '-100%', opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : outOfView ? { x: '-100%', opacity: 0 } : {}}
                transition={{ duration: 1 }}
            >
                <img src={props?.img} alt="Imagem" width="100%" />
            </motion.div>
            <div className="about">
                <h2 className="h2">
                    {props?.title}
                </h2>
                <h1 className="h1">
                    {props?.name} <span className="point">...</span>
                </h1>
                <p className="p">
                    {props?.about}
                </p>
                <motion.div
                    className="containerBtn"
                    initial={{ x: '100%', opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : outOfView ? { x: '100%', opacity: 0 } : {}}
                    transition={{ duration: 1 }}
                >
                    <Button
                        name="Curriculo"
                        link={Curriculo}
                        img={Download}
                        describe="Curriculo"
                    />
                </motion.div>
            </div>
            <div ref={refOutView} />
        </S.AboutDiv>
    );
}

export default About;
