/* El id form no existe en el html, puede que quiera referirse a la clase formulario.
var formulario = document.querySelector("#form")*/

/* Se selecciona el elemento del html que tiene la clase "formulario" y se asigna a la variable "formulario" */
var formulario = document.querySelector(".formulario");



/* Aquí se establece un controlador de eventos para que cuando el formulario se envíe se active la siguiente función */
formulario.onsubmit = function (e) {

  /* En javascript no existe el método prevent, probablemente se refería al metodo preventDefault
e.prevent(); */

  /* El método preventDefault evita el comportamiento predeterminado de un evento, en este caso, impide que se envíe el formulario y que la página se recargue como lo haría el evento "submit"  */

  e.preventDefault();

  /* Se obtienen los elementos del formulario correspondientes a nombre, edad y nacionalidad con su index, mediante el método elements y se asignan a las variables n, e y na (nombre, edad y nacionalidad)*/
  var n = formulario.elements[0];
  var e = formulario.elements[1];
  var na = formulario.elements[2];

/* A continuación se obtienen los valores introducidos en los campos del formulario con el método "value". Se obtienen los valores de edad y nombre respectivamente */
  var nombre = n.value;
  var edad = e.value;


/* Después se guarda en la variable i el índice del elemento nacionalidad, debido a que éste campo en el html es una lista */
  var i = na.selectedIndex;

  /* A continuación na.options[i].value obtiene el valor del índice seleccionado y este se asigna a la variable "nacionalidad" */
  var nacionalidad = na.options[i].value;

  /* Los console.log muestran el nombre, la edad y la nacionalidad de los inputs en consola */
  console.log(nombre, edad);
  console.log(nacionalidad);


/* Las siguientes líneas son de validación, sí el campo de nombre está vacío se agrega error a la classList del nombre, lo mismo si la edad es menor a 18 o mayor a 120 */
  if (nombre.length === 0) {
    n.classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error");
  }


/* Lo siguiente es para verificar la validez anterior y si se cumple se llama a la función agregarInvitado que se alimenta con los parámetros de nombre, edad y nacionalidad */
  if (nombre.length > 0
    && (edad > 18
      && edad < 120)) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
};

/* Esto se comenta porque genera un botón que no tiene funcionalidad en el html
var botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar";
var corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

*/


/* Aquí se encuentra la función agregarInvitado mencionada anteriormente. */
function agregarInvitado(nombre, edad, nacionalidad) {

/* A continuación se asigna un string con la nacionalidad dependiendo del valor obtenido en la línea 33 */
  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }


/* Aquí se obtiene el div que se agregó al html mediante su id para pintarlo con DOM y se asigna a la variable "lista" */
  var lista = document.getElementById("lista-de-invitados");

/* A continuación se crea otro div en el html y se asigna a la variable "elementoLista" */
  var elementoLista = document.createElement("div");
  /* En javascript no existe el método added, la forma correcta para agregar una clase es usar el método add, el cual recibe como argumento el nombre de la clase que se desea agregar. */

  /*
  elementoLista.classList.added("elemento-lista")*/

  /* Posteriormente se agrega una clase llamada "elemento-lista" y lo agrega como un hijo de lista */
  elementoLista.classList.add("elemento-lista");
  lista.appendChild(elementoLista);


  /* Estas líneas de código se comentan debido a que hacen que el nombre salga repetido
  
  var spanNombre = document.createElement("span")
  var inputNombre = document.createElement("input")
  var espacio = document.createElement("br")
  spanNombre.textContent = "Nombre: "
  inputNombre.value = nombre 
  elementoLista.appendChild(spanNombre)
  elementoLista.appendChild(inputNombre)
  elementoLista.appendChild(espacio)*/

  /* La siguiente función sirve para crear elementos html y agregarlos como hijos al elementoLista */

  function crearElemento(descripcion, valor) {

    /* Se crean 3 elementos html nuevos, un span, un input y un br */
    var spanNombre = document.createElement("span");
    var inputNombre = document.createElement("input");
    var espacio = document.createElement("br");

    /* Se establece el texto del spanNombre con una concatenación de la descripción y el valor del campo obtenido */
    spanNombre.textContent = descripcion + ": ";
    inputNombre.value = valor;

    /* Los elementos span, input y br se agregan como hijos al elementoLista */
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);
  }

  /* Después se llama a esta función 3 veces para cada label del formulario y agregarlos a elementoLista */
  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);

/* Aquí se crea un botón y se agrega como hijo al elementoLista */
  var botonBorrar = document.createElement("button")
  botonBorrar.textContent = "Eliminar invitado"
  botonBorrar.id = "boton-borrar"
  /* La variable corteLinea es un espacio entre el botón y los elementos anteriores. */
  var corteLinea = document.createElement("br");
  elementoLista.appendChild(corteLinea);
  elementoLista.appendChild(botonBorrar);

  /* Este es un controlador de eventos para que el botón funcione al darle click y este elimina el padre del botón (elementoLista) */
  botonBorrar.onclick = function () {
    // this.parentNode.style.display = 'none';
    botonBorrar.parentNode.remove();
  }
}