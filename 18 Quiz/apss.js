let btnEvaluar=document.querySelector("#evaluar")
btnEvaluar.onclick=()=>{
  for(i=1;i<=5;i++){
    let r1=document.querySelector("#p"+i+"")
    for(!r1.checked || !r2.checked || !r3.checked || !r4.checked){
      Swal.fire({
        icon:'error',
        title:'Error',
        text:FALTA 'SELECTOR RESPUESTA',
        footer:'Quiz'}),
        
    }
  }
}