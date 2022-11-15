



function criterioFiltro(produ){

    let criterio=false;
    if(producto instanceof Pasaje)
           {
    
                if(_idayvuelta){
                    ((
                    criterio=producto.getDestino()== _destino &&
                    producto.getOrigen()==_origen)||(
                    producto.getDestino()== _origen &&
                    producto.getOrigen()==_destino))         
                    &&
                    /**revisar */
                    producto.getPrecio()== _precio&&
                    producto.getTipoOmnibus()==_tipoOmnibus&&
                    (producto.getFecha().getTime() ==_fecha_.getTime() )&&
                    producto.getCuposDisponibles()>0;
                }
                else{
    
                    criterio=producto.getDestino()== _destino &&
                    producto.getOrigen()==_origen&&
                    producto.getTipoOmnibus()==_tipoOmnibus&&
                    (producto.getFecha().getTime() ==_fecha_.getTime() )&&
                    producto.getCuposDisponibles()>0;
                }
           }
           else
           {
                   criterio= producto.getDestino()== _destino &&       
                    (producto.getFecha().getTime() ==_fecha_.getTime() )&&
                    producto.getCuposDisponibles()>0;
    
           }
           return criterio;
    
    }
    
    
    
    
    function filtrarProducto(_origen,_destino,_fecha_,_idayvuelta,_tipoOmnibus){
        const productosFiltrados=dbProductos.filter( producto => criterioFiltro);
        return productosFiltrados;
    }


let lista=document.getElementById("resultados-de-busqueda");
    
//Esto esta hardcodeado por pruebas, aca tiene que tomarlo del html los parametros
//function filtrarProducto(_origen,_destino,_fecha_,_idayvuelta,_tipoOmnibus)
/*datosFiltro.salida= document.getElementById("lista-terminales-partida");
datosFiltro.destino=     document.getElementById("lista-terminales-destino");
datosFiltro.fecha=   document.getElementById("filtro-fecha");
datosFiltro.tipoOmnibus=   document.getElementById("tipo-omnibus");
datosFiltro.idaVuelta= */ 
const resultadosFiltrados=filtrarProducto(
    datosFiltro.salida,
    datosFiltro.destino,
    datosFiltro.fecha,
    datosFiltro.idaVuelta,
    datosFiltro.tipoOmnibus
     );



//-----------------------------------------------------------


function ejecutarFiltro(){



resultadosFiltrados.forEach(producto=>{
   
var fila=tabla.insertRow();
var celdaSalida=fila.insertCell()
var celdaProductoDesc=fila.insertCell();
var celdaDestino=fila.insertCell();
var celdaFecha=fila.insertCell();
var celdaPrecio=fila.insertCell();
var celdaDisponibles=fila.insertCell();

celdaProductoDesc.innerHTML='---';

if(producto instanceof Pasaje){
    celdaSalida.innerHTML= producto.getOrigen();
}
else{
    celdaSalida.innerHTML= "---"
}

celdaDestino.innerHTML=producto.getDestino();
celdaFecha.innerHTML= producto.getFecha().toLocaleDateString();
celdaPrecio.innerHTML=producto.getPrecio();
celdaDisponibles=producto.getCuposDisponibles();
/*
<th>Productos</th>
                    <th>Salida</th>
                    <th>Destino</th>
                    <th>Fecha</th>
                    <th>Precio</th>
                    <th>Disponibles</th>
                    <th></th>
*/
});

}
var tabla=document.getElementById("grilla"); 

if(tabla) ejecutarFiltro();

