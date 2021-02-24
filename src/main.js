import {orderAZ, orderZA , orderHigher,orderLower, rolesCampeones, formula} from './data.js';
//import { mostrarDif } from './data_2.js';

import data from './data/lol/lol.js';
//import {rolCampeon} from './data_2.js';



let traerCampeones = data.data;
let arrayChamps = Object.values(traerCampeones);
//console.log(traerCampeones);//
const mostrarCampeones = document.getElementById("mostrarPersonajes");


//Mostrar Galería

const mostrarImagen = (dataImg) => {

  dataImg.forEach(campeones => {

    mostrarCampeones.innerHTML +=
    `<div id ="${campeones.id}" class="diff-${campeones.info.difficulty}">
    <figure>
    <a href="#${campeones.key}" class="modal-card" >
    <img src="${campeones.splash}" class="splash" id="${campeones.id}"
    title = "${campeones.title}" slot = "${campeones.blurb}"
    tags = "${campeones.tags}">
    </a>
    <figcaption>${campeones.id}</figcaption>
    </figure>
    </div>

    <section id="${campeones.key}" class="modalDialog">
    <section>
      <a href="#close" title="Close" class="close">X</a>
      <img src="${campeones.splash}" class="imgModal">
      <h2 id="title">${campeones.title}</h2>
      <h1 id="name">${campeones.name}</h1>
      <p id="description">${campeones.blurb}</p>
      <p id="rol"><small>ROL</small><br><br>${campeones.tags}</p>

      <table class="default">

      <tr>
        <th>stats</td>
        <th>per lvl</td>
        <th>lvl 1</td>
        <th>lvl 6</td>
        <th>lvl 12</td>
        <th>lvl 20</td>
      </tr>

      <tr>
        <th>hp</td>
        <td>${campeones.stats.hpperlevel}</td>
        <td>${campeones.stats.hp}</td>
        <td>${formula(6, arrayChamps, 1)}</td>
        <td>${formula(12, arrayChamps, 1)}</td>
        <td>${formula(18, arrayChamps, 1)}</td>
      </tr>

      <tr>
        <th>hpregen</td>
        <td>${campeones.stats.hpregen}</td>
        <td>${campeones.stats.hpregenperlevel}</td>
        <td>${formula(6, arrayChamps, 2)}</td>
        <td>${formula(12, arrayChamps, 2)}</td>
        <td>${formula(18, arrayChamps, 2)}</td>
      </tr>


      <tr>
        <th>mp</td>
        <td>${campeones.stats.mpperlevel}</td>
        <td>${campeones.stats.mp}</td>
        <td>${formula(6, arrayChamps,3)}</td>
        <td>${formula(12, arrayChamps,3)}</td>
        <td>${formula(18, arrayChamps, 3)}</td>
      </tr>

      <tr>
      <th>armor</td>
        <td>${campeones.stats.armorperlevel}</td>
        <td>${campeones.stats.armor}</td>
        <td>${formula(6, arrayChamps, 4)}</td>
        <td>${formula(12, arrayChamps, 4)}</td>
        <td>${formula(18, arrayChamps, 4)}</td>
      </tr>

     <tr>
      <th>spellblock</td>
      <td>${campeones.stats.spellblockperlevel}</td>
      <td>${campeones.stats.spellblock}</td>
      <td>${formula(6, arrayChamps, 5)}</td>
      <td>${formula(12, arrayChamps, 5)}</td>
      <td>${formula(18, arrayChamps, 5)}</td>
    </tr>



    </table>

    </section>`;


  })
}

mostrarImagen(arrayChamps) ;

//Buscador
let btn = document.getElementById("btn");
let mostrarInputBusqueda = document.getElementById("keyword");

