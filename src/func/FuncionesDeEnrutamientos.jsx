export const Redireccionar = (path, navigate) => {
    navigate(path);
};

export const ConstruirUrl = (numeroCuenta,url)=>{
    if(numeroCuenta.startsWith("0")){
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
export const GenerarCadenaDeNumeros = () => {
    let numeroAleatorio = Math.floor(100000 + Math.random() * 900000);
    return numeroAleatorio.toString();
}