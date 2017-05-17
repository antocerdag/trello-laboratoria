document.getElementById("botoncito").addEventListener("click", 

function newLista(){
	var caja = document.getElementById("newCaja");
	var nuevoContenedor = document.createElement("span");
	nuevoContenedor.setAttribute("id", "newLista");

	var nuevaTareaArea = document.createElement("textarea");
	nuevaTareaArea.setAttribute("placeholder", "Añadir una lista");
	nuevaTareaArea.setAttribute("id", "nuevaTareaArea");

	caja.appendChild(nuevaTareaArea);

	var boton = document.createElement("button");
	boton.setAttribute("type", "submit");
	boton.setAttribute("id", "btn");

	var botontxt = document.createTextNode("Añadir");

	
	caja.appendChild(boton);
	boton.appendChild(botontxt);


	document.getElementById("btn").addEventListener("click", 
		function newTarea(){

			var tarea = document.getElementById("nuevaTareaArea").value;
			//document.getElementById("tarea").value = "";

			var cont = document.getElementById("contenedor");

			var nuevasTareas = document.createElement("div");
			var textoNuevaTarea = document.createTextNode(tarea);
			var elementoContenedor = document.createElement("span");

			elementoContenedor.appendChild(textoNuevaTarea);
			nuevasTareas.appendChild(elementoContenedor);
			cont.appendChild(nuevasTareas);


		})

});

