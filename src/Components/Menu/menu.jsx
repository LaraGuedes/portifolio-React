import * as S from "./style";

function Menu(props) {
    return(
        <S.Ul>
            {props.links.map((link, index) => <li key={index} className="li"> {link} </li>)}
        </S.Ul>
    )
}

export default Menu;