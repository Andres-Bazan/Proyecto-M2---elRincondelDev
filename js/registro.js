let usuarios = JSON.parse(localStorage.getItem("usuarios"));

let usuario = {
  id: new Date().getTime(),
  email: "",
  password: "",
  nombre: "",
  area: "",
  imagen:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx_7XSeoV5uoxiFIbSEg9QT-YT7TFqgvuxag&usqp=CAU",
};

let formulario = document.querySelector("form");

const handleChange = function (e) {
  usuario = {
    ...usuario,
    [e.target.name]: e.target.value,
  };
};

const handleSubmit = function (e) {
  e.preventDefault();

  if (usuario.nombre && usuario.email && usuario.password) {
    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    formulario.reset();

    //traer los campos de la card con los datos a mostrar
    document.querySelector("#name").innerText = usuario.nombre;
    document.querySelector("#correo").innerText = usuario.email;
    document.querySelector("#sector").innerText = usuario.area;
    document.querySelector(".img_card").src = usuario.imagen;
  }
};
