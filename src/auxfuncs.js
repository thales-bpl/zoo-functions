const data = require('./data');
const { species } = require('./data');
const { employees } = require('./data');
const { hours } = require('./data');
const { prices } = require('./data');

const scheduleReducer = (acc, cur) => {
  if (cur[1].open === 0 || cur[1].close === 0) {
    acc[cur[0]] = 'CLOSED';
    return acc;
  }
  acc[cur[0]] = `Open from ${cur[1].open}am until ${(cur[1].close - 12)}pm`;
  return acc;
};

function fullSchedule(parameter) {
  const weekDays = parameter.reduce(scheduleReducer, {});
  return weekDays;
}

function getSchedule(dayName) {
  const schedule = Object.entries(hours);
  const week = fullSchedule(schedule);
  const workWeek = Object.entries(week);
  if (!dayName) return week;
  const targetDay = workWeek.find((day) => day[0] === dayName);
  return { [dayName]: targetDay[1] };
}

console.log(getSchedule('Monday'));






module.exports = {
  fullSchedule,
}