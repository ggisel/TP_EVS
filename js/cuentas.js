
 function Cliente(_nombre,_apellido,_dni,_fechanac,_tel,_mPago){
    let nombre=_nombre;
    let apellido=_apellido;
    let dni=_dni;
    let fechaNac=_fechanac;
    let tel=_tel;
    let mPago=_mPago;
    let puntos=0;
    let gastomensual=0;
    let encuesta='';
}

const ValoracionEncuesta={   
    MALA: "Mala",
    INTERMEDIA: "Intermedia",
    BUENA: "Buena"
}


function MPago(_tipo,_titular){
    let tipo=_tipo;
    let titular=_titular;
}
const TipoPago={   
    TARJETA: "Tarjeta",
    CUENTA_BANCARIA: "Cuenta bancaria",
    MERCADO_PAGO: "Mercado pago"
}




function TarjetaCredito(_numero,_titular,_vencimiento,_codigo,_tipo,_tipoTarjeta){
    this.super =MPago;
    this.super(_tipo,_titular);
    let numero=_numero;
    let titular=_titular;
    let vencimiento=_vencimiento;
    let codigo=_codigo;
    let tipoTarjeta=_tipoTarjeta;
}
TarjetaCredito.prototype = new MPago();
TarjetaCredito.prototype.constructor = TarjetaCredito;

const TipoTarjeta={   
    CREDITO: "Crédito",
    DEBITO: "Débito"
}



function CuentaBancaria(_tipo,_titular,_alias,_cvu){
    this.super =MPago;
    this.super(_tipo,_titular);
    let alias=_alias;
    let cvu=_cvu;
}
CuentaBancaria.prototype = new MPago();
CuentaBancaria.prototype.constructor = CuentaBancaria;



function MercadoPago(_tipo,_titular,_alias,_cvu,_tel){
    this.super =MPago;
    this.super(_tipo,_titular);
    let alias=_alias;
    let cvu=_cvu;
    let tel=_tel;
}
CuentaBancaria.prototype = new MPago();
CuentaBancaria.prototype.constructor = CuentaBancaria;

//INFORMACION DE CUENTAS ASOCIADAS**************************************************

var dbCuentas = [
    {
        nombreDeUsuario :"giselle90",
        contraseña:"123456",
        cliente: new Cliente(
            "Giselle",
            "isola",
            35348863,
            new Date(30/08/1990),
            1134418984,
            new TarjetaCredito(
                455645455465454,
                "Giselle Isola",
                new Date(2025,10,10),
                265,
                TipoPago.TARJETA
                )
            ),
        permisos:"usuario"
    },

    {
        nombreDeUsuario :"mel",
        contraseña:"123456",
        cliente: new Cliente(
            "Melanie",
            "Albornoz",
            35348863,
            new Date(2000,10,10),
            1134418984,
            new TarjetaCredito(
                455645455465454,
                "Melanie Albornoz",
                new Date(2025,03,11),
                235,
                TipoPago.CUENTA_BANCARIA
                )
            ),
        permisos:"usuario"
        }
]




function iniciarSesion(){
    //aca tomamos los valores del html
    var usuarioLogin = document.getElementById("usuario").value;
    var contrasenia = document.getElementById("contraseña").value;
    //comparamos con los valores existentes y guardamos en la variable
    var cuentasCoincidentes = dbCuentas.filter(c=> c.nombreDeUsuario == usuarioLogin);
    
    //si la variable guardo algo (cantidad de coincidencias >0)
    if (cuentasCoincidentes.length>0){
        cuentasCoincidentes.forEach(usuario => {
            if(usuario.contraseña ===  contrasenia )
            {
                
                cuentaLogueada.usuario=usuario.usuarioLogin;
                cuentaLogueada.contrasenia=usuario.contrasenia;
                alert("Cuenta logueada!");
                window.location.replace("./index.html");
            } 
            else
            {
                alert("Usuario o contraseña invalidos.");
            }        
             
        });
        
    }
    //si no hubo ninguna coincidencia
    else{
        alert("Su cuenta no se encuentra registrada.")
    }
}

function registrarse(){

    //tomamos los valores del form en el html
    
    var nombreUsuario = document.getElementById("nombreUsuario").value;
    var contrasenia = document.getElementById("contrasenia").value;
    var dni = document.getElementById("DNI").value;
    var nombres = document.getElementById("nombres").value;
    var apellido = document.getElementById("apellido").value;
    var direccion = document.getElementById("direccion").value;
    var fechaNac = document.getElementById("fechaNac").value;
    var medioPago = document.getElementById("medioPago").value;
    var idMedioPago = document.getElementById("idMedioPago").value;
    var telefono = document.getElementById("telefono").value;
    
    let cuentasCoincidentes = dbCuentas.filter(cuenta=> cuenta.nombreDeUsuario == nombreUsuario);
   

        if(!cuentasCoincidentes.length == 0){
            alert("Nombre de usuario en uso")
        }
        //guardamos en nuestra variable "dbcuentas" que esta arriba de todo por medio de un push.
        else{
            dbCuentas.push({
                nombreDeUsuario :"giselle90",
                contraseña:"123456",
                cliente: new Cliente(
                        Giselle,
                        isola,
                        35348863,
                        new Date(1990,08,30),
                        1134418984,
                        new TarjetaCredito(
                            455645455465454,
                            "Giselle Isola",
                            new Date(2025,05,26),
                            265,
                            TipoPago.TARJETA
                            )
                 ),
                permisos:"usuario"
                });
            
            alert("Cuenta registrada con exito")
            

        }

}

function prueba(){
    window.location="../index.html";
}


