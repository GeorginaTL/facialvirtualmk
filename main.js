//Recomendar un tratamiento por edad
var edad=prompt("¿Cuantos años tienes?")
var receta=document.getElementById("izqReceta")
if (edad>40)
{receta.innerHTML="Usted debe usar Timewise Repair";}
    
else
{receta.innerHTML="Usted debe usar Timeise 3D";}
    

//Formulario para tomar datos del cliente
var miFormulario=document.getElementById("miFormulario")
miFormulario.addEventListener ("submit", function(e)
{
    e.preventDefault()
    var nombre=document.GetElementById("Nombre")
    alert("Hola "+nombre+", gracias por usar Facial Virtual.")
}
)
alert()


