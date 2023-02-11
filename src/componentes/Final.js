import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Contexto from "../contexto/Contexto";

const Final = () => {
    const {laCorrecta}=useContext(Contexto);
    const navegacion=useNavigate();
    return (
        <>
        <div className="encabezadoFin">
            <h1><strong>¡OH, NO! INTENTO FALLIDO</strong></h1>
            <h2>La respuesta correcta era: <strong>{laCorrecta}</strong></h2>
        </div>
        <div className="imagenOtra">
            <img src={require(`../assets/perder.png`)} alt=""/>
        </div>
        <button  className="boton" onClick={()=>navegacion("/juego/")}>Volver a jugar</button>
        </>
    )
}

export default Final