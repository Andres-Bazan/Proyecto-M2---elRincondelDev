import { Libros } from '../modules/libros.js';
import { Alquileres } from '../modules/alquileres.js';
import { Usuarios } from '../modules/usuarios.js';

let catalogo = JSON.parse(localStorage.getItem("catalogo")) || [];
let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
let alquileres = JSON.parse(localStorage.getItem("alquileres")) || [];

//console.log("*************")
//console.log(usuarios)


function FiltrarLibros(){
    LibrosEncontrados = catalogo.filter(function(libro){
        return libro.titulo.indexOf('El Viaje')>-1
    })
    console.log(LibrosEncontrados);
}


function AlquilarLibro(id_libro,id_usuario){
    
    let Alquiler = new Alquileres(id_libro,id_usuario)
    //let alquileres = JSON.parse(localStorage.getItem("alquiler")) || [];

    alquileres.push(Alquiler)
    console.log("************ Alquileres ************************")
    console.log(alquileres)
    localStorage.setItem("alquileres",JSON.stringify(alquileres));
}


//let LibrosEncontrados=[];
//FiltrarLibros();
//console.log(LibrosEncontrados[0].id);

//let id_book = LibrosEncontrados[0].id;
//let id_user = usuarios[0].id;

//console.log(usuarios[0].id);
//console.log(id_user);

/*
let formulario = document.querySelector("form");
const handleSubmit = function (e) {
    e.preventDefault();
    formulario.reset();
};
*/
/*
const handleSubmit = function(e){
    e.preventDefault();
    let id_book = document.querySelector("#id_book")
    let id_user = document.querySelector("#id_user")

    console.log(id_user.value);
    console.log(id_book.value);
    //AlquilarLibro(id_book,id_user);
    alert('handleSubmit')

}
*/
function mySubmitFunction(e) {
    //e.preventDefault();
    
    return false;
  }



