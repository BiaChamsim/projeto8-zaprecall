import Item from "./Item";

const cards = [
    {
        question:"Pergunta 1", 
        front: "O que é JSX?",
        back: "Uma extensão de linguagem do JavaScript",
    },
    {
        question:"Pergunta 2", 
        front: "O React é __",
        back: "uma biblioteca JavaScript para construção de interfaces",
    },
    {
        question:"Pergunta 3", 
        front: "Componentes devem iniciar com __ ",
        back: "letra maiúscula",
    },
    {
        question:"Pergunta 4", 
        front: "Podemos colocar __ dentro do JSX",
        back: "expressões",
    },    
    {
        question:"Pergunta 5", 
        front: "O ReactDOM nos ajuda __ ",
        back: "interagindo com a DOM para colocar componentes React na mesma",
    },    
    {
        question:"Pergunta 6", 
        front: "Usamos o npm para __ ",
        back: "gerenciar os pacotes necessários e suas dependências",
    },    
    {
        question:"Pergunta 7", 
        front: "Usamos props para __ ",
        back: "passar diferentes informações para componentes",
    },    
    {
        question:"Pergunta 8", 
        front: "Usamos estado (state) para __ ",
        back: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },    
]

export default function Flashcards(props){
    return(
        <ul>
            {cards.map((card, index) => <Item iconslist={props.iconslist} setIconslist={props.setIconslist} key={index} question={card.question} pergunta={card.front} resposta={card.back} />)}
        </ul>
    )
}