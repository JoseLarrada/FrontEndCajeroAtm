import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import App from '../components/App'
import InsertarNumero from '../components/InsertarNumero'
import EscogerDinero from '../components/EscogerDinero'
import Transacciones from '../components/Transacciones'
import Reporte from '../components/Reporte'
import {PeticionCajero,PeticionPostCajero} from '../func/FuncionesDePeticiones'
import {GenerarTitulo} from '../func/FuncionesDeEnrutamientos'
function inicio() {
  const texto=GenerarTitulo()
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/ingresarCuentaNequi' element={<InsertarNumero titulo={"Inserte el numero de nequi"} peticion={PeticionCajero} url={'http://localhost:8080/retiroNequi/'}/>}/>
            <Route path='/ingresarCuentaDebito' element={<InsertarNumero titulo={"Inserte el numero de su tarjeta"} peticion={PeticionCajero} url={'http://localhost:8080/retiroTarjeta/'}/>}/>
            <Route path='/ingresarValorRetirar' element={<Transacciones titulo={"Ingrese el valor a retirar, mayor que 10.000"}  peticion={PeticionPostCajero} 
              url={'validarMonto'} mensajeConfirmacion={'Puede Continuar'} urlRedireccion={'/validarCodigo'}/>}/>
            <Route path='/validarCodigo' element={<Transacciones titulo={texto} peticion={PeticionPostCajero} url={'validarClave'} 
            mensajeConfirmacion={'Puede Continuar'} urlRedireccion={'/reciboPago'}/>}/>
            <Route path='/escogerDinero' element={<EscogerDinero/>}/>
            <Route path='/reciboPago' element={<Reporte/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default inicio