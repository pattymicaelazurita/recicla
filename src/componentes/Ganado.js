import React from "react";
import { useNavigate } from "react-router-dom";

const Ganado = () => {
    const navegacion=useNavigate();
    return (
        <>
        <div className="encabezado">
            <h1>¡CORRECTO!</h1>
        </div>
        <div className="imagen">
        <img src={require(`../assets/ganar.png`)} alt=""/>
        </div>
        <button  className="boton" onClick={()=>navegacion("/juego/")}>Volver a jugar</button>
        </>
    )
}

export default Ganado