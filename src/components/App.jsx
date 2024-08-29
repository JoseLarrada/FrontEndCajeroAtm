import { useNavigate } from 'react-router-dom'
import HeaderImage from '../assets/trazoTabs.svg'
import {Redireccionar} from '../func/FuncionesDeEnrutamientos'
import './App.css'

function App() {
  const  navigate=useNavigate()
  return (
    <div className='pantallaPrincipal'>
      <div className='imagenHeader'>
        <img src={HeaderImage} alt="" />
        <h1 className='tituloBanco'>BANCO UNIVERSITARIO</h1>
      </div>
      <div className='opciones'>
          <span className='opcion'>
            <ion-icon name="caret-forward-outline"></ion-icon>
            <h3 onClick={()=>{Redireccionar('/ingresarCuentaNequi', navigate);}}>Retirar con Nequi</h3>
          </span>
          <span className='opcion'>
            <h5 onClick={()=>{Redireccionar('/ingresarCuentaDebito', navigate);}}>Retirar con Tarjeta débito</h5>
            <ion-icon name="caret-back-outline"></ion-icon>
          </span>
      </div>
    </div>
  )
}

export default App
