//Globales 

var puntaje = 1000
var contador;
var vidas= 5;
var stop= 0;
var xd=0
var xd2=0
var d1=0
var d2=0


/*
	*Esta funcion se encarga de desaparecer todos los

	*elementos del juego y aparecer la etiqueta 

	*header en el cual se utiliza para informar la

	*derrota, otra funcion que cumple es de parar

	*el contador de puntos.
*/
function lose()
{

/*
	*Al sumarle 1 a la variable stop esta cambia su valor

	*ocasionando la detencion del contador.
*/
	stop= stop+1

/*
	*Estos elementos se utilizan para desaparecer y 

	*aparecer las etiquetas deseadas.
*/

	document.getElementById("los").style.display= "block"
	document.getElementById("generado").style.display= "none"
	document.getElementById("generado1").style.display= "none"
	document.getElementById("generado2").style.display= "none"
	document.getElementById("generado3").style.display= "none"
	document.getElementById("generado4").style.display= "none"
	document.getElementById("generado5").style.display= "none"
	document.getElementById("generado6").style.display= "none"
	document.getElementById("generado7").style.display= "none"
	document.getElementById("generado8").style.display= "none"
	document.getElementById("siguelo2").style.display = "none"
	document.getElementById("siguelo1").style.display= "none"
	document.getElementById("rem").style.display= "none"

/*
	*Este codigo se encarga de que aparezca el cursor 

	*dentro de la etiqueta header.
*/
	document.getElementById("con").style.cursor= "block"

/*
	*Llama a las funciones que se encargan del evento de 

	*la etiqueta header.
*/
	lo1()
	lo2()
}

/*
	*Se encarga de generar el evento de la etiqueta 

	*main y tambien de desaparecer todos los elementos

	*del juego.
*/

function win()
{
	/*
		*La suma echa aqui tiene la misma finalidad

		*que la funcion de arriba.
	*/
	stop= stop+1

/*
	*Estos elementos se utilizan para desaparecer y 

	*aparecer las etiquetas deseadas.
*/
	document.getElementById("win").style.display= "block"
	document.getElementById("generado").style.display= "none"
	document.getElementById("generado1").style.display= "none"
	document.getElementById("generado2").style.display= "none"
	document.getElementById("generado3").style.display= "none"
	document.getElementById("generado4").style.display= "none"
	document.getElementById("generado5").style.display= "none"
	document.getElementById("generado6").style.display= "none"
	document.getElementById("generado7").style.display= "none"
	document.getElementById("generado8").style.display= "none"
	document.getElementById("siguelo2").style.display = "none"
	document.getElementById("siguelo1").style.display= "none"
	document.getElementById("rem").style.display= "none"

/*
	*Este codigo se encarga de que aparezca el cursor 

	*dentro de la etiqueta header.
*/

	document.getElementById("con").style.cursor= "block"

/*
	*Llama a las funciones que ejecutan el 

	*evento de la etiqueta main.
*/
	anim()
	anim2()	

}

/*
	*Funcion que ejecuta el movimiento en el eje x.
*/
function anim()
{
	/*
		*Esta suma se encarga de sumarle proporcionalmente

		*al width su espesor.
	*/
	  xd=xd+9.4
	  

      document.getElementById("win").style.width= xd+"%"
	 /*
	 	*Se encarga de al llegar a sierto limite

	 	*se para el taiming establecido.
	 */ 
     
     if(xd>=94)
     {
     	clearTimeoput(anim)
     }

     /*
     	*Se establece un tiempo para que esta funcion se 

     	*vuelva a ejecutar.
     */
		
	setTimeout(anim,20)
}

/*
	*Se encarga de lo mismo que la anterior funcion solo 

	*que en el eje y.
*/

function anim2()
{
/*
		*Esta suma se encarga de sumarle proporcionalmente

		*al width su espesor.
*/
	xd2= xd2+9

	document.getElementById("win").style.height= xd2+"%"
/*
	 	*Se encarga de al llegar a sierto limite

	 	*se para el taiming establecido.

*/ 

	if (xd2>=90)
      {
      	clearTimeoput(anim2)
      }

/*
     	*Se establece un tiempo para que esta funcion se 

     	*vuelva a ejecutar.
*/
      setTimeout(anim2,20)
	
 }



/*
	*Funcion que ejecuta el movimiento en el eje x

	*y tiene la misma forma de funcionar que en

	*la funcion anim1().
*/
 function lo1()
{
	  d1=d1+9.4
	  

      document.getElementById("los").style.width= d1+"%"
	  
     
     if(d1>=94)
     {
     	clearTimeoput(lo1)
     }
		
	setTimeout(lo1,20)
}

/*
	*Funcion que ejecuta el movimiento en el eje y

	*y tiene la misma forma de funcionar que en

	*la funcion anim2().
*/
function lo2()
{
	d2= d2+9
	document.getElementById("los").style.height= d2+"%"

	if (d2>=90)
      {
      	clearTimeoput(lo2)
      }
      setTimeout(lo2,20)

      d()	
 }


/*
	*Esta funcion se encarga del conteo de el 

	*puntaje y de que aparezca en forma visible el puntaje.
*/
 function punt()
 {

/*
	*Si se llega al puntaje de "0" llamara a la funcion 

	*lose().
*/
	if (puntaje==0 )
	{
		lose();

	}

	/*
		*Se encarga de parar el contador de puntaje.
	*/
	else
		if(stop==1)
		{
			clearTimeoput(punt)
		}

		/*
			*Se encarga de la visualizacion de el puntaje en los

			*input.
		*/
		else
		{

			puntaje=puntaje-1;

			document.getElementById("coso").value=puntaje;
			document.getElementById("wind").value=puntaje;
		}


/*
	*Se encarga de ejecutar en un lapso de tiempo 

	* la esta misma funcion.
*/
	setTimeout(punt,100)
 }
 
 	


 