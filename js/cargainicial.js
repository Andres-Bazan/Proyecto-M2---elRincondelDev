import { Libros } from '../modules/libros.js';
import { Alquileres } from '../modules/alquileres.js';
import { Usuarios } from '../modules/usuarios.js';


//**********************Carga Inicial *********** */

let catalogo = JSON.parse(localStorage.getItem("catalogo")) || [];

if (catalogo.length == 0){
let libro1 = new Libros(1,'Acción','El Viaje','','','Historia','Ricardo','Planeta','10/02/2020',2);
catalogo.push(libro1);

let libro2 = new Libros(2,'Desarrollo','Guia de C++','','','Historia','Ricardo','Planeta','10/02/2020',2);
catalogo.push(libro2);
}
//console.log(catalogo);


//let catalogos = JSON.parse(localStorage.getItem("catalogo")) || [];

//Almacena en el local storage
//el array de objetos que se crearon implicitamente
localStorage.setItem("catalogo",JSON.stringify(catalogo));


//trae desde el LocalStorage todos los usuarios registrados
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

if (usuarios.length==0){
    //no hay carga incial por lo cual se debe realizar para poder probar el sitio web
    let usuario1 = new Usuarios('richi1637@yahoo.com','123');
    usuarios.push(usuario1);
    localStorage.setItem("usuarios",JSON.stringify(usuarios));

    console.log(usuarios[0].id)
}

