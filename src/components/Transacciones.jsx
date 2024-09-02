import { useNavigate } from 'react-router-dom'
import { useRef, useEffect } from 'react'
import HeaderImage from '../assets/trazoTabs.svg'
import {Redireccionar,ConstruirUrl,GenerarCadenaDeNumeros} from '../func/FuncionesDeEnrutamientos'
import React from 'react'

function Transacciones({titulo,peticion,url,mensajeConfirmacion,urlRedireccion}) {
    const  navigate=useNavigate()
    const inputRef=useRef()
    const seguirTransaccion = async ()=>{
        const numeroTarjeta = localStorage.getItem('cuenta'); const valor= inputRef.current.value
        const urlConstruida= ConstruirUrl(numeroTarjeta,url)
        const respuesta = await peticion(numeroTarjeta,valor,urlConstruida);
        if(respuesta==mensajeConfirmacion){
          Redireccionar(urlRedireccion,navigate)
        }else{
          alert(respuesta)
        }
    }
    const cargar = ()=>{
      if(localStorage.getItem('TipoCuenta')==0){
        alert(GenerarCadenaDeNumeros())
      }
    }
    
    useEffect(()=>{
      cargar()
    })
  return (
    <div className='pantallaPrincipal'>
      <div className='imagenHeader'>
        <img src={HeaderImage} alt="" />
        <section className='inputSection'>
            <h2 className='titulo'>{titulo}</h2>
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