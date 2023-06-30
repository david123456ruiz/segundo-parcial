
const cambiar=()=>{
    document.querySelector("#res").innerHTML =document.querySelector("#cantidad").value;
    
    
        var cantidad = document.getElementById("cantidad").value;
        var res = document.getElementById("res");
      
        var tabla = "";
        for (var i = 1; i <= 10; i++) {
          tabla += cantidad + " x " + i + " = " + (cantidad * i) + "<br>";
        }
      
        res.innerHTML = tabla;
      }
    
      