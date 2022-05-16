import React from "react";

export default function Bottom(props){
    

    return(
            <div className="bottom">
                {props.iconslist.length === 8 && props.iconslist.includes("close-circle") ? 
                <div className="final-message">
                    <p> <img src="./sad 7.png" /> <span>Putz...</span></p> <p>Ainda faltam alguns...</p><p>mas não desanime</p>
                </div>  
                : props.iconslist.length === 8 ?     
                <div className="final-message">
                    <p> <img src="./party 2.png" /> <span> Parabéns! </span></p> <p>Você não esqueceu de</p><p> nenhum flashcard!</p>
                </div>
                : ""} 
                <div>
                    {`${props.iconslist.length}/8`}Concluídos
                    {props.iconslist.map(icon => <ion-icon name={icon}></ion-icon>)}
                </div>
            </div>        
    )
} 