//let url = 'https://api.sheety.co/38c59b126ee60a47a0fad27bf674b91f/bdTrello';   //Bd Prueba ya se han hecho varrias peticiones


let url = 'https://api.sheety.co/57e041dba41b21a01e73e7edb3783072/bdTrello';   //Bd  en produccion lleva 50 peticiones y se pueden hacer 200

//funcion peticion get axios para obtener listas (columnas) y crearlas segun registro de bd
const getDatosListasBd = async () => {
  try {
    let res = await axios.get(`${url}/listas`),
      json = await res.data.listas;
      let fragment = document.createDocumentFragment();
      json.forEach(el => {
      fragment.appendChild(crearLista(el));
      });
      divListas.appendChild(fragment);
  } catch (err) {
    let alerta = err.statusText || "Ocurrió un error";
    mensaje(alerta)
  }
}
getDatosListasBd() //llamar funcion get datos listas al iniciar programa

//funcion peticion get axios para obtener tareas y crearlas segun registro bd
const getDatosTareaBd = async () => {
    try {
      let res = await axios.get(`${url}/tareas`),
        json = await res.data.tareas;
          json.forEach(el => {
            let divcolumnas = document.getElementById(`col${el.estado}`)
            divcolumnas.innerHTML += crearTarea(el);
          });
        } catch (err) {
          let alerta = err.statusText || "Ocurrió un error";
          mensaje(alerta)
        }
  }
 getDatosTareaBd();  //llamar funcion get datos tareas al iniciar programa  

// funcion agregar datos tarea a bd mediante axios
const postDatosTareaBd = async (formTarea) => {
  try {
    const data = {
      tarea:{
        titulo: formTarea[0].value,
        detalle: formTarea[1].value,
        persona: formTarea[2].value,
        estado: 2,
        inicio: fechaAunix(0,"days"),
        entrega: fechaAunix(formTarea[3].value,"days")
      }
    }
    res = await axios.post(`${url}/tareas`, data)
    json = await res.data.tarea;
      let divcolumnas = document.getElementById(`col${json.estado}`)
      divcolumnas.innerHTML += crearTarea(json);
    
      info.style.left = "40%"
      info.innerHTML = "Tarea creada"
      formTarea.reset();
      formTarea[0].focus();
      setTimeout("info.style.left = '-60%'",3000);
  } catch (err) {
    let alerta = err.statusText || "Ocurrió un error";
    mensaje(alerta)
  }
 }   

 
//funcion Agregar datos lista a bd mediante axios
 const postDatoListaBd = async (formTituloColumna) => {
  try {
    const data = {
      lista:{
        nombre: formTituloColumna[0].value,
      }
    }
    res = await axios.post(`${url}/listas`, data)
    json = await res.data.lista;
      divListas.appendChild(crearLista(json));    
      info.style.left = "40%"
      info.innerHTML = "Lista creada"
      formTituloColumna.reset();
      formTituloColumna[0].focus();
      setTimeout("info.style.left = '-60%'",3000);
  } catch (err) {
    let alerta = err.statusText || "Ocurrió un error";
    mensaje(alerta)
  }
 } 
 
 

 const putEstadoTarea = async (id, estado)=>{
  try {
    const data = {
      tarea:{
        estado: estado,
      }
    }
    res = await axios.put(`${url}/tareas/${id}`, data)
    json = await res.data.tarea;
      info.style.left = "40%"
      info.innerHTML = "cambio"
      formTarea.reset();
      formTarea[0].focus();
      setTimeout("info.style.left = '-60%'",3000);
  } catch (err) {
    let alerta = err.statusText || "Ocurrió un error";
    mensaje(alerta)
  }

 }


  const deleteTarea = async (id,iddiv)=>{
    console.log(id)
    try {
      res = await axios.delete(`${url}/tareas/${id}`)
      json = await res.data.tareas;
      document.getElementById(iddiv).remove();
      location.reload();
    } catch (err) {
      let alerta = err.statusText || "Ocurrió un error";
      mensaje(alerta)
    }
  }

  const mensaje = (alerta)=>{
    info.style.left = "40%"
    info.innerHTML = alerta;
    setTimeout("info.style.left = '-60%'",4000);
   }

 
  