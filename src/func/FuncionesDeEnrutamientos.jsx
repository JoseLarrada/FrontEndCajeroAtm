export const Redireccionar = (path, navigate) => {
    navigate(path);
};

export const ConstruirUrl = (numeroCuenta,url)=>{
    if(numeroCuenta.startsWith("0") || numeroCuenta.length==6){
        return `http://localhost:8080/retiroNequi/${url}`
    }else{
        return `http://localhost:8080/retiroTarjeta/${url}`
    }
}

export const ConstruirCuenta = (numeroCuenta) =>{
    if(localStorage.getItem('TipoCuenta')=='0'){
        return `0${numeroCuenta}`
    }
    return numeroCuenta
}
export const GenerarTitulo = () => {
    let numeroAleatorio = Math.floor(100000 + Math.random() * 900000);
    if(localStorage.getItem('TipoCuenta')=='0'){
        return `Digite este codigo: ${numeroAleatorio}`
    }
    return 'Ingrese su clave'
}

export const ConvertirCuenta = () =>{
    if(localStorage.getItem('TipoCuenta')=='0'){
        return "Nequi"
    }
    return "Tarjeta Debito"
}

export const ContadorTiempo=()=>{
    setTimeout(function() {
        alert("Han pasado 30 segundos desde que el input obtuvo el foco.");
    }, 30000);
}