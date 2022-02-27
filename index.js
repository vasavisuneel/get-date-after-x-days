const addDays = require("./date-fns/addDays");
const dates = function (days) {
  return addDays(new Date(22 - Aug - 2020), days);
};
console.log(dates(10));
module.exports = dates;
