function CarritoCompra(){

    let productos= [];
    let reservas=[];
    let metodoPago='';
    let precioTotal=0; 

 
     this.setTotal=function(){
            let acu=0
            console.log(productos.length);
            if(productos.length>0)
            {
                console.log(productos);
                productos.forEach(elem =>{
                acu= acu + elem.getPrecio();
                })         
            }
            precioTotal=acu;
        }

    this.agregarProducto= function(producto){
        console.log("se agrego: ");
        console.log(producto);
        productos.push(producto);
        this.setTotal();
        
    };

    this.quitarProducto= function(nroItem){
        productos.splice(nroItem,1);
        this.setTotal();
        
    };

    this.comprar=function(){


        /*Aca recien tienen que impactar los cambios en la base de datos*/
        /*Lo anterior son solo consultas*/ 

    };
    this.getTotal=function(){
        return precioTotal;
    };

   

    this.getListaProductos= function(){
        return productos;
    };

  
}

var tabla=document.getElementById("grilla-carrito"); 


function dibujarListadoCarrito(){

carritoDeCompra.getListaProductos().forEach(producto=>{ 

    var fila=tabla.insertRow();

    var celdaProductoDesc=fila.insertCell();
    var celdaSalida=fila.insertCell()
    
    var celdaDestino=fila.insertCell();
    var celdaFecha=fila.insertCell();
    var celdaPrecio=fila.insertCell();
    var celdaDisponibles=fila.insertCell(); 
    var celdaBorrar=fila.insertCell();

//<input type="button" value="Delete" onclick="deleteRow(this)">
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
    celdaDisponibles.innerHTML=producto.getCuposDisponibles();
    /**var button = document.createElement('input');
    button.type = 'button';
    button.id = 'submit';
    button.value = 'Submit';
    button.className = 'btn'; */

    var botonQuitar=document.createElement('input');
    botonQuitar.type='button';
    botonQuitar.className='botones-add-carrito';
    botonQuitar.value ="Quitar";
    botonQuitar.onclick="deleteRow(this)";
    console.log(botonQuitar);
    celdaBorrar.appendChild(botonQuitar);
/*
<th>Productos</th>
                    <th>Salida</th>
                    <th>Destino</th>
                    <th>Fecha</th>
                    <th>Precio</th>
                    <th>Disponibles</th>
                    <th></th>
*/
    });//Fin del ForEach.
    var fila=tabla.insertRow();
    var celdaTotal=fila.insertCell();
    celdaTotal.innerHTML= carritoDeCompra.getTotal();

}

function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("grilla").deleteRow(i);
  }


var carritoDeCompra=new CarritoCompra();

dbProductos.forEach(prod => {
    console.log(dbProductos);
    carritoDeCompra.agregarProducto(prod);
});

dibujarListadoCarrito();


console.log(carritoDeCompra.getTotal());



