import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Element from "../Element/element";
import * as S from "./style";

// GIFs
const gifs = [
    { src: '/gifs/estrelas.gif', className: 'top-right' },
    { src: '/gifs/fogos.gif', className: 'bottom-left' },
];

const habilidades = [
    { nome: 'CSS', imagem: '/icones/css.png', describe: 'CSS' },
    { nome: 'HTML', imagem: '/icones/html.png', describe: 'HTML' },
    { nome: 'React', imagem: '/icones/react.png', describe: 'React' },
    { nome: 'Angular', imagem: '/icones/angular.png', describe: 'Angular' },
    { nome: 'JS', imagem: '/icones/js.png', describe: 'JS' },
    { nome: 'TS', imagem: '/icones/ts.png', describe: 'TS' },
    { nome: 'Python', imagem: '/icones/python.png', describe: 'Python' },
    { nome: 'Java', imagem: '/icones/java.png', describe: 'Java' },
    { nome: 'SQL', imagem: '/icones/sql.png', describe: 'SQL' },
];

function Skills(props) {
    const [visible, setVisible] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1
    });

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;

            if (inView && currentScrollPos > prevScrollPos) {
                setVisible(true);
            } else if (currentScrollPos === 0) {
                setVisible(false);
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [inView, prevScrollPos]);

    return (
        <S.SkillsComponent ref={ref}>
            <motion.div 
                initial={{ x: '100%', opacity: 0 }}
                animate={visible ? { x: 0, opacity: 1 } : { x: '100%', opacity: 0 }}
                transition={{ duration: 1 }}
            >
                <h2 className="h1">Tecnologias</h2>
                <div>
                    {habilidades.map((habilidade, index) => (
                        <Element 
                            key={index} 
                            img={habilidade?.imagem} 
                            name={habilidade?.nome} 
                            describe={habilidade?.describe} 
                        />
                    ))}
                </div>
                {gifs.map((gif, index) => (
                    <S.CornerGif 
                        key={index} 
                        src={gif?.src} 
                        className={gif?.className} 
                        alt={`Corner GIF ${index}`}
                    />
                ))}
            </motion.div>
        </S.SkillsComponent>
    );
}

export default Skills;
