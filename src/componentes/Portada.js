import { useNavigate } from "react-router-dom"

const Portada = () => {
    const navegacion=useNavigate();
    return (
        <>
        <div className="encabezado"> 
            <h1>RECICLAJE</h1>
            <h2>Patty Zurita</h2>
        </div>
        <div className="instruccion"> 
            <p><strong> El juego consiste en descubrir la palabra asociada de acuerdo a la descripción. Para jugar debes dar click en aquellas letras
                que considera forman parte de la respuesta. Logra descubrir la palabra previo a que la basura se apodere del mundo. 
                </strong></p>
        </div>
        <div className="imagen">
            <img src={require(`../assets/intro.jpg`)} alt=""/>
        </div>
        <button className="boton" onClick={()=>navegacion("/juego")}><strong> Jugar</strong></button>
        </>
        
    )
}

export default Portada