import React, { useRef } from "react";
import * as S from "./style";

function Menu(props) {

    // REf gera uma referencia para o elemento
    const refs = useRef(props.links.map(() => React.createRef()));

    // Pega o classname e desce a página até o componente com esse clas
    const handleScroll = (className) => {
        const element = document.querySelector(`.${className}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.error(`Element not found: .${className}`);
        }
    };

    return (
        <S.Ul>
            {props.names.map((name, index) => (
                <li
                    key={index}
                    className="li"
                    ref={refs.current[index]}
                    onClick={() => handleScroll(name.toLowerCase())}
                >
                    {props.links[index]}
                </li>
            ))}
        </S.Ul>
    );
}

export default Menu;
