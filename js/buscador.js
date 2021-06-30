let libros = JSON.parse(localStorage.getItem("admin")) || [];
let memoria = libros.length -1


class Libro {
  constructor(titulo, autor, imagen, descripcion) {
    this.titulo = titulo;
    this.autor = autor;
    this.descripcion = descripcion;
    this.imagen = imagen;
  }
}

const cargarDatos = function () {
  if (titulo.value && autor.value && descripcion.value) {
    if (!imagen.value) {
      imagen.value =
        "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png";
    }

    usuario.push(
      new Libro(
        titulo.value.toUpperCase(),
        auto.value,
        descripcion.value,
        imagen.value
      )
    );
    localStorage.setItem("admin", JSON.stringify(usuarios));
    cargarDatos()
  } else {
    alert("Faltan Datos");
  }
};

function cargarDatos() {
  this.titulo = "";
  this.autor = "";
  this.descripcion = "";
  this.imagen  = "";
}


function cargarModal(){
    cuerpoDiv.innerHTML = "";
    usuario = JSON.parse(localStorage.getItem('admin')) || [];
    usuario.forEach(function(nombre, index){
        let fila = document.createElement('div');
        fila.classList = ('col-md-3 mt-4')
        let datos = `
        <div class="card">
         <div class="row">
           <div class="col-4">
            <div class="card-body">
              <img src="./img/logos-bn/logoHTML.png" alt="img1" class="card-img">
            </div>
           </div>
           <div class="col-8 mt-4">
            <h5>Titulo o libro - PDF</h5>
           </div>
         </div>
        </div>
      
                    
        
        `;
        fila.innerHTML = datos;
        cuerpoDiv.appenChild(fila)
    });
}

cargarModal();

function verModal(){
    
}


