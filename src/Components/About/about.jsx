import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Button from "../Button/button";
import * as S from "./styled";

// Curriculo
import Curriculo from "../../assets/curriculo.pdf";

// Icones
import Download from "/public/icones/download.png";

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
        <S.AboutDiv ref={refInView}>
            <motion.div 
                className="photo"
                initial={{ x: '-100%', opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : outOfView ? { x: '-100%', opacity: 0 } : {}}
                transition={{ duration: 1 }}
            >
                <img src={props?.img} alt="" width="100%" />
            </motion.div>
            <div className="about">
                <h2 className="h2">
                    {props?.title}
                </h2>
                <h1 className="h1">
                    {props?.name} <span className="point">...</span>
                </h1>
                <p className="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste facilis nesciunt a optio in ipsam maxime sint incidunt praesentium esse soluta adipisci, animi placeat reprehenderit rerum fugiat ad unde quae cupiditate harum nemo autem eius at? Sed deserunt facilis sint repellat. Explicabo, animi delectus amet est consectetur distinctio sint ipsa.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, cum sit? Quas corporis libero temporibus quaerat repellat officia repudiandae similique nulla, nisi excepturi sunt soluta laudantium maxime beatae odit necessitatibus!
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
            <div ref={refOutView} style={{ position: 'absolute', bottom: '100vh' }} />
        </S.AboutDiv>
    );
}

export default About;
