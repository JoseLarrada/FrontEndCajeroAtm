import { useNavigate } from 'react-router-dom'
import HeaderImage from '../assets/trazoTabs.svg'
import {Redireccionar} from '../func/FuncionesDeEnrutamientos'
import './App.css'

function InsertarNumero({titulo}) {
  const  navigate=useNavigate()
  return (
    <div className='pantallaPrincipal'>
      <div className='imagenHeader'>
        <img src={HeaderImage} alt="" />
        <section className='inputSection'>
            <h2 className='titulo'>{titulo}</h2>
            <input type="text" className='Input'/>
        </section>
      </div>
      <div className='opciones'>
          <span className='opcion'>
            <ion-icon name="caret-forward-outline"></ion-icon>
            <h5 onClick={()=>{Redireccionar('/', navigate);}}>Cancelar</h5>
          </span>
          <span className='opcion'>
            <h5>Seguir</h5>
            <ion-icon name="caret-back-outline"></ion-icon>
          </span>
      </div>
    </div>
  )
}

export default InsertarNumero