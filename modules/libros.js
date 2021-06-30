



class Libros{
    constructor( id,categoria,titulo,imagen,contraportada,descripcion,autor,editorial,fecha_publicacion,cantLicencias)
    {
        this.id = id,
        this.categoria= categoria,
        this.titulo = titulo,
        this.imagen = imagen,
        this.contraportada = contraportada,
        this.descripcion = descripcion,
        this.autor = autor,
        this.editorial = editorial,
        this.fecha_publicacion = fecha_publicacion,
        this.cantLicencias = cantLicencias
    }

    /*
    filterLibro(titulo,array) {
        let librosEncontrados=array.filter(function (element) {
        return element.titulo.indexOf(titulo)>-1
        })
    }
    */

    /*
    filerLibro(currentValue,array){
        let LibrosEncontrados = array.filer(function(currentValue) {
            return currentValue.titulo.indexOf(currentValue)>-1
        })
    }
    */

    /*filterLibro(currentValue,array){
        let LibrosEncontrados = catalogo.filter(function(libro){
            return libro.titulo.indexOf('El Viaje')>-1
        })
    }*/
   
}

/*
function filterLibro(currentValue,array){
    let LibrosEncontrados = array.filter(function(libro){
        return libro.titulo.indexOf(currentValue)>-1
    })
}
*/


export { Libros }