const filtrarBusqueda = () => {

  mostrarCampeones.innerHTML = '';
  //console.log(mostrarInputBusqueda.value); //Aquí no Lee Console

  const texto = mostrarInputBusqueda.value.toLowerCase();
  for(let campeones of arrayChamps){
    let name = campeones.name.toLowerCase();
    if(name.indexOf(texto) !== -1){
      mostrarCampeones.innerHTML +=
    `<div id ="${campeones.id}" class="diff-${campeones.info.difficulty}">
    <figure>
    <a href="#${campeones.key}" class="modal-card" >
    <img src="${campeones.splash}" class="splash" id="${campeones.id}"
    title = "${campeones.title}" slot = "${campeones.blurb}"
    tags = "${campeones.tags}">
    </a>
    <figcaption>${campeones.id}</figcaption>
    </figure>
    </div>

    <section id="${campeones.key}" class="modalDialog">
    <section>
      <a href="#close" title="Close" class="close">X</a>
      <img src="${campeones.splash}" class="imgModal">
      <h2 id="title">${campeones.title}</h2>
      <h1 id="name">${campeones.name}</h1>
      <p id="description">${campeones.blurb}</p>
      <p id="rol">${campeones.tags}</p>

    </section>`;
  }
}
if (mostrarCampeones.innerHTML === ''){
  mostrarCampeones.innerHTML +=
    `<div>
    <p>Campeon no encontrado</p>
    </div>`;
}
}

mostrarInputBusqueda.addEventListener("keyup", filtrarBusqueda);

btn.addEventListener('click', filtrarBusqueda);

//DIFICULTAD//
const mostrarDificultad = document.getElementById("difficult-select");

const filtroOrderMayorMenor =() =>{
  mostrarCampeones.innerHTML = '';
  const valorDificultad = mostrarDificultad.value;
// console.log(valorDificultad);
  for(let campeones of orderHigher(arrayChamps)){
  if(valorDificultad === "higher"){
    mostrarCampeones.innerHTML += `<div id ="${campeones.id}" class="diff-${campeones.info.difficulty}">
    <figure>
    <img src="${campeones.splash}" class="splash">
    <figcaption>${campeones.id} - ${campeones.info.difficulty}</figcaption>
    </figure>
    </div>`;
  }
}
   if(valorDificultad === "low"){
    for(let campeones of orderLower(arrayChamps)){
    //let arrayOrderNM = orderLower(arrayChamps);
   //console.log(arrayOrderNM);
    mostrarCampeones.innerHTML += `<div id ="${campeones.id}" class="diff-${campeones.info.difficulty}">
    <figure>
    <img src="${campeones.splash}" class="splash">
    <figcaption>${campeones.id} - ${campeones.info.difficulty}</figcaption>
    </figure>
    </div>`;
  }
}
}
mostrarDificultad.addEventListener('change', filtroOrderMayorMenor);
//console.log(arrayOrderMN);




//ORDENAR A-Z//

const mostrarOrder = document.getElementById("selectLetter");

const filtrarOrder = () => {
  mostrarCampeones.innerHTML = '';
  const valorOrder = mostrarOrder.value;
  //const valorOrderZA = mostrarOrderZA.value;
 // console.log(valorOrder);
  //console.log(valorOrderZA);

    if (valorOrder === "orderAZ"){
      let arrayOrderAZ = orderAZ(arrayChamps);
       mostrarImagen(arrayOrderAZ)
    }

    if (valorOrder === "orderZA"){
      let arrayOrderZA = orderZA(arrayChamps);
        //let arrayOrderZA = orderZA(arrayChamps);
        mostrarImagen(arrayOrderZA)
    }
  }

mostrarOrder.addEventListener('change', filtrarOrder);



//ROLES


const rolesPorCampeones = document.querySelectorAll(".roles_li");

rolesPorCampeones.forEach(boton => {
	boton.addEventListener("click", (e) => {
    const roles = e.target.value;
    //  console.log(roles);

      mostrarCampeones.innerHTML = '';
    if (roles === "All"){
      mostrarImagen(arrayChamps)
    }
     // if (roles === roles)
     else{
        let filtroRol = rolesCampeones(arrayChamps, roles);
        mostrarImagen(filtroRol)
    }
  })
});
//console.log(rolesPorCampeones)
///////////////////////////////////




