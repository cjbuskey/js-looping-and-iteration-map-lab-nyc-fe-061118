// Code your solution in this file.
function lowerCase(name) {
  return name.toLocaleLowerCase()
}

function lowerCaseDrivers(drivers) {
  return drivers.map(lowerCase);
}