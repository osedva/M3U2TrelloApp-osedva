const unisAfecha = (tiempo) =>{
    return moment.unix(tiempo).format('DD/MM/YYYY') ;
  }
  
  const fechaF = (num,diasMesesAnios)=>{
      let  fechaFormat = moment().add(num,diasMesesAnios).format('DD/MM/YYYY');
      return fechaFormat
      }

  const fechaAunix = (num,diasMesesAnios)=>{
    let  fecchaUnix = moment().add(num,diasMesesAnios).unix();
    return fecchaUnix
    } 
    
    formTituloColumna.onsubmit = (e) => {
      e.preventDefault();
    }
    
    divListas.addEventListener("click",()=>{
      if(checkbox.checked == true){
        checkbox.checked = false;
      }
    });
    
    checkbox.addEventListener("click",()=>{
      formTarea.style.left = "-70%"; 
      formTituloColumna.style.left = "-70%";
    });
    
    

    



