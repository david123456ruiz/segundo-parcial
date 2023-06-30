const generar=()=>{
let valor=document.querySelector("#range")
let span=document.querySelector("#v")
let div=document.querySelector("#res")
valor.oninput=()=>{
  span.innerHTML=valor.value;
  n=parseInt(valor.value);
  divsHTML="";
  for(i=1;i<=n;i++){
    divsHTML+="<div class='cajita'>"+i+"</div>";
  }
  div.innerHTML=divsHTML;
}
let n=parseInt(document.querySelector("#n").value);
  document.querySelector("#vn").innerHTML=n
  let div=document.querySelector("#res");
  div.innerHTML="<img src='spimner.gif' width='200px' height='200px'>" ;

setTimeout(()=>{
  let tablaHTML="<table>";
  for(i=1;i<11;i++){
    tablaHTML+="<tr><td>"+n+"x"+i+"="+(i*n)+"</td></tr>";
  }
  div.innerHTML=tablaHTML+"</table>";
  
  div.innerHTML=r.toFixed(2);
},2000)
  
}
}