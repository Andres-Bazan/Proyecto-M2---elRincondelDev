//Traigo de localStorage los datos si los hay
let catalogo = JSON.parse(localStorage.getItem("catalogo")) || [];

//Capturo cada elemento del formulario de registro
let lenguaje = document.querySelector("#lenguajeText");
let titulo = document.querySelector("#tituloText");
let descripcion = document.querySelector("#descripcionText");
let fecha_publicacion = document.querySelector("#fechaText");
let cantidadLincencias = document.querySelector("#cantidadLincenciasText");
let imagen = document.querySelector("#imgText");

class Libros {
  constructor(
    lenguaje,
    titulo,
    descripcion,
    fecha_publicacion,
    cantidadLincencias,
    imagen
  ) {
      this.lenguaje = lenguaje;
      this.titulo = titulo;
      this.descripcion = descripcion;
      this.fecha_publicacion = fecha_publicacion;
      this.cantidadLincencias = cantidadLincencias;
      this.imagen = imagen;
  }
}

function addLibros() {
  if (
    lenguaje.value &&
    titulo.value &&
    descripcion.value &&
    fecha_publicacion.value &&
    cantidadLincencias.value &&
    imagen.value 
  ) {
    if (!imagen.value) {
      imagen.value =
        "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png";
    }
    catalogo.push(
      new Libros(
        titulo.value.toUpperCase(),
        lenguaje.value,
        descripcion.value,
        fecha_publicacion.value,
        cantidadLincencias.value,
        imagen.value
      )
    );
    localStorage.setItem("catalogo", JSON.stringify(catalogo));
    udpateLibros();
  } else {
    alert("Faltan Datos!");
  }
};

function udpateLibros(){
    lenguaje.value = '';
    titulo.value = '';
    descripcion.value = ''
    fecha_publicacion.value = '';
    cantidadLincencias.value = '';
    imagen.value = '';
}


cuerpotabla = document.querySelector('#cuerpotabla') || '';
//Cargo los datos a la tabla y creo la tabla desde el js
function verLibro() {
  cuerpotabla.innerHTML = "";
    catalogo = JSON.parse(localStorage.getItem("catalogo")) || [];
    catalogo.forEach(function (portada, index) {
      let fila = document.createElement("div");
      fila.classList ="row mb-5"
      let datos = `
                  
                    
                    <div class="col-md-3">
                      <img src="${portada.imagen}" class="img-biblio" alt="img card 1">
                    </div>
                    <!-- Titulo y reseña -->
                    <div class="col-md-6 text-white">
                      <h4>Aprender ${portada.titulo} avanzado</h4>
                      <span><strong>${portada.lenguaje} / ${portada.titulo}</strong></span>
                      <p class="mt-3 tex">${portada.descripcion}</p>
                    </div>
                  
                    <div class="col-md-3">
                      <div class="card" style="width: 15rem;">
                        <div class="card-body">
                          <h5 class="card-title">Card title</h5>
                          <h6 class="card-subtitle mb-2 text-muted"> <i class="fa fa-file-pdf-o" aria-hidden="true"></i> PDF</h6>
                          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          <a href="#" class="card-link"><button class="btn btn-info btn-block" onclick="">Alquilar</button></a>
                        </div>
                        
                      </div>
                      
                    </div>
                 


                      
                    
                 
  `;
      fila.innerHTML = datos;
  
      cuerpotabla.appendChild(fila);
    });
  }

 
    verLibro()
  
  
  