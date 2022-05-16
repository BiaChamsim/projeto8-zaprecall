import Question from "./Question";
import FaceCard from "./FaceCard";
import React from "react";

export default function Item (props){
    
    const [sidecard, setSidecard] = React.useState(true);
    const [statecard , setStatecard] = React.useState("");
    
    function virarCard(state){
        setSidecard(!sidecard);
        setStatecard(state);

        if (state === "certo"){
            props.setIconslist([...props.iconslist,"checkmark-circle"])
    
        }else if (state === "meio-certo"){
            props.setIconslist([...props.iconslist,"help-circle"])
            
    
        }else if(state === "errado"){
            props.setIconslist([...props.iconslist,"close-circle"])
        }
        
    }


    
    return(
        <>
            { sidecard ? <Question iconslist={props.iconslist} setIconslist={props.setIconslist} virarCard={virarCard} question={props.question} statecard={statecard} /> : <FaceCard virarCard={virarCard} pergunta={props.pergunta} resposta={props.resposta} /> }
        </>
    )
}