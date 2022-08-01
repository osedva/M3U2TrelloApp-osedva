//crea la lista haciendo llamado desde peticion axios

const crearLista =  (el)=>{  
    let divcrear = document.createElement("div");  //----------se crea el div que va a contener div titulo
    divcrear.setAttribute("class", "div-titulo");  //----------se agrega atributo class
    divcrear.setAttribute("data-orndenColumna", `${el.id}`); //se agrega atributo data para obtener dataset como id 
    
    let h3 = document.createElement("h3");         //----------se crea etiqueta h3 para el Nombre de la lista 
    h3.innerHTML = `${el.nombre}`;                 //----------se agrega nombre de la lista
    let diiv = document.createElement("div");      //----------se crea div que va a contener las tareas
    diiv.setAttribute("id",`col${el.id}`)          //----------se agrega atributo id
    diiv.setAttribute("class","col")               //----------se agrega atributo class
    diiv.setAttribute("data-numerocolumna",`${el.id}`) //------se aggrega atributo data   
    divcrear.appendChild(h3);                      //----------se agrega el h3 al div titulo
    divcrear.appendChild(diiv);                    //----------se agrega div contenedor de las tareas 
    
    return divcrear                                //----------se retorna div creado para agregarlo al DOM
}

//creamos tarea haciendo llamado desde peticion axios  
const crearTarea = (el)=>{                   
    let tarea =                                    //----------clreamos tarea agregamos estructura html
    `<div id="divtarea${el.id}" class="div-tarea" data-idd="${el.id}">
        <h2 title="Eliminar tarea ${el.titulo}" class="eliminar-tarea">x</h2> 
        <h4>${el.titulo}</h4>
        <p><b>Detalle:</b> ${el.detalle}</p>
        <p><b>Persona:</b> ${el.persona}</p>
        <p><b>Inicio:</b> ${unisAfecha(el.inicio)} </p>
        <p><b>Entregar:</b> ${unisAfecha(el.entrega)} </p>
    </div>  
            `
    return tarea                                  //----------se retorna tarea creada para agregar al DOM 
}