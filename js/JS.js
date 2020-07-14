// Globales

let ancho = 0

let alto = 0



/**

 * Esta es la función principal, desde aquí se determina el ancho y el alto del area de juego

 * y se inicializa el ciclo de actualización de sprites

 */

function comienzo(){

  //se toma el valor de "con" para usarla de limite visual

  ancho = document.getElementById("con").offsetWidth              

  alto = document.getElementById("con").offsetHeight



  /**

   * En sprites guardamos todas las imagenes que se van a ir moviendo por la pantalla.

   * Guardarlos en un array nos permite iterarlo con un forEach y escribir la llamada a

   * la función mover una sola vez.

   * Cada sprite tiene un id asignado y un tiempo de actualización

  */

  const sprites = [

    {id: '', time: 750},

    {id: '1', time: 900},

    {id: '2', time: 500},

    {id: '3', time: 1800},

    {id: '4', time: 380},

    {id: '5', time: 750},

    {id: '6', time: 800},

    {id: '7', time: 400},

    {id: '8', time: 3000}

  ]

  /**

   * Por cada sprite:

   *   Le asignamos una posición inicial

   *   Creamos el intervalo para que cada x cantidad de tiempo se vaya actualizando la posición

   */

  sprites.forEach(el => {

    // Como mover devuelve una función, tenemos que ejecutarla

    mover(el.id)()

    // Le pasamos el id a la función y el tiempo al interval

    setInterval(mover(el.id), el.time)

  })

}



/**

 * Sigueme posiciona el sprite del cursor en la posición del mouse

 */

function sigueme () {

  // Capto las coordenads del puntero y las corrijo

  const x = window.event.x - 50

  const y = window.event.y - 50

  // Y se las coloco al div. 

  document.getElementById("siguelo2").style.left = x + "px"

  document.getElementById("siguelo1").style.top = y + "px"

}



/**

 * Ya que setInterval necesita una función que ejecutar, devolvemos una función

 * con los valores pasados en la función padre dentro del scope. Esto se debe a cómo

 * funciona el scoping de JavaScript

 * https://stackoverflow.com/questions/34299815/what-is-a-scoping-function-in-javascript

 */

function mover (id) {

  /**

   * Esta función es la que va a mover los sprites, y hace lo siguiente:

   *   Calcula una coordenada en "x" y en "y"

   *   Le asigna un top y un left a el elemento que tiene el id pasado por la función padre

   */

  return function () {

    // Genera un numero aleatorio p

    let p = Math.floor(Math.random() * (ancho - 100)) - 50

    let t = Math.floor(Math.random() * (alto - 100)) - 50

    /*
        *Se le coloca el numero en los margenes del id
    */

    document.getElementById("generado" + id).style.left = p + "px"

    document.getElementById("generado" + id).style.top = t + "px"

  }

}