const inputNombre = document.getElementById("inputNombre");
const inputApellido = document.getElementById("inputApellido");
const inputFechaNacimiento = document.getElementById("inputFechaNacimiento");
const inputCelular = document.getElementById("inputCelular");
const inputEmail = document.getElementById("inputEmail");
const inputContraseña1 = document.getElementById("inputContraseña1");
const inputContraseña2 = document.getElementById("inputContraseña2");
const checkTerminos = document.getElementById("checkTerminos");
const btnRegistrar = document.getElementById("btnRegistrar");
const btnCancelar = document.getElementById("btnCancelar");

btnCancelar.addEventListener("click", () => {
  inputNombre.value = "";
  inputApellido.value = "";
  inputFechaNacimiento.value = "";
  inputCelular.value = "";
  inputEmail.value = "";
  inputContraseña1.value = "";
  inputContraseña2.value = "";
  checkTerminos.checked = false;
});

btnRegistrar.addEventListener("click", () => {
  if (validarTodo()) {
    alert("Registro Exitoso!");
  }
});

function validarTodo() {
  let valido = true;
  //Reg Exp
  const patronNombre = /^[a-zA-Z\s]+$/gi;
  let nombre = inputNombre.value;
  if (patronNombre.test(nombre)) {
    console.log(nombre + " bien");
  } else {
    error("nombre");
    valido = false;
  }

  const patronApellido = /^[a-zA-Z\s]+$/gi;
  let apellido = inputApellido.value;
  if (patronApellido.test(apellido)) {
    console.log(apellido + " bien");
  } else {
    error("apellido");
    valido = false;
  }

  const patronFecha = /^                $/gi;
  let fecha = inputFechaNacimiento.value;
  if (patronFecha.test(fecha)) {
    console.log(fecha + " bien");
  } else {
    error("fecha de nacimiento");
    valido = false;
  }

  const patronCelular = /^3\d{9}$/gi;
  let celular = inputCelular.value;
  if (patronCelular.test(celular)) {
    console.log(celular + " bien");
  } else {
    error("celular");
    valido = false;
  }

  const patronEmail = /^\S+@\S+\.\S+$/gi;
  let email = inputEmail.value;
  if (patronEmail.test(email)) {
    console.log(email + " bien");
  } else {
    error("email");
    valido = false;
  }

  const patronContraseña =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^da-zA-Z]).{8,}$/gi;
  let contraseña = inputContraseña1.value;
  if (patronContraseña.test(contraseña)) {
    console.log(contraseña + " bien");
  } else {
    error("contraseña");
    valido = false;
  }

  if (!(contraseña === inputContraseña2.value)) {
    alert("Las contraseñas no coinciden");
    valido = false;
  }

  return valido;
}

function error(cadena) {
  alert("El campo " + cadena + " no es valido!");
}
