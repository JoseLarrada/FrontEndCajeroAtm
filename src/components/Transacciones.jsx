import { useNavigate } from 'react-router-dom'
import { useRef, useEffect, useState } from 'react'
import HeaderImage from '../assets/trazoTabs.svg'
import {Redireccionar,ConstruirUrl} from '../func/FuncionesDeEnrutamientos'
import React from 'react'

function Transacciones({titulo,peticion,url,mensajeConfirmacion,urlRedireccion}) {
    const [tituloState, setTituloState] = useState('')
    const  navigate=useNavigate()
    const inputRef=useRef()
    const elegirNumeroDeTarjeta = () => {
      if(titulo=='Ingrese el valor a retirar, mayor que 10.000'){
          return localStorage.getItem('cuenta');
      }
      if(localStorage.getItem('TipoCuenta')=='0'){
        const numStr = titulo.split(' ').pop();
        return numStr;
      }
      return localStorage.getItem('cuenta');
    }
    const numeroTarjeta=elegirNumeroDeTarjeta(); 
    const seguirTransaccion = async ()=>{
      const valor= inputRef.current.value
      if(titulo=='Ingrese el valor a retirar, mayor que 10.000'){
          localStorage.setItem('Monto',valor)
      }
      const urlConstruida= ConstruirUrl(numeroTarjeta,url)
      const respuesta = await peticion(numeroTarjeta,valor,urlConstruida);
      if(respuesta==mensajeConfirmacion){
        Redireccionar(urlRedireccion,navigate)
      }else{
        alert(respuesta)
      }
    }
    useEffect(()=>{
      setTituloState(titulo)
    },[titulo]) 
  return (
    <div className='pantallaPrincipal'>
      <div className='imagenHeader'>
        <img src={HeaderImage} alt="" />
        <section className='inputSection'>
            <h2 className='titulo'>{tituloState}</h2>
            <input type="text" className='Input' ref={inputRef}/>
        </section>
      </div>
      <div className='opciones'>
          <span className='opcion'>
            <ion-icon name="caret-forward-outline"></ion-icon>
            <h5 onClick={()=>{Redireccionar('/', navigate);}}>Cancelar</h5>
          </span>
          <span className='opcion'>
            <h5 onClick={seguirTransaccion}>Seguir</h5>
            <ion-icon name="caret-back-outline"></ion-icon>
          </span>
      </div>
    </div>
  )
}

export default Transacciones