import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import App from '../components/App'
import InsertarNumero from '../components/InsertarNumero'
function inicio() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>}/>
            <Route path='/ingresarCuentaNequi' element={<InsertarNumero titulo={"Inserte el numero de nequi"}/>}/>
            <Route path='/ingresarCuentaDebito' element={<InsertarNumero titulo={"Inserte el numero de su tarjeta"}/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default inicio