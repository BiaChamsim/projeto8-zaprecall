export default function Init ({setTela}){
    return(
    <div className="container">        
        <img src="./image 1.png"/>
        <h1>ZapRecall</h1>
        <button onClick={() => setTela('tela')} className="button-Page1">Iniciar Recall!</button>        
    </div>
    )
}