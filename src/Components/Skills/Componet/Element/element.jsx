import React, { useState } from "react";
import * as S from "./style";

function Element(props) {
    const [isClicked, setIsClicked] = useState(false);

    const handleElementClick = () => {
        setIsClicked(true);

        // Remove a classe de clique após 300ms para retornar ao estado original
        setTimeout(() => {
            setIsClicked(false);
        }, 300);
    };

    return (
        <S.ContainerElement
            className={isClicked ? 'clicked' : ''}
            onClick={handleElementClick}
        >
            <img
                src={props?.img}
                alt={props?.describe}
                className={`img ${isClicked ? 'clicked' : ''}`}
            />
            <p className="text">{props?.name}</p>
        </S.ContainerElement>
    );
}

export default Element;
