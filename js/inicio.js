/*
	*Esta funcion cambia la imagen del boton de play. 
*/
function cambio ()
{
	/*
		*Agarra una etiqueta img con la id img ,esta

		*ya tienen como predeterminada una imagen

		*estandar ,la cual es cambiada , y de paso 

		*cambia el color del texto.
	*/
	document.getElementById("img").src="galeria/verde.png";	
	document.getElementById("cos2").style.color="#32FF00";	
}

/*
	*Esta funcion vuelve a cambiar la imagen a

	*la anterior imagen predeterminada.
*/
function c2()
{
	/*
		*El codigo aqui es el mismo que en la anterior

		*funcion.
	*/
	document.getElementById("img").src="galeria/rojo.png";
	document.getElementById("cos2").style.color="#FEDADA";
}