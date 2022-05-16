import React from "react"; 
import Flashcards from "./Flashcards";
import Topo from "./Topo";
import Bottom from "./Bottom";

export default function Menu (){    

    const [iconslist, setIconslist] = React.useState([]);
    


    return(
        <div className="page2">
            <Topo />
            <Flashcards iconslist={iconslist} setIconslist={setIconslist}/>
            <Bottom iconslist={iconslist} />
        </div>
    )

}