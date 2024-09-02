import axios from 'axios';

export const PeticionCajero=async(numeroTarjeta,url)=>{
    try{
        const response = await axios.get(url+numeroTarjeta)
        return response.data
    }catch(error){
        console.error("Error al realizar la peticion: ", error)
        alert(error.response ? error.response.data : error.message)
        throw error;
    }
}

export const PeticionPostCajero=async(valor1,valor2,url)=>{
    try{
        const datos={
            numeroCuenta:valor1,
            valor: valor2
        }
        const response=await axios.post(url,datos)
        return response.data
    }catch(error){
        console.error("Error al realizar la peticion: ", error)
        alert(error.response ? error.response.data : error.message)
        throw error;
    }
}