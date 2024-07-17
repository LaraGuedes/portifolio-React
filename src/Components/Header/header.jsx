import React from "react";
import * as S from "./style";

import Menu from "../Menu/menu";

function Header(props) {
    return(
        <S.DivHeader>
            {/* <div className="logo">
                <img src="" alt="" />
            </div> */}
            <h1>{props?.name}</h1>
            <Menu links={props.links}>
            </Menu>
        </S.DivHeader>
    )
}

export default Header;