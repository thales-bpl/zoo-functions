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
  if (!employeeName) {
    return {};
  }
  return employees
    .find(
      (employee) => employeeName === employee.firstName || employeeName === employee.lastName,
    );
}

function createEmployee(personalInfo, associatedWith) {
  return { ...personalInfo, ...associatedWith };
}

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function addEmployee(id, firstName, lastName, managers = [], responsibleFor = []) {
  const newEmployee = {
    id,
    firstName,
    lastName,
    managers,
    responsibleFor,
  };
  return employees.push(newEmployee);
}

function countAnimals(specie) {
  if (!specie) {
    const animal = species.reduce((acc, cur) => {
      acc[cur.name] = cur.residents.length;
      return acc;
    }, {});
    return animal;
  }
  return species
    .find((animal) => animal.name === specie).residents.length;
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

function getSchedule(dayName) {
  const fullSchedule = `Open from ${opening}am until ${closing}pm`;
  if (!dayName) return fullSchedule;
}

function getOldestFromFirstSpecies(id) {
  // seu código aqui
}

function increasePrices(percentage) {
  // seu código aqui
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
