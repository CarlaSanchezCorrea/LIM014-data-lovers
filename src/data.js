// Suma
export const suma= (a,b) => {
const add = a + b ;
return add;
}

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





