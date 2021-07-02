//Traigo de localStorage los datos si los hay
let libro = JSON.parse(localStorage.getItem("catalogo")) || [];

//Capturo cada elemento del formulario de registro
let lenguaje = document.querySelector("#lenguajeText");
let titulo = document.querySelector("#tituloText");
let contraportada = document.querySelector("#contraportadaText");
let descripcion = document.querySelector("#descripcionText");
let fecha_publicacion = document.querySelector("#fechaText");
let cantidadLincencias = document.querySelector("#cantidadLincenciasText");
let imagen = document.querySelector("#imgText");

class Libros {
  constructor(
    lenguaje,
    titulo,
    imagen,
    descripcion,
    fecha_publicacion,
    cantidadLincencias
  ) {
      this.lenguaje = lenguaje;
      this.titulo = titulo;
      this.imagen = imagen;
      this.contraportada = contraportada;
      this.descripcion = descripcion;
      this.fecha_publicacion = fecha_publicacion;
      this.cantidadLincencias = cantidadLincencias;
  }
}

function addLibros() {
  if (
    lenguaje.value &&
    titulo.value &&
    contraportada.value &&
    descripcion.value &&
    fecha_publicacion.value &&
    cantidadLincencias.value 
  ) {
    if (!imagen.value) {
      imagen.value =
        "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png";
    }
    libro.push(
      new Libros(
        titulo.value.toUpperCase(),
        lenguaje.value,
        contraportada.value,
        descripcion.value,
        fecha_publicacion.value,
        cantidadLincencias.value,
        imagen.value
      )
    );
    localStorage.setItem("catalogo", JSON.stringify(libro));
    udpateLibros();
  } else {
    alert("Faltan Datos!");
  }
};

function udpateLibros(){
    lenguaje.value = '';
    titulo.value = '';
    contraportada.value = '';
    descripcion.value = ''
    fecha_publicacion.value = '';
    cantidadLincencias.value = '';
    imagen.value = '';
}


function verLibro() {
    cuerpoTabla.innerHTML = "";
    heroes = JSON.parse(localStorage.getItem("heroes")) || [];
    heroes.forEach(function (portada, index) {
      let fila = document.createElement("div");
      fila.classList ="container"
      let datos = `
                    <div class="row">
                    <!-- Imagen del libro -->
                    <div class="col-md-3">
                      <img src="${portada.imagen}" style="width: 220px;" alt="img card 1">
                    </div>
                    <!-- Titulo y reseña -->
                    <div class="col-md-6 text-white">
                      <h4>Aprender ${portada.titulo} avanzado</h4>
                      <span><strong>${portada.categoria} / ${portada.titulo}</strong></span>
                      <p class="mt-4 tex">${portada.descripcion}</p>
                    </div>
                    <!-- card con link PDF -->
                    <div class="col-md-3">
                      <div class="card" style="width: 15rem;">
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" class="card-link"><button class="btn btn-info btn-block" onclick="">Alquilar</button></a>
                        </div>
                      </div>
                      </div>
                    </div>
                    <hr class="bg-light mt-5">
                 
  `;
      fila.innerHTML = datos;
  
      cuerpoTabla.appendChild(fila);
    });
  }


  function alquilarLibro(id) {
    libro = libro[id];
    validar = alert(`Libro ${libro.titulo} agregado!`)

    if (validar) {
      libro
    }
  }
