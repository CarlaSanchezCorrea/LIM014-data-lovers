// Suma
export const suma= (a,b) => {
const add = a + b ;
return add;
}
export const formula= (lvl, data,x) =>{

  let result = [];
  //a= numero de lvl || b =array||c = condicion si es igual según el stats requerido
for (let i = 0; i < data.length; i++) {

  if(x === 1 ){
    result.push(parseFloat(data[i].stats.hp) + (parseFloat(data[i].stats.hpperlevel) * lvl)).toFixed(1);
  }

  else if(x === 2){
    result.push(parseFloat(data[i].stats.hpregen) + (parseFloat(data[i].stats.hpregenperlevel) * lvl)).toFixed(1);
  }
  else if(x === 3){
    result.push(parseFloat(data[i].stats.mp) + (parseFloat(data[i].stats.mpperlevel) * lvl)).toFixed(1);
  }
  else if(x === 4){
    result.push(parseFloat(data[i].stats.armor) + (parseFloat(data[i].stats.armorperlevel) * lvl)).toFixed(1);
  }
  else if(x === 5){
    result.push(parseFloat(data[i].stats.spellblock) + (parseFloat(data[i].stats.spellblockperlevel) * lvl)).toFixed(1);
  } else {
    return 0
  }
    return result
  }

};




//ORDEN AZ - ZA//
export const orderAZ = (data) => {
  const answer =
  data.sort((a,z) => {
    if (a.name > z.name) {
      return 1;
    }
    else if (a.name < z.name ){
      return -1;

    } else {
      return 0;
    }
  });
  return answer;
};

export const orderZA = (data) => {
  const answer =
  data.sort ((z,a) => {
    if (a.name > z.name) {
      return 1;
    }
    else if (a.name < z.name ){
      return -1;

    } else {
      return 0;
    }
  });
  return answer;
};

//ORDEN DIFICULTAD//

export const orderHigher=(data)=> {
  const result =
  data.sort((b, a) => {
    if (a.info.difficulty > b.info.difficulty) {
      return 1
    }
    else if (a.info.difficulty < b.info.difficulty) {
      return -1;
    } else {
      return 0;
    }
  });
return result;
};

export const orderLower=(data)=> {
  const result =
  data.sort((b, a) => {
    if (a.info.difficulty < b.info.difficulty) {
      return 1
    }
    else if (a.info.difficulty > b.info.difficulty) {
      return -1;
    } else {
      return 0;
    }
  });
return result;
};

//Roles

export const rolesData = (data, rol) => {
  const filtrarRoles = data.filter((roles) => {
    return roles.tags.includes(rol);
  }
  )
  return  filtrarRoles;
};





