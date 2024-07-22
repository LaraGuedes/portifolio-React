import React, { useState, useEffect } from 'react';
import Button from "../Button/button";
import * as S from "./style";

// Icones
import Github from "/public/icones/github.png";
import Linkedin from "/public/icones/linkedin.png";

function Main(props) {
    const [displayedJobText, setDisplayedJobText] = useState("");
    const [displayedExText, setDisplayedExText] = useState("");
    const [jobTextIndex, setJobTextIndex] = useState(0);
    const [exTextIndex, setExTextIndex] = useState(0);

    const jobText = props?.job || "";
    const exText = props?.ex || "";

    useEffect(() => {
        if (jobTextIndex < jobText.length) {
            const timer = setTimeout(() => {
                setDisplayedJobText(prev => prev + jobText[jobTextIndex]);
                setJobTextIndex(prev => prev + 1);
            }, 100); // Ajuste o tempo para velocidade de digitação
            return () => clearTimeout(timer);
        }
    }, [jobTextIndex, jobText]);

    useEffect(() => {
        if (exTextIndex < exText.length) {
            const timer = setTimeout(() => {
                setDisplayedExText(prev => prev + exText[exTextIndex]);
                setExTextIndex(prev => prev + 1);
            }, 100); // Ajuste o tempo para velocidade de digitação
            return () => clearTimeout(timer);
        }
    }, [exTextIndex, exText]);

    return (
        <S.Container>
            <div className="about">
                <p className="name">{props?.name}</p>
                <h1 className="job">{displayedJobText}</h1>
                <h1 className="job">{displayedExText}</h1>
                <p>{props?.about}</p>
                <div className="research">
                    <Button 
                        name="GitHub" 
                        link="https://github.com/LaraGuedes"
                        img={Github}
                        describe="GitHub"
                    >
                    </Button>
                    <Button 
                        name="Linkedin" 
                        link="https://www.linkedin.com/in/lara-caleg%C3%A1rio-guedes/"
                        img={Linkedin}
                        describe="Linkedin"
                    >
                    </Button>
                </div>
            </div>
            <div className="img">
                    <img src={props?.img} alt={props?.describe} width="100%"/>
            </div>
        </S.Container>
    );
}

export default Main;
