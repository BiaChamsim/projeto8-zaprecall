import React from "react";

export default function FaceCard(props){
    const [faceSide, setFaceSide] = React.useState(true);
    
    function virarFace(){
        setFaceSide(false);
    }

    return(
        <>
            { faceSide ? <FrontCard virarFace={virarFace} pergunta={props.pergunta} /> : <BackCard virarCard={props.virarCard} resposta={props.resposta} /> }
        </>
    )
}

function FrontCard (props){
    return(
        <li className="flashcard" > 
            <p>{props.pergunta}</p>
            <img  onClick={props.virarFace} src={"./Vector (6).png"} />
        </li>
    )
}

function BackCard(props){
    
    return(
        <li className="flashcard" > 
            <p>{props.resposta}</p>
            <div className="botoes">
                <button onClick={() => props.virarCard("errado")} className="vermelho">Não lembrei </button>
                <button onClick={() => props.virarCard("meio-certo")} className="laranja">Quase nao lembrei</button>
                <button onClick={() => props.virarCard("certo")} className="verde">Zap!</button>
            </div>
        </li>
    )
}
