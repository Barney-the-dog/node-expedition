const fs = require('fs');
const PATH = './src';

const crew = fs.readFileSync(PATH + '/crew.txt', 'utf-8').split('\r\n').map((el) => el.split(', '))
const eqp = fs.readFileSync(PATH + '/equipment.txt', 'utf-8').split('\r\n').map((el) => el.split(', '))
const rockets = fs.readFileSync(PATH + '/rockets.txt', 'utf-8').split('\r\n').map((el) => el.split(', '))

//позволяет выбрать самого опытного врача
function getRightDr() {
let docs = [];
for (let i=1; i<crew.length; i++) {
  if (crew[i].includes('Врач')) {
    docs.push(crew[i]);
}
}
let arrBest = docs.sort((a,b) => +b[3] - +a[3]);
return arrBest[0].join(', ');
}
console.log(getRightDr())

//позволяет выбрать самого опытного бортмеханика среди женщин
function getRightEngineer(){
  let engineers = [];
  for (let i=1; i<crew.length; i++) {
    if (crew[i].includes('ж')&&crew[i].includes('Бортмеханик')) {
      engineers.push(crew[i]);
  }
  }
  let engineersBest = engineers.sort((a,b) => +b[3] - +a[3]);
  return engineersBest[0].join(', ');
  }
  console.log(getRightEngineer())


//Позволяет отобрать все луноходы
function getAllRover(){
  return eqp.filter((el) => el.includes('луноход')).map((el) => el.join(', '))
}

//позволяет выбрать все межзвездные ракеты
function getRightRocket(){
  return rockets.filter((el) => el.includes('межзвездная')).map((el) => el.join(', '))
}


module.exports = {
  getRightDr,
  getRightEngineer,
  getAllRover,
  getRightRocket
};
