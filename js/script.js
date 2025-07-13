console.log("hola desde el archivo externo");

let textNombre = document.getElementById('nombreApellido').value;
let texEmail = document.getElementById('email').value;
let textEdad = document.getElementById('edad').value;
let comentario = document.getElementById('comentario').value;

let btnEnviar = document.getElementById('enviar');
let btnLimpiar = document.getElementById('limpiar');

btnEnviar.addEventListener('click',mostrarMensaje);
btnLimpiar.addEventListener('click',mostrarMensajeLimpiar);

/*Funciones*/
function mostrarMensaje(event)
{
  event.preventDefault();

  let textNombre = document.getElementById('nombreApellido').value;
  let texEmail = document.getElementById('email').value;
  let textEdad = document.getElementById('edad').value;
  let comentario = document.getElementById('comentario').value;


  console.log("nombre: " + textNombre);
  console.log("email: " + texEmail);
  console.log("edad: " + textEdad);
  console.log("comentario: " + comentario);

  if (!textNombre || !texEmail || !textEdad || !comentario) 
  {
    Swal.fire("Por favor, completá todos los campos.");
    return;
  }

  if (textNombre.length < 4) 
  {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Su 'Apellido y Nombre' debe tener al menos 4 caracteres."
    });
    return; 
  }

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(texEmail)) 
  {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "El Email ingresado posee un formato incorrecto. Verifiquelo."
    });
    return;
  }

  if (isNaN(textEdad) || textEdad < 18) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Solo los mayores de 18 años pueden acceder a nuestros servicios."
    });
    return; 
  }

  if (comentario.length < 5 && comentario.length < 101) 
  {
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debe ingresar entre 5 y 100 caracteres."
    });
    return; 
  }

  Swal.fire({
    title: '¡Consulta enviada!',
    text: 'Se envió su consulta con éxito.',
    icon: 'success',
    confirmButtonText: 'Aceptar'
  });


}

function mostrarMensajeLimpiar(event)
{
  event.preventDefault();
  document.querySelector('form').reset();
  Swal.fire("Se procedió a limpiar el formulario.");

}