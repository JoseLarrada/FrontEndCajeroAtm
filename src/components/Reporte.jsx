import ImagenFondo from '../assets/fondo2.png'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState  } from 'react'
import {PeticionCajero} from '../func/FuncionesDePeticiones'
import {ConvertirCuenta} from '../func/FuncionesDeEnrutamientos'
function Reporte() {
    const [resultado, setResultado] = useState([]);
    const  navigate=useNavigate()
    const [cuenta, setCuenta] = useState([]);
    const cargarInformacion = async()=>{
        const respuesta= await PeticionCajero(localStorage.getItem('Monto'),'http://localhost:8080/retiroNequi/dispensarDinero/')
        setResultado(respuesta);
        const tipoCuenta=ConvertirCuenta();
        setCuenta(tipoCuenta)
    }

    useEffect(()=>{
        cargarInformacion()
    },[])  
  return (
    <div className='SeccionPrincipalRecibo'>
        <div className='headerDinero retirar'>
            <img src={ImagenFondo} alt="" />
            <section className='SeccionRecibo'>
                <span className='textoSpan'>
                    <h2>Banco Universitario</h2>
                    <h4>Monto retiro: {localStorage.getItem('Monto')}</h4>
                </span>
                <div className='SeccionBilletes'>
                    <h4>Billetes a entregar</h4>
                    {Object.entries(resultado).map(([denominacion, cantidad], index) => (
                        <span key={index} className='spanDatos'>
                            <h5>{denominacion} = {cantidad}</h5>
                        </span>
                    ))}
                </div>
                <span className='textoSpan'>
                    <h4>Tipo de cuenta: {cuenta}</h4>
                    <h5>Cuenta: {localStorage.getItem('cuenta')}</h5>
                </span>
            </section>
        </div>
        <span className='opcion opcionSalir'>
            <h5 onClick={()=>{navigate('/')}}>Seguir</h5>
            <ion-icon name="caret-back-outline"></ion-icon>
        </span>       
    </div>
  )
}

export default Reporte