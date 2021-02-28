import { suma, orderAZ, orderZA, orderHigher, orderLower, rolesData, formula} from '../src/data.js';


/*describe('Filtro de ordenAZ', () => {
  it('is a function', () => {
    expect(typeof orderAZ).toBe('function');
  });

  it('returns ``', () => {
    const filter = []
    expect(example()).toBe('example');
  });
});*/


describe('Formula Sumar', () => {
  it('is a function', () => {
    expect(typeof suma).toBe('function');
  });
  it('returns `4`', () => {
    expect(suma(2 , 2)).toEqual(4);
  });
});

//Retorna solo si el name.value del objeto inician con Mayusculas
//o si empiezan todos los name.value en minuscula
//Pero crea error si los name.valuepossen combinanciones de ambas
describe('Formula orderAZ', () => {
  it('is a function', () => {
    expect(typeof orderAZ).toBe('function');
  });
  it('returns `chogath,lux,shaco,udyr`', () => {
    const data = [
      { name: "lux" },
      { name: "udyr" },
      { name: "chogath" },
      { name: "shaco" },
    ];
    const dataAZ = [
      { name: "chogath" },
      { name: "lux" },
      { name: "shaco" },
      { name: "udyr" },
    ];
    expect(orderAZ(data)).toEqual(dataAZ);
  });
});
// Orden de forma Z-A
describe('Formula orderZA', () => {
  it('is a function', () => {
    expect(typeof orderZA).toBe('function');
  });
  it('returns `Viktor,Riven,Kayle,Anivia`', () => {
    const data = [
      { name: "Riven" },
      { name: "Anivia" },
      { name: "Viktor" },
      { name: "Kayle" },
    ];
    const dataAZ = [
      { name: "Viktor" },
      { name: "Riven" },
      { name: "Kayle" },
      { name: "Anivia" },
    ];
    expect(orderZA(data)).toEqual(dataAZ);
  });
});
//Ordenar por Dificultad ALTO-BAJO
//Los nombres deben estar escritos tal cual
describe('Formula Alto-Bajo', () =>{
  it("is a function", () => {
    expect(typeof orderHigher).toBe('function');
  });
  it('returns difficulty`9,8,4,3`' ,() => {
    const data = [
      { name: "Aatrox", info  :{difficulty : 4} },
      { name: "Elise" , info :{difficulty : 9} },
      { name: "maokai", info  :{difficulty : 8}  },
      { name: "Fiora" , info  :{difficulty : 3} },
    ];
    const dataHigher = [
      { name: "Elise", info  :{difficulty : 9} },
      { name: "maokai" , info :{difficulty : 8} },
      { name: "Aatrox", info  :{difficulty : 4}  },
      { name: "Fiora" , info  :{difficulty : 3} },
    ];

  expect(orderHigher(data)).toEqual(dataHigher);
  });
});
//Ordenar por Dificultad BAJO-ALTO
describe('Formula Bajo-Alto', () =>{
  it("is a function", () => {
    expect(typeof orderLower).toBe('function');
  });
  it('returns difficulty`3,5,7,9`' ,() => {
    const data = [
      { name: "Amumu", info  :{difficulty : 3} },
      { name: "FiddleSticks" , info :{difficulty : 9} },
      { name: "Talon", info  :{difficulty : 7}  },
      { name: "Tryndamere" , info  :{difficulty : 5} },
    ];
    const dataLower = [
      { name: "Amumu", info  :{difficulty : 3} },
      { name: "Tryndamere" , info :{difficulty : 5} },
      { name: "Talon", info  :{difficulty : 7}  },
      { name: "FiddleSticks" , info  :{difficulty : 9} },
    ];

  expect(orderLower(data)).toEqual(dataLower);
  });
});

// Filtro de POR SUS Roles(Tags)
// Solo funciona si Tag posee solo un elemento por Array
describe('Filtro de los Roles de los Campeones', () =>{
  it('is a function', () =>{
    expect(typeof rolesData).toBe('function');
  });
  it('returns para Support`Leona, Kayle, Lulu`', () =>{
    const data =[
      { name : "Leona", tags: "Support" },
      { name : "Kayle", tags:  "Support" },
      { name : "Lucian", tags: "Marksman" },
      { name : "Lulu", tags: "Support" },
    ];
    const dataTag=[
      { name : "Leona", tags: "Support" },
      { name: "Kayle", tags : "Support" },
      { name: "Lulu", tags:  "Support" },
    ];
    expect(rolesData(data, 'Support')).toEqual(dataTag);
  });
});

// Estadísticas - Tabla
describe('Formula stats', () => {
  it('is a function', () => {
    expect(typeof formula).toBe('function');
  });
  const data = [
    {
          stats: {
          hp: 537.8,
          hpperlevel: 85,
          mp: 105.6,
          mpperlevel: 45,
          armor: 24.384,
          armorperlevel: 3.8,
          spellblock: 32.1,
          spellblockperlevel: 1.25,
          hpregen: 6.59,
          hpregenperlevel: 0.5,
        },
     },
  ];
  it('Debería retornar `1047.8	`', () => {
    expect(formula(6, data, 1)).toEqual('1047.8');
  });
  it('Debería retornar `9.6`', () => {
    expect(formula(6, data, 2)).toEqual('9.6');
  });
  it('Debería retornar `375.6`', () => {
    expect(formula(6, data, 3)).toEqual('375.6');
  });
  it('Debería retornar `47.2`', () => {
    expect(formula(6, data, 4)).toEqual('47.2');
  });
  it('Debería retornar `39.6`', () => {
    expect(formula(6, data, 5)).toEqual('39.6');
  });
});


