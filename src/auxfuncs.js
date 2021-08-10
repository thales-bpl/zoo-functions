const data = require('./data');
const { species } = require('./data');
const { employees } = require('./data');
const { hours } = require('./data');
const { prices } = require('./data');

function getOldestFromFirstSpecies(id) {
  const firstAnimal = employees
    .find((employee) => employee.id === id)
    .responsibleFor[0];
  const specie = species.find((animal) => animal.id === firstAnimal);
  const oldestAnimal = specie.residents.reduce((acc, cur) => {
    if (acc.age > cur.age) return acc;
    return cur;
  });
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}
console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));
/* getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'); */




/* const managedAnimal = species.find((animalId) => animalId.id === responsible[0]);

const manager = employees.find((name) => name.id === id); 
  const responsible = manager.responsibleFor;

const compareAges = managedAnimal.residents.reduce((oldest, tested) => {
  if (oldest.age > tested.age) {
    return oldest;
  } return tested;
});
return [compareAges.name, compareAges.sex, compareAges.age];
 */



module.exports = {

}