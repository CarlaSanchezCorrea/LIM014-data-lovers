import {orderAZ, orderZA , orderHigher,orderLower, rolesData} from './data.js';
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
    //console.log(champions);

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
        <th>stats</th>
        <th>per lvl</th>
        <th>lvl 1</th>
        <th>lvl 6</th>
        <th>lvl 12</th>
        <th>lvl 18</th>
      </tr>

      <tr>
        <th>hp</th>
        <td>${champions.stats.hpperlevel}</td>
        <td>${champions.stats.hp}</td>
        <td>${((champions.stats.hp) +(champions.stats.hpperlevel*6)).toFixed(1)}</td>
        <td>${((champions.stats.hp) +(champions.stats.hpperlevel*12)).toFixed(1)}</td>
        <td>${((champions.stats.hp) +(champions.stats.hpperlevel*18)).toFixed(1)}</td>
      </tr>

      <tr>
        <th>hpregen</th>
        <td>${champions.stats.hpregenperlevel}</td>
        <td>${champions.stats.hpregen}</td>
        <td>${((champions.stats.hpregen) +(champions.stats.hpregenperlevel*6)).toFixed(1)}</td>
        <td>${((champions.stats.hpregen) +(champions.stats.hpregenperlevel*12)).toFixed(1)}</td>
        <td>${((champions.stats.hpregen) +(champions.stats.hpregenperlevel*18)).toFixed(1)}</td>
      </tr>


      <tr>
        <th>mp</th>
        <td>${champions.stats.mpperlevel}</td>
        <td>${champions.stats.mp}</td>
        <td>${((champions.stats.mp) +(champions.stats.mpperlevel*6)).toFixed(1)}</td>
        <td>${((champions.stats.mp) +(champions.stats.mpperlevel*12)).toFixed(1)}</td>
        <td>${((champions.stats.mp) +(champions.stats.mpperlevel*18)).toFixed(1)}</td>
      </tr>

      <tr>
      <th>armor</th>
        <td>${champions.stats.armorperlevel}</td>
        <td>${champions.stats.armor}</td>
        <td>${((champions.stats.armor) +(champions.stats.armorperlevel*6)).toFixed(1)}</td>
        <td>${((champions.stats.armor) +(champions.stats.armorperlevel*12)).toFixed(1)}</td>
        <td>${((champions.stats.armor) +(champions.stats.armorperlevel*18)).toFixed(1)}</td>
      </tr>

    <tr>
      <th>spellblock</th>
      <td>${champions.stats.spellblockperlevel}</td>
      <td>${champions.stats.spellblock}</td>
      <td>${((champions.stats.spellblock) +(champions.stats.spellblockperlevel*6)).toFixed(1)}</td>
      <td>${((champions.stats.spellblock) +(champions.stats.spellblockperlevel*12)).toFixed(1)}</td>
      <td>${((champions.stats.spellblock) +(champions.stats.spellblockperlevel*18)).toFixed(1)}</td>
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
        <p id="rol"><small>ROL</small><br>${champions.tags}</p>

        <table class="default">

        <tr>
          <th>stats</th>
          <th>per lvl</th>
          <th>lvl 1</th>
          <th>lvl 6</th>
          <th>lvl 12</th>
          <th>lvl 18</th>
        </tr>

        <tr>
          <th>hp</th>
          <td>${champions.stats.hpperlevel}</td>
          <td>${champions.stats.hp}</td>
          <td>${((champions.stats.hp) +(champions.stats.hpperlevel*6)).toFixed(1)}</td>
          <td>${((champions.stats.hp) +(champions.stats.hpperlevel*12)).toFixed(1)}</td>
          <td>${((champions.stats.hp) +(champions.stats.hpperlevel*18)).toFixed(1)}</td>
        </tr>

        <tr>
          <th>hpregen</th>
          <td>${champions.stats.hpregenperlevel}</td>
          <td>${champions.stats.hpregen}</td>
          <td>${((champions.stats.hpregen) +(champions.stats.hpregenperlevel*6)).toFixed(1)}</td>
          <td>${((champions.stats.hpregen) +(champions.stats.hpregenperlevel*12)).toFixed(1)}</td>
          <td>${((champions.stats.hpregen) +(champions.stats.hpregenperlevel*18)).toFixed(1)}</td>
        </tr>


        <tr>
          <th>mp</th>
          <td>${champions.stats.mpperlevel}</td>
          <td>${champions.stats.mp}</td>
          <td>${((champions.stats.mp) +(champions.stats.mpperlevel*6)).toFixed(1)}</td>
          <td>${((champions.stats.mp) +(champions.stats.mpperlevel*12)).toFixed(1)}</td>
          <td>${((champions.stats.mp) +(champions.stats.mpperlevel*18)).toFixed(1)}</td>
        </tr>

        <tr>
        <th>armor</th>
          <td>${champions.stats.armorperlevel}</td>
          <td>${champions.stats.armor}</td>
          <td>${((champions.stats.armor) +(champions.stats.armorperlevel*6)).toFixed(1)}</td>
          <td>${((champions.stats.armor) +(champions.stats.armorperlevel*12)).toFixed(1)}</td>
          <td>${((champions.stats.armor) +(champions.stats.armorperlevel*18)).toFixed(1)}</td>
        </tr>

       <tr>
        <th>spellblock</th>
        <td>${champions.stats.spellblockperlevel}</td>
        <td>${champions.stats.spellblock}</td>
        <td>${((champions.stats.spellblock) +(champions.stats.spellblockperlevel*6)).toFixed(1)}</td>
        <td>${((champions.stats.spellblock) +(champions.stats.spellblockperlevel*12)).toFixed(1)}</td>
        <td>${((champions.stats.spellblock) +(champions.stats.spellblockperlevel*18)).toFixed(1)}</td>
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
  if(difficultyValue === "higher"){
      let arrayOrderHigher = orderHigher(arrayChamps);
      showData(arrayOrderHigher)

  }

   if(difficultyValue === "low"){
    let arrayOrderLower = orderLower(arrayChamps);
    showData(arrayOrderLower)
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
      let arrayOrderAZ = orderAZ(arrayChamps);
      showData(arrayOrderAZ)
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




