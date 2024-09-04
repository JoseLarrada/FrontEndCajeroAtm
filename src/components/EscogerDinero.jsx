import { useNavigate } from 'react-router-dom'
import ImagenFondo from '../assets/fondo2.png'
import {Redireccionar,ConstruirUrl} from '../func/FuncionesDeEnrutamientos'
import {PeticionPostCajero} from '../func/FuncionesDePeticiones'
function EscogerDinero() {
    const navigate=useNavigate()
    const handleClick = async (event) => {
        const valorSeleccionado = event.target.innerText;
        const numeroTarjeta = localStorage.getItem('cuenta');
        const urlConstruida= ConstruirUrl(numeroTarjeta,'validarMonto')
        localStorage.setItem('Monto',valorSeleccionado)
        const respuesta = await PeticionPostCajero(numeroTarjeta,valorSeleccionado,urlConstruida);
        if(respuesta=='Puede Continuar'){
            Redireccionar('/validarCodigo',navigate)
        }else{
            alert(respuesta);
        }
    };
  return (
    <div className='principalDinero'>
        <header className='headerDinero'>
            <img src={ImagenFondo} alt="" />
            <h1>Seleccione una opcion</h1>
        </header>
        <main className='dineroOpciones'>
            <div>
                <span className='opcion valor'>
                    <ion-icon name="caret-forward-outline"></ion-icon>
                    <h5 onClick={handleClick}>20000</h5>
                </span>
                <span className='opcion valor'>
                    <ion-icon name="caret-forward-outline"></ion-icon>
                    <h5 onClick={handleClick}>50000</h5>
                </span>
                <span className='opcion valor'>
                    <ion-icon name="caret-forward-outline"></ion-icon>
                    <h5 onClick={handleClick}>100000</h5>
                </span>
            </div>
            <div>
                <span className='opcion valor'>
                    <h5 onClick={handleClick}>200000</h5>
                    <ion-icon name="caret-back-outline"></ion-icon>
                </span>
                <span className='opcion valor'>
                    <h5 onClick={handleClick}>500000</h5>
                    <ion-icon name="caret-back-outline"></ion-icon>
                </span>
                <span className='opcion valor'>
                    <h5 onClick={()=>{Redireccionar('/ingresarValorRetirar', navigate);}}>Otro Val</h5>
                    <ion-icon name="caret-back-outline"></ion-icon>
                </span>
            </div>
        </main>
        <footer>
            <span className='opcion'>
                <ion-icon name="caret-forward-outline"></ion-icon>
                <h5 onClick={()=>{Redireccionar('/', navigate);}}>Cancelar</h5>
            </span>
        </footer>
    </div>
  )
}

export default EscogerDinero