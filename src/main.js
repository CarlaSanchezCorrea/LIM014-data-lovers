import {orderAZ, orderZA , orderHigher,orderLower, rolesData, formula} from './data.js';
//import { mostrarDif } from './data_2.js';

import data from './data/lol/lol.js';
//import {rolCampeon} from './data_2.js';



let dataChampions = data.data;
let arrayChamps = Object.values(dataChampions);
//console.log(dataChampions);//
const galleryData = document.getElementById("gallery");


//Show Gallery & Data

const showData = (dataImg) => {

  dataImg.forEach(champions => {

    galleryData.innerHTML +=
    `<div id ="${champions.id}">
    <figure>
    <a href="#${champions.key}" class="modal-card" >
    <img src="${champions.splash}" class="splash" id="${champions.id}"
    title = "${champions.title}" slot = "${champions.blurb}"
    tags = "${champions.tags}">
    </a>
    <figcaption>${champions.id}</figcaption>
    </figure>
    </div>

    <section id="${champions.key}" class="modalDialog">
    <section>
      <a href="#close" title="Close" class="close">X</a>
      <img src="${champions.splash}" class="imgModal">
      <h2 id="title">${champions.title}</h2>
      <h1 id="name">${champions.name}</h1>
      <p id="description">${champions.blurb}</p>
      <p id="rol"><small>ROL</small><br><br>${champions.tags}</p>

      <table class="default">

      <tr>
        <th>stats</td>
        <th>per lvl</td>
        <th>lvl 1</td>
        <th>lvl 6</td>
        <th>lvl 12</td>
        <th>lvl 18</td>
      </tr>

      <tr>
        <th>hp</th>
        <td>${champions.stats.hpperlevel}</td>
        <td>${champions.stats.hp}</td>
        <td>${formula(6, arrayChamps, 1)}</td>
        <td>${formula(12, arrayChamps, 1)}</td>
        <td>${formula(18, arrayChamps, 1)}</td>
      </tr>

      <tr>
        <th>hpregen</td>
        <td>${champions.stats.hpregen}</td>
        <td>${champions.stats.hpregenperlevel}</td>
        <td>${formula(6, arrayChamps, 2)}</td>
        <td>${formula(12, arrayChamps, 2)}</td>
        <td>${formula(18, arrayChamps, 2)}</td>
      </tr>


      <tr>
        <th>mp</td>
        <td>${champions.stats.mpperlevel}</td>
        <td>${champions.stats.mp}</td>
        <td>${formula(6, arrayChamps,3)}</td>
        <td>${formula(12, arrayChamps,3)}</td>
        <td>${formula(18, arrayChamps, 3)}</td>
      </tr>

      <tr>
      <th>armor</td>
        <td>${champions.stats.armorperlevel}</td>
        <td>${champions.stats.armor}</td>
        <td>${formula(6, arrayChamps, 4)}</td>
        <td>${formula(12, arrayChamps, 4)}</td>
        <td>${formula(18, arrayChamps, 4)}</td>
      </tr>

     <tr>
      <th>spellblock</td>
      <td>${champions.stats.spellblockperlevel}</td>
      <td>${champions.stats.spellblock}</td>
      <td>${formula(6, arrayChamps, 5)}</td>
      <td>${formula(12, arrayChamps, 5)}</td>
      <td>${formula(18, arrayChamps, 5)}</td>
    </tr>



    </table>

    </section>`;


  })
}

showData(arrayChamps) ;

//Buscador
let btn = document.getElementById("btn");
let inputSearch = document.getElementById("keyword");

