const data = require('./data');
const { species } = require('./data');
const { employees } = require('./data');
const { hours } = require('./data');
const { prices } = require('./data');

/* function fullSchedule() {
  const days = Object.keys(hours);
  const times = Object.values(hours);
  return hours.map((day) => `${day}: Open from ${day.open}am until ${day.close}pm`);
}

console.log(fullSchedule()); */

module.exports = {
  fullSchedule,
}