function Omnibus(_tipoOmnibus,_tipoAsiento,_estado){
    let tipoOmnibus=_tipoOmnibus;
    let tipoAsiento=_tipoAsiento;
    let estado=_estado;
    let asientosOcupados=[];
    let cantAsientos='';

    this.asignarAsiento=function(numero){
        if(asientosOcupados[numero]==true) alert:("el asiento no se encuentra disponible");
        asientosOcupados[numero]=true;
    }
}

/*

const CantidadAsientos={
    PREMIUM:70,
    ESTANDAR:50,
    ESTANDAR_PLUS:50
}

const TipoOmnibus={
    ESTANDAR: "Estandar",
    ESTANDAR_PLUS: "Estandar Plus",
    PREMIUM: "Premium"
}
*/

const TipoAsiento={
    ASIENTO_NORMAL: "Asiento Normal",
    ASIENTO_CAMA: "Asiento Cama"
}

const EstadoOmnibus={
    EN_ORDEN: "En orden",
    EN_REPARACION: "En reparaciòn"
}