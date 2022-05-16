export default function Question (props){ 

    let iconType = "play-outline";

    if (props.statecard === "certo"){
        iconType = "checkmark-circle";

    }else if (props.statecard === "meio-certo"){
        iconType = "help-circle";
        

    }else if(props.statecard === "errado"){
        iconType = "close-circle";
    }


    return(
        <li className={props.statecard} onClick={ props.statecard === "" ? props.virarCard : ()=>"" } > { props.question } <ion-icon name={iconType}></ion-icon></li>
    )
}