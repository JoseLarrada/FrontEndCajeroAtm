import { useNavigate } from 'react-router-dom'
import { useRef } from 'react'
import HeaderImage from '../assets/trazoTabs.svg'
import {Redireccionar,ConstruirCuenta} from '../func/FuncionesDeEnrutamientos'
import './App.css'

function InsertarNumero({titulo,peticion,url}) {
  const  navigate=useNavigate()
  const inputRef=useRef()
  const seguirTransaccion = async ()=>{
      const numeroTarjeta = inputRef.current.value;
      localStorage.setItem('cuenta',ConstruirCuenta(numeroTarjeta))
      const respuesta = await peticion(numeroTarjeta, url);
      if(respuesta=='Puede Continuar'){
        Redireccionar('/escogerDinero', navigate)
      }else{
        alert(respuesta)
      }
  }
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

export default InsertarNumero