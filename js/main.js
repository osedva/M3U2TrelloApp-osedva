//   se crean las variables de los elementos a utilizar

const btnAgregarTarea = document.getElementById("agregarTarea"),
      btnAgregarColumnas = document.getElementById("agregarColumna"),
      btnBd = document.getElementById("btnBd"),

      divListas = document.getElementById("listas"),
      
      divcol = document.getElementsByClassName("col"),
      formTarea = document.getElementById("formTarea"),
      formTituloColumna = document.getElementById("formTituloColumna"),
      btnCrearTarea = document.getElementById("btnCrearTarea"),
      btnCerrarFCT = document.getElementById("btnCerrarFCT"),
      btnCrearColumna = document.getElementById("btnCrearColumna"),
      btnCerrarFCC = document.getElementById("btnCerrarFCC"),
      info = document.getElementById("info"),
      checkbox = document.getElementById("btn-mas");


//formTarea.style.position = "absolute";


//con el evento mouseenter del div que contiene las listas le damos funcion a sortable
divListas.addEventListener("mouseenter", ()=>{
  let items = document.getElementsByClassName("col"); //llamamos todos los elementos con la class col 
  
    for (let i = 0; i < items.length; i++) {    //------con el for iteramos las listas que contienen class col
      new Sortable(items[i], {                  //------creamos new sortable para arrastrar y soltar tareas
        group: 'nested',                        //------indicamos con este atributo que el dragable es en grupo
        animation: 150,                         //------le damos una duracion a la animacion de 150 milesegundos
        chosenClass: 'chosen',                  //------al arrastrar la tarea llamamos la class que le da animacion 3D 
        filter: ".eliminar-tarea",              //------le indicamos que al eliminar tarea no tenga efecto 3D
        onAdd:  (e)=>{                          //------al mover tarea de una a otra lista llamamos funcion pasando id y estado  
          let id = e.item.dataset.idd;          //------variable para otener id almacenado en un dataset
          let estado = items[i].dataset.numerocolumna;//variable para obtener estado osea numero de columna
          putEstadoTarea(id,estado)             //------llamado de la funcion que actualisa el estado de la tarea
        }, 
        
      });
    }
});


// creamos new sortable para mover las listas (columnas)
new Sortable.create(divListas, {
  group: 'shared',
  animation: 150,
});



// funcion para mostrar formulario de crear tarea
btnAgregarTarea.addEventListener("click",()=>{
  checkbox.checked = false;            //--para ocultar btns de menu 
  formTarea.style.left = "63%";        //--trae el formulario tareas al frente
  formTarea[0].focus();                //--le indicamos que el puntero se ubique en la primer caja de texto
});
// funcion para mostrar formulario de crear listas
btnAgregarColumnas.addEventListener("click",()=>{
  checkbox.checked = false;            //--para ocultar btns de menu
  formTituloColumna.style.left = "63%";//--trae el formulario tareas al frente
  formTituloColumna[0].focus();        //--le indicamos que el puntero se ubique en la primer caja de texto
});
// funcion para ocultar btns de menu al abrir hoja de calculo como bd
btnBd.addEventListener("click",()=>{   
  checkbox.checked = false;
});
// funcion para cerrar formulario de crear tarea
btnCerrarFCT.addEventListener("click",()=>{
  formTarea.reset(); 
  formTarea.style.left = "-80%"; 
});
// funcion para cerrar formulario de crear lista
btnCerrarFCC.addEventListener("click",()=>{
  formTituloColumna.reset();
  formTituloColumna.style.left = "-70%";
});

//funcion para crear tarea
btnCrearTarea.addEventListener("click",()=>{
  //validamos que los campos de texto tengan informacion
  if(formTarea[0].value == "" || formTarea[1].value == "" || formTarea[2].value == "" || formTarea[3].value == ""){
    formTarea[0].focus();                //-------en caso que no haya datos colocamos el puntero en la primer caja de texto
    info.style.left = "40%"              //-------mostramos mensaje de informacion  
    info.innerHTML = "Campos son obligatorios" //-agregamos el mensaje a mostrar
    setTimeout("info.style.left = '-60%'",2000);//le damos dos segundos de tiempo en vista al mensaje
  }else{
    postDatosTareaBd(formTarea);         //-------llamamos la funcion que manda los datos a la bd y pasamos por parametro objeto form  
  }
});

// funcion para crear tarea 
btnCrearColumna.addEventListener("click",()=>{
  if(formTituloColumna[0].value == ""){
    info.style.left = "40%"
    info.innerHTML = "Ingrese nombre columna"
    setTimeout("info.style.left = '-60%'",2000);
    formTituloColumna[0].focus();
  }else{
    postDatoListaBd(formTituloColumna); 
  } 
});

//funcion para eliminar tarea
divListas.addEventListener("click", (e)=>{
  let id = e.path[1].dataset.idd; 
  let iddiv = e.path[1].id;  
  deleteTarea(id,iddiv)
  
})
// con esta funcion movemos el focus con tecla enter en form tarea
formTarea.addEventListener('keydown',(e)=>{         
  for (let i = 0; i < 4; i++) {
    if(e.target.id == formTarea[i].id){
      var codTecla = e.keyCode;
      if (codTecla === 13){
        formTarea[i + 1].focus();
      }
    }  
  }  
});   


 

