let btnAgregarTarea = document.getElementById("agregarTarea");
let btnAgregarColumnas = document.getElementById("agregarColumna");
let divListas = document.getElementById("listas");
let divA = document.getElementById("col1");
let divcol = document.getElementsByClassName("col");

let formTarea = document.getElementById("formTarea");
//let nombreTarea = document.getElementById("nombreTarea");
//let userTarea = document.getElementById("userTarea");
//let diaEntrega = document.getElementById("diaEntrega");
let formTituloColumna = document.getElementById("formTituloColumna");
//let nombreCol = document.getElementById("nombreCol");
let btnCrearTarea = document.getElementById("btnCrearTarea");
let btnCerrarFCT = document.getElementById("btnCerrarFCT");
let btnCrearColumna = document.getElementById("btnCrearColumna");
let btnCerrarFCC = document.getElementById("btnCerrarFCC");
let info = document.getElementById("info");
let checkbox = document.getElementById("btn-mas");



formTarea.style.position = "absolute";



divListas.addEventListener("mouseenter", ()=>{
  
  let items = document.getElementsByClassName("col");
    for (var i = 0; i < items.length; i++) {
      new Sortable(items[i], {
        group: 'nested',
        animation: 150,
        chosenClass: 'chosen',
      });
    }
});



new Sortable.create(divListas, {
  group: 'shared',
  animation: 150,
  //chosenClass: 'chosen'
});


divListas.addEventListener("click",()=>{
  if(checkbox.checked == true){
    checkbox.checked = false;
  }
  
});

checkbox.addEventListener("click",()=>{
  formTarea.style.left = "-70%"; 
  formTituloColumna.style.left = "-70%";
});

btnAgregarTarea.addEventListener("click",()=>{
  checkbox.checked = false;
  
  
  formTarea.style.left = "63%";
  formTarea[0].focus();
});

btnAgregarColumnas.addEventListener("click",()=>{
  checkbox.checked = false;
  
  formTituloColumna.style.left = "63%";
  formTituloColumna[0].focus();
});

btnCerrarFCT.addEventListener("click",()=>{
  formTarea.reset(); 
  formTarea.style.left = "-80%"; 
});

btnCerrarFCC.addEventListener("click",()=>{
  formTituloColumna.reset();
  formTituloColumna.style.left = "-70%";
});


btnCrearTarea.addEventListener("click",()=>{
  
  if(formTarea[0].value == "" || formTarea[1].value == "" || formTarea[2].value == "" || formTarea[3].value == ""){
    formTarea[0].focus();
    info.style.left = "40%"
    info.innerHTML = "Campos son obligatorios"
    setTimeout("info.style.left = '-60%'",2000);
  }else{
    divA.innerHTML += `<div id="divtarea1" class="div-tarea">
                          <h2 title="Eliminar tarea ${formTarea[0].value}">x</h2> 
                          <h4>${formTarea[0].value}</h4>
                          <p><b>Detalle:</b> ${formTarea[1].value}</p>
                          <p><b>Persona:</b> ${formTarea[2].value}</p>
                          <p><b>Inicio:</b> ${fechaF(0,"days")}</p>
                          <p><b>Entregar:</b> ${fechaF(formTarea[3].value ,"days")}</p>
                      </div>  
`
   
      info.style.left = "40%"
      info.innerHTML = "Tarea creada"
      formTarea.reset();
      formTarea[0].focus();
      setTimeout("info.style.left = '-60%'",3000);
  }
});

btnCrearColumna.addEventListener("click",()=>{

  
  if(formTituloColumna[0].value == ""){
    info.style.left = "40%"
    info.innerHTML = "Ingrese nombre columna"
    setTimeout("info.style.left = '-60%'",2000);
    formTituloColumna[0].focus();
  }else{
   
    let divcrear = document.createElement("div");
    divcrear.setAttribute("class", "div-titulo");
    let h3 = document.createElement("h3");
    h3.innerHTML = formTituloColumna[0].value;
    let diiv = document.createElement("div");
    diiv.setAttribute("id",`col${divcol.length + 1}`)
    diiv.setAttribute("class","col" )

    divcrear.appendChild(h3);
    divcrear.appendChild(diiv);
    divListas.appendChild(divcrear);

    info.style.left = "40%"
    info.innerHTML = "Lista creada"
    setTimeout("info.style.left = '-60%'",3000);
    formTituloColumna.reset();
} 
});





formTarea.addEventListener('keydown',(e)=>{         // con esta funcion movemos el focus con tecla enter
  for (var i = 0; i < 4; i++) {
    if(e.target.id == formTarea[i].id){
      var codTecla = e.keyCode;
      if (codTecla === 13){
        formTarea[i + 1].focus();
        }
      if (codTecla === 46){
        formTarea.reset();
        formTarea[0].focus();
      }
    }  
  }  
});   

formTituloColumna.onsubmit = (e) => {
  e.preventDefault();
}
 

