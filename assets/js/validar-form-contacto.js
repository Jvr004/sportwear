function validarFormulario() {

  const expresiones = {

    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo

    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.

    password: /^.{4,12}$/, // 4 a 12 digitos.

    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,

    telefono: /^\d{10,14}$/ // 10 a 14 numeros.
  }

  const form = document.getElementById("form");
  const nombre = document.getElementById("nombre");
  const apellido = document.getElementById("apellido");
  const email = document.getElementById("user-email");
  const telefono = document.getElementById("tel");
  const mensajeExitoso = document.getElementById("mensajeExitoso");

  // Variable para verificar si hay errores
  var errores = false;

  // Reiniciar mensajes de éxito y error
  mensajeExitoso.innerHTML = "";
  
  document.getElementById("mensajeExitoso").style.display = "none";
  
  document.getElementById("nombreError").style.display = "none";

  document.getElementById("apellidoError").style.display = "none";

  document.getElementById("emailError").style.display = "none";
  
  document.getElementById("telError").style.display = "none";

  // Validar nombre
  if (nombre.value.trim() === "" || !expresiones.nombre.test(nombre.value)) {
    document.getElementById("nombreError").style.display = "block";
    errores = true;
  }

  // Validar apellido
  if (apellido.value.trim() === "" || !expresiones.nombre.test(apellido.value)) {
    document.getElementById("apellidoError").style.display = "block";
    errores = true;
  }

  // Validar email
  if (email.value.trim() === "" || !expresiones.correo.test(email.value) ) {
    document.getElementById("emailError").style.display = "block";
    errores = true;
  }

  // Validar teléfono
  if (telefono.value.trim() === "" || !expresiones.telefono.test(telefono.value)) {
    document.getElementById("telError").style.display = "block";
    errores = true;
  }

  // Mostrar mensaje de éxito si no hay errores
  if (!errores) {
    document.getElementById("mensajeExitoso").style.display = "block";
    mensajeExitoso.innerHTML =
      `Gracias por contactarnos ${nombre.value}, pronto te enviaremos un mail a ${email.value}.
      `
    form.reset();
    return false; // Para evitar que se recargue la página, aunque sea un formulario de prueba
  }

  // Si hay errores, no enviar el formulario
  return false;
}


