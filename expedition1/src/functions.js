const fs = require('fs');
const PATH = './src';

const crew = fs.readFileSync(PATH + '/crew.txt', 'utf-8').split('\r\n').map((el) => el.split(', '))
const eqp = fs.readFileSync(PATH + '/equipment.txt', 'utf-8').split('\r\n').map((el) => el.split(', '))
const rockets = fs.readFileSync(PATH + '/rockets.txt', 'utf-8').split('\r\n').map((el) => el.split(', '))

//позволяет выбрать самого опытного капитана
function getRightCaptain() {
// let capt = [];
// for (let i=1; i<crew.length; i++) {
//   if (crew[i].includes('Капитан')) {
//     capt.push(crew[i]);
// }
// }
// let arrBest = capt.sort((a,b) => +b[3] - +a[3]);
// return arrBest[0].join(', ');

let capt = crew.filter((el) => el.includes('Капитан')).sort((a,b) => +b[3] - +a[3])
return capt[0].join(', ')
}
console.log(getRightCaptain())

//позволяет выбрать самого опытного врача среди женщин
function getRightDoc() {
  // let dr = [];
  // for (let i=1; i<crew.length; i++) {
  //   if (crew[i].includes('ж')&&crew[i].includes('Врач')) {
  //     dr.push(crew[i]);
  // }
  // }
  // let drBest = dr.sort((a,b) => +b[3] - +a[3]);
  // return drBest[0].join(', ');
  let drBest = crew.filter((el) => el.includes('Врач')&& el.includes(('ж'))).sort((a,b) => +b[3] - +a[3])
  return drBest[0].join(', ')
  }
  console.log(getRightDoc())


//позволяет выбрать всех бортмехаников
function getAllEngineer() {
    return crew.filter((el) => el.includes('Бортмеханик')).map((el) => el.join(', '))
    }

console.log(getAllEngineer())

//Позволяет отобрать все марсоходы
function getAllRover(){
  return eqp.filter((el) => el.includes('марсоход')).map((el) => el.join(', '))
}

//позволяет выбрать только те марсоходы, которые смогут прослужить больше 3 лет
function getRightRovers(){
 return eqp.filter((el) => el.includes('марсоход')&&el[2]>3).map((el) => el.join(', '))
  
}

//позволяет выбрать ракету с максимальной дальностью полёта
function getRightRocket(){
  let rock = rockets.sort((a,b)=> +b[2] - +a[2])
  return rock[1].join(', ')
}


module.exports = {
  getRightCaptain,
  getAllEngineer,
  getRightDoc,
  getAllRover,
  getRightRovers,
  getRightRocket
};
