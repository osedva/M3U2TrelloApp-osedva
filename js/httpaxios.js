let URL = "https://my-json-server.typicode.com/osedva/M3U2TrelloApp-osedva";

const getAll = async () => {
    
    try {
      let res = await axios.get(`${URL}/tareas`),
        json = await res.data;

      json.forEach(el => {
    
        let divcolumnas = document.getElementById(`col${el.estado}`)
        let tarea = `<div id="divtarea${el.id}" class="div-tarea">
                        <h2 title="Eliminar tarea ${el.titulo}">x</h2> 
                        <h4>${el.titulo}</h4>
                        <p><b>Detalle:</b> ${el.detalle}</p>
                        <p><b>Persona:</b> ${el.persona}</p>
                        <p><b>Inicio:</b> ${unisAfecha(el.finicio)} </p>
                        <p><b>Entregar:</b> ${unisAfecha(el.fentrega)} </p>
                    </div>  
        `
        divcolumnas.innerHTML += tarea;
      });
    } catch (err) {
      let message = err.statusText || "Ocurrió un error";
      info.style.left = "40%"
      info.innerHTML = message;
      setTimeout("info.style.left = '-60%'",4000);
    }
  }

  document.addEventListener("DOMContentLoaded", getAll);


  const unisAfecha = (tiempo) =>{
    return moment.unix(tiempo).format('DD/MM/YYYY') ;
  }
  
  const fechaF = (num,dma)=>{
      let  fechaFormat = moment().add(num,dma).format('DD/MM/YYYY');
      return fechaFormat
      }

  const fechaAunix = (num,dma)=>{
    let  fecchaUnix = moment().add(num,dma).unix();
    return fecchaUnix
    }    

 

 
  