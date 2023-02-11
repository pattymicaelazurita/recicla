import { useEffect, useState } from "react";
import { PALABROS } from "../assets/preguntas";

const Juego = () => {
    const letras="ABCDEFGHIJKLMNÑOPQRSTUVWXYYZ"
    const letras_array=letras.split("")
    const [azar,setAzar]=useState(0);
    const [palabra,setPalabra]=useState([])
    const [misLetras,setMisLetras]=useState([])
    useEffect(()=>{
        setAzar(Math.floor(Math.random()*PALABROS.length))
    },[])
    
    useEffect(()=>{
        setPalabra(PALABROS[azar].palabro.split(""))
    },[azar])
    
    const pulsado=(e)=>{
        const letra=e.target.innerHTML;
        setMisLetras([...misLetras,(letra)])
    }

    return (
        <>
        <div className="pregunta">
            {PALABROS[azar].pregunta}
        </div>
        <div className="palabra">
            {
                palabra.map((letra,i)=>(
                    misLetras.indexOf(letra)===-1
                    ?
                        <div className="palo" key={i}></div>
                    :
                        <div className="palo" key={i}>{letra.toUpperCase()}</div>
                ))
            }
        </div>
        <div className="botones">
            {
                letras_array.map((letra)=>(
                    <button key={letra} onClick={pulsado} >{letra}</button>
                ))
            }
        </div>
        <div className="imagen"></div>
        </>
    )
}

export default Juego