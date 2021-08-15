const data = require('./data');
const { species } = require('./data');
const { employees } = require('./data');
const { hours } = require('./data');
const { prices } = require('./data');

/* console.log(prices.Adult);
console.log(hours); */

function getSpeciesByIds(...ids) {
  return species.filter((animalId, index) => animalId.id === ids[index]);
}

function getAnimalsOlderThan(animal, age) {
  return species
    .find((objAnimal) => objAnimal.name === animal)
    .residents.every((animalAge) => animalAge.age >= age);
}

function getEmployeeByName(employeeName) {
  const verifier = (!employeeName)
    ? {}
    : employees.find((employee) => employeeName === employee.firstName
    || employeeName === employee.lastName);
  return verifier;
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  return employees.push({ id, firstName, lastName, managers, responsibleFor });
}

const animalCounter = (acc, cur) => {
  acc[cur.name] = cur.residents.length;
  return acc;
};

function countAnimals(specie) {
  const verifier = (!specie)
    ? species.reduce(animalCounter, {})
    : species.find((animal) => animal.name === specie).residents.length;
  return verifier;
}

function calculateEntry(entrants) {
  if (!entrants) return 0;
  const { Adult = 0, Child = 0, Senior = 0 } = entrants;
  const adultPrices = prices.Adult * Adult;
  const childPrices = prices.Child * Child;
  const seniorPrices = prices.Senior * Senior;
  return adultPrices + childPrices + seniorPrices;
}

function getAnimalMap(options) {
  // seu código aqui
}

const scheduleReducer = (acc, cur) => {
  if (cur[1].open === 0 || cur[1].close === 0) {
    acc[cur[0]] = 'CLOSED';
    return acc;
  }
  acc[cur[0]] = `Open from ${cur[1].open}am until ${(cur[1].close - 12)}pm`;
  return acc;
};

function fullSchedule(parameter) {
  return parameter.reduce(scheduleReducer, {});
}

function getSchedule(dayName) {
  const schedule = Object.entries(hours); // Obj hours into Array hours
  const weekSchedule = fullSchedule(schedule); // array into obj com horários
  if (!dayName) return weekSchedule;
  const daySchedule = Object.entries(weekSchedule).find((day) => day[0] === dayName); // seleciona schedule do dia-argumento
  return { [dayName]: daySchedule[1] };
}

const sortByOlder = (acc, cur) => {
  if (acc.age > cur.age) return acc;
  return cur;
};

function getOldestFromFirstSpecies(id) {
  const firstAnimal = employees.find((employee) => employee.id === id).responsibleFor[0];
  const oldestAnimal = species.find((animal) => animal.id === firstAnimal)
    .residents.reduce(sortByOlder);
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

function increasePrices(percentage) {
  const actualPercent = 1 + percentage / 100;
  // Arredondar para 2 dígitos - Referência: https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
  prices.Adult = Math.round((prices.Adult * actualPercent) * 100) / 100;
  prices.Child = Math.round((prices.Child * actualPercent) * 100) / 100;
  prices.Senior = Math.round((prices.Senior * actualPercent) * 100) / 100;
}

function getEmployeeCoverage(idOrName) {
  // seu código aqui
}

module.exports = {
  calculateEntry,
  getSchedule,
  countAnimals,
  getAnimalMap,
  getSpeciesByIds,
  getEmployeeByName,
  getEmployeeCoverage,
  addEmployee,
  isManager,
  getAnimalsOlderThan,
  getOldestFromFirstSpecies,
  increasePrices,
  createEmployee,
};