const filterSearch = () => {

  galleryData.innerHTML = '';
  //console.log(inputSearch.value); //Aquí no Lee Console

  const inputText = inputSearch.value.toLowerCase();
  for(let champions of arrayChamps){
    let name = champions.name.toLowerCase();
    if(name.indexOf(inputText) !== -1){
      galleryData.innerHTML +=
      `<div id ="${champions.id}">
      <figure>
      <a href="#${champions.key}" class="modal-card" >
      <img src="${champions.splash}" class="splash" id="${champions.id}"
      title = "${champions.title}" slot = "${champions.blurb}"
      tags = "${champions.tags}">
      </a>
      <figcaption>${champions.id}</figcaption>
      </figure>
      </div>

      <section id="${champions.key}" class="modalDialog">
      <section>
        <a href="#close" title="Close" class="close">X</a>
        <img src="${champions.splash}" class="imgModal">
        <h2 id="title">${champions.title}</h2>
        <h1 id="name">${champions.name}</h1>
        <p id="description">${champions.blurb}</p>
        <p id="rol"><small>ROL</small><br><br>${champions.tags}</p>

        <table class="default">

        <tr>
          <th>stats</td>
          <th>per lvl</td>
          <th>lvl 1</td>
          <th>lvl 6</td>
          <th>lvl 12</td>
          <th>lvl 18</td>
        </tr>

        <tr>
          <th>hp</th>
          <td>${champions.stats.hpperlevel}</td>
          <td>${champions.stats.hp}</td>
          <td>${formula(6, arrayChamps, 1)}</td>
          <td>${formula(12, arrayChamps, 1)}</td>
          <td>${formula(18, arrayChamps, 1)}</td>
        </tr>

        <tr>
          <th>hpregen</td>
          <td>${champions.stats.hpregen}</td>
          <td>${champions.stats.hpregenperlevel}</td>
          <td>${formula(6, arrayChamps, 2)}</td>
          <td>${formula(12, arrayChamps, 2)}</td>
          <td>${formula(18, arrayChamps, 2)}</td>
        </tr>


        <tr>
          <th>mp</td>
          <td>${champions.stats.mpperlevel}</td>
          <td>${champions.stats.mp}</td>
          <td>${formula(6, arrayChamps,3)}</td>
          <td>${formula(12, arrayChamps,3)}</td>
          <td>${formula(18, arrayChamps, 3)}</td>
        </tr>

        <tr>
        <th>armor</td>
          <td>${champions.stats.armorperlevel}</td>
          <td>${champions.stats.armor}</td>
          <td>${formula(6, arrayChamps, 4)}</td>
          <td>${formula(12, arrayChamps, 4)}</td>
          <td>${formula(18, arrayChamps, 4)}</td>
        </tr>

       <tr>
        <th>spellblock</td>
        <td>${champions.stats.spellblockperlevel}</td>
        <td>${champions.stats.spellblock}</td>
        <td>${formula(6, arrayChamps, 5)}</td>
        <td>${formula(12, arrayChamps, 5)}</td>
        <td>${formula(18, arrayChamps, 5)}</td>
      </tr>



      </table>

      </section>`;  }
}
if (galleryData.innerHTML === ''){
  galleryData.innerHTML +=
    `<div>
    <p>Campeon no encontrado</p>
    </div>`;
}
}

inputSearch.addEventListener("keyup", filterSearch);

btn.addEventListener('click', filterSearch);

//DIFICULTAD//
const difficulty = document.getElementById("difficult-select");

const filtroOrderMayorMenor =() =>{
  galleryData.innerHTML = '';
  const difficultyValue = difficulty.value;
// console.log(difficultyValue);
  for(let champions of orderHigher(arrayChamps)){
  if(difficultyValue === "higher"){
    galleryData.innerHTML += `<div id ="${champions.id}" class="diff-${champions.info.difficulty}">
    <figure>
    <img src="${champions.splash}" class="splash">
    <figcaption>${champions.id} - ${champions.info.difficulty}</figcaption>
    </figure>
    </div>`;
  }
}
   if(difficultyValue === "low"){
    for(let champions of orderLower(arrayChamps)){
    //let arrayOrderNM = orderLower(arrayChamps);
   //console.log(arrayOrderNM);
   galleryData.innerHTML += `<div id ="${champions.id}" class="diff-${champions.info.difficulty}">
    <figure>
    <img src="${champions.splash}" class="splash">
    <figcaption>${champions.id} - ${champions.info.difficulty}</figcaption>
    </figure>
    </div>`;
  }
}
}
difficulty.addEventListener('change', filtroOrderMayorMenor);
//console.log(arrayOrderMN);




//ORDENAR A-Z//

const selectOrder = document.getElementById("select-letter");

const filtrarOrder = () => {
  galleryData.innerHTML = '';
  const orderValue = selectOrder.value;
  //const orderValueZA = selectOrderZA.value;
 // console.log(orderValue);
  //console.log(orderValueZA);

    if (orderValue === "orderAZ"){
      let arrayOrderAZ = orderAZ(arrayChamps);
      showData(arrayOrderAZ)
    }

    if (orderValue === "orderZA"){
      let arrayOrderZA = orderZA(arrayChamps);
        //let arrayOrderZA = orderZA(arrayChamps);
        showData(arrayOrderZA)
    }
  }

selectOrder.addEventListener('change', filtrarOrder);



//ROLES


const rolChampion = document.querySelectorAll(".roles_li");

rolChampion.forEach(boton => {
	boton.addEventListener("click", (e) => {
    const roles = e.target.value;
    //  console.log(roles);

    galleryData.innerHTML = '';
    if (roles === "All"){
      showData(arrayChamps)
    }
     // if (roles === roles)
     else{
        let filtroRol = rolesData(arrayChamps, roles);
        showData(filtroRol)
    }
  })
});
//console.log(rolChampion)
///////////////////////////////////




