function Producto(_precio,_fecha,_destino,_CuposDisponibles,_disponibilidad){
    let precio=_precio;
    let fecha=_fecha;
    let destino=_destino;
    let cuposDisponibles=_CuposDisponibles;
    let disponibilidad=_disponibilidad;

this.getPrecio= function(){
    return precio;
}
this.getFecha= function(){
    return fecha;
}
this.getDestino= function(){
    return destino;
}
this.getCuposDisponibles= function(){
    return cuposDisponibles;
}

}


function Pasaje(_precio,_fecha,_destino,_CuposDisponibles,_disponibilidad,_origen,_tipoOmnibus){
    this.super= Producto;
    this.super(_precio,_fecha,_destino,_CuposDisponibles,_disponibilidad);
    let origen=_origen;
    let tipoOmnibus=_tipoOmnibus;

    this.getOrigen= function(){
        return origen;
    }
    this.getTipoOmnibus= function(){
        return tipoOmnibus;
    }
   
}
Pasaje.prototype = new Producto();
Pasaje.prototype.constructor = Pasaje;


function Excursion(_precio,_fecha,_destino,_CuposDisponibles,_disponibilidad,_lugar){
    this.super= Producto;
    this.super(_precio,_fecha,_destino,_CuposDisponibles,_disponibilidad);
    let lugar=_lugar;
}
Excursion.prototype = new Producto();
Excursion.prototype.constructor = Excursion;

function Paquete(_fecha,_destino,_CuposDisponibles,_disponibilidad){
    this.super= Producto;
    this.super(_precio,_fecha,_destino,_CuposDisponibles,_disponibilidad);
    let productos=[];
}
Paquete.prototype = new Producto();
Paquete.prototype.constructor = Paquete;

/*

*/
//INFORMACION DE PRODUCTOS

const dbTerminales=[
    "Terminal de bus de Liniers",
    "Terminal de Merlo San Luis",
    "Terminal de Retiro",
    "Aeropuerto de Bariloche",
    "Terminal de General Alvear",
    "Terminal de Villa Gesell",
    "Terminal de bus de La Plata, Buenos Aires",
    "Terminal de bus de Mendoza",
    "Terminal de bus de Rosario",
    "Terminal de bus de Mar del Plata, Buenos Aires",
    "Ruta 202 y Panamericana"
]

const CantidadAsientos={
    PREMIUM:70,
    ESTANDAR:50,
    ESTANDAR_PLUS:50
}


var dbProductos=[
    new Pasaje(
        5000,
        new Date(2022,11,15),
        dbTerminales[2],
        CantidadAsientos.ESTANDAR,
        true,
        dbTerminales[8]
        )
        ,
    
        new Pasaje(
            6000,
            new Date(2022,11,16),
            dbTerminales[6],
            CantidadAsientos.PREMIUM,
            true,
            dbTerminales[8]
            )
            ,
            new Excursion(
                9000,
                new Date(2022,11,16),
                dbTerminales[6],
                8,
                true,
                dbTerminales[8]
                )
                ,
                new Excursion(
                    3000,
                    new Date(2022,11,17),
                    dbTerminales[6],
                    8,
                    true,
                    dbTerminales[8]
                    )
                    
]