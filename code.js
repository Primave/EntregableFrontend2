/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://jherax.files.wordpress.com/2018/08/javascript_logo.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
 datosPersona.nombre =  prompt("Cual su nombre? ");
 datosPersona.edad =  parseInt(2022 - prompt("Cual su año de nacimiento? "));
 datosPersona.ciudad =  prompt("Cual su ciudad? ");
 datosPersona.interesPorJs = confirm("Tenés interés por JavaScript? ")

}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  nodoNombre= document.getElementById("nombre");
  nodoNombre.innerText=(datosPersona.nombre );

  nodoEdad = document.getElementById("edad");
  nodoEdad.innerText=(datosPersona.edad);

  nodoCiudad = document.getElementById("ciudad");
  nodoCiudad.innerText=(datosPersona.ciudad);

  nodoInteresPorJs = document.getElementById("javascript");
  nodoInteresPorJs.innerText=(datosPersona.interesPorJs ? "Si" : "No");
 
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */


  let nodoMaterias = document.getElementById("fila");
listado.forEach((listadoMaterias) => {

  const div = document.createElement("div");
  
  div.classList.add("caja");
  div.innerHTML = `<img src="${listadoMaterias.imgUrl}" alt="${listadoMaterias.lenguajes}"> 
  <p class="lenguajes" >${listadoMaterias.lenguajes}</p> 
  <p class="bimestre">${listadoMaterias.bimestre}</p>`

  nodoMaterias.append(div)
})

materiasBtn.removeEventListener("click", recorrerListadoYRenderizarTarjetas);
}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
  let nodoOscuro = document.getElementById("sitio");
  nodoOscuro.classList.toggle("dark");

}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */
let sobreMi = document.querySelector("#sobre-mi");
document.addEventListener("keypress", function(e) {
  if(e.key == "f") {
  sobreMi.classList.remove("oculto")
  }
})
