import * as S from "./style";

function Button(props) {
    return(
        <S.Button>
            <a href={props.link} className="link"> {props.name} </a>   
            <img src={props.img} alt={props.describe} className="img" />
        </S.Button>
    )
}

export default Button;