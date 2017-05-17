

document.getElementById("boton").addEventListener("click",

function botoncito(){
	var tarea = document.getElementById("tarea").value;
	document.getElementById("tarea").value = "";

	var contenedor = document.getElementById("contenedor");

	var nuevaTarea = document.createElement("div");
	var textNuevaTarea = document.createTextNode(tarea);
	var nuevoContenedor = document.createElement("span");

	nuevoContenedor.appendChild(textNuevaTarea);
	nuevaTarea.appendChild(nuevoContenedor);
	contenedor.appendChild(nuevaTarea);

})
