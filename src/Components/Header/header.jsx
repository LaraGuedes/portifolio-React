import React from "react";

// Component
import Menu from "./Component/Menu/menu";

// Estilo
import * as S from "./style";

function Header(props) {
    return(
        <S.DivHeader>
            <div className="logo">
                <img src={props?.img} alt={props?.describe} width="100%" />
            </div>
            <Menu links={props?.links}>
            </Menu>
        </S.DivHeader>
    )
}

export default Header;