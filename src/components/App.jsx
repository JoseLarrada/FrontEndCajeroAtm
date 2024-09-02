import { useNavigate } from 'react-router-dom'
import HeaderImage from '../assets/trazoTabs.svg'
import {Redireccionar} from '../func/FuncionesDeEnrutamientos'
import './App.css'

function App() {
  const  navigate=useNavigate()
  const handleClick = (url,valor) =>{
    localStorage.setItem('TipoCuenta',valor)
    Redireccionar(url, navigate);
  }
  return (
    <div className='pantallaPrincipal'>
      <div className='imagenHeader'>
        <img src={HeaderImage} alt="" />
        <h1 className='tituloBanco'>BANCO UNIVERSITARIO</h1>
      </div>
      <div className='opciones'>
          <span className='opcion'>
            <ion-icon name="caret-forward-outline"></ion-icon>
            <h3 onClick={()=>{handleClick('/ingresarCuentaNequi','0');}}>Retirar con Nequi</h3>
          </span>
          <span className='opcion'>
            <h5 onClick={()=>{handleClick('/ingresarCuentaDebito','1');}}>Retirar con Tarjeta débito</h5>
            <ion-icon name="caret-back-outline"></ion-icon>
          </span>
      </div>
    </div>
  )
}

export default App
