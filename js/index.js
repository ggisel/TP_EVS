 var cuentaLogueada ={
        usuario:'',
        contrasenia:''
    };

var datosFiltro ={
    salida:'',
    destino:'',
    fecha:'',
    tipoOmnibus:'',
    idaVuelta:''
}

function iniciar(){

   
/*
//aca abrimos el archivo json que vamos a usar
var archivoJSON= new XMLHttpRequest();
archivoJSON.open("GET","https://my-json-server.typicode.com/ggisel/dbstylebus/db",false);
archivoJSON.send(null);


    let datosJson= JSON.parse(archivoJSON.responseText);
    //traemos DEL HTML EH! el elemento por su id, en este caso, la lista de terminales
    */
    let lista=document.getElementById("lista-terminales-partida");
    let lista2=document.getElementById("lista-terminales-destino");
    

        dbTerminales.forEach(terminal=>{
        //creamos un elemento tipo "opcion"
        let opcion= document.createElement("option");
        //lo rellenamos con el nombre de la terminal que figura en el json
        //opcion.append(terminal.nombre);
        opcion.append(terminal);
        //y lo agregamos a la lista que llamamos del html, en el html digamos.
        lista.append(opcion);
    
    });

    dbTerminales.forEach(terminal=>{
        //creamos un elemento tipo "opcion"
        let opcion= document.createElement("option");
        //lo rellenamos con el nombre de la terminal que figura en el json
        opcion.append(terminal);
        //y lo agregamos a la lista que llamamos del html, en el html digamos.
        lista2.append(opcion);
    
    });


}

function ejecutarFiltro(){

datosFiltro.salida= document.getElementById("lista-terminales-partida");
datosFiltro.destino=     document.getElementById("lista-terminales-destino");
datosFiltro.fecha=   document.getElementById("filtro-fecha");
datosFiltro.tipoOmnibus=   document.getElementById("tipo-omnibus");
datosFiltro.idaVuelta=   document.getElementById("ida-vuelta");
console.log(datosFiltro);
window.location.replace("./productosFiltrados.html");
}

iniciar();
