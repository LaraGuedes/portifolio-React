import React from "react";
import Button from "../Button/button";
import * as S from "./styled";

function About(props) {
    return(
        <S.AboutDiv>
            <div className="img">
                <img src={props.img} alt="" width="100%"/>
            </div>
            <div className="about">
                <h2 className="h2">
                    {props.title}
                </h2>
                <h1 className="h1"> 
                    {props.name} <span className="point">...</span>
                </h1>
                <p className="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste facilis nesciunt a optio in ipsam maxime sint incidunt praesentium esse soluta adipisci, animi placeat reprehenderit rerum fugiat ad unde quae cupiditate harum nemo autem eius at? Sed deserunt facilis sint repellat. Explicabo, animi delectus amet est consectetur distinctio sint ipsa.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, cum sit? Quas corporis libero temporibus quaerat repellat officia repudiandae similique nulla, nisi excepturi sunt soluta laudantium maxime beatae odit necessitatibus!
                </p>
                <Button 
                        name="Curriculo" 
                        link=""
                        img=""
                        describe=""
                    >
                    </Button>
            </div>
        </S.AboutDiv>
    )
}

export default About;