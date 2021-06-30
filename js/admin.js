let usuario = JSON.parse(localStorage.getItem("usuario")) || null;
let contenedor = document.querySelector(".container");

const validarUsuario = function (user) {
  if (user) {
    if (user.email !== "admin@gmail.com") {
      contenedor.innerHTML = `
            <div class="row mt-5">
            <div class="col col-md-8 offset-md-2">
            <div class="alert alert-danger" role="alert">
                 No es usuario administrador
            </div>
            </div>
            </div>

            `;
      setTimeout(function () {
        location.replace("/home.html");
      }, 2000);
    }
  } else {
    document.querySelector("body").innerHTML = `
        <div class="alert alert-danger" role="alert">
            No se encuentra logueado
        </div>
        `;
    setTimeout(function () {
      location.replace("/login.html");
    }, 2000);
  }
};

const deslogueo = function () {
  localStorage.setItem("usuario", null);
  location.replace("/login.html");
};

document
  .querySelector("#btnDeslogueo")
  .addEventListener("click", deslogueo, false);

validarUsuario(usuario);
