import * as S from "./style";

function Button(props) {
    return (
        <S.Button>
            <a href={props?.link} className="link" download="curriculoLara.pdf" target="_blank" rel="noopener noreferrer">
                {props?.name}
                <img src={props?.img} alt={props?.describe} className="img" />
            </a>   
            
        </S.Button>
    );
}

export default Button;
