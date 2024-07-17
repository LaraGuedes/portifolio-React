import Button from "../Button/button";
import React from "react";
import * as S from "./style";


function Main(props) {
    return(
        <S.Container>
            <div className="about">
                <p className="name">{props?.name}</p>
                <h1 className="job">{props?.job}</h1>
                <h1 className="job">{props?.ex}</h1>
                <p>{props?.about}</p>
                <div className="research">
                    <Button 
                        name="Git" 
                        link=""
                        img=""
                        describe=""
                    >
                    </Button>
                    <Button 
                        name="Git" 
                        link=""
                        img=""
                        describe=""
                    >
                    </Button>
                </div>
            </div>
            <div className="img">
                    <img src={props?.img} alt={props?.describe} width="100%"/>
            </div>
        </S.Container>
    )
}
export default Main;