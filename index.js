// Code your solution in this file.
function lowerCase(name) {
  return name.toLocaleLowerCase()
}

function lowerCaseDrivers(drivers) {
  return drivers.map(lowerCase);
}

function separateStrings(names) {
  let newNames = names.split(' ');
  let newNameObject = {
    firstName: newNames[0],
    lastName: newNames[1]
  }
  return newNameObject;
}

function nameToAttributes(drivernames) {
  return drivernames.map(separateStrings);
}

function attributesToPhrase(drivers) {
  const drivers = [
    {name: 'Bobby', hometown: 'Pittsburgh'},
    {name: 'Carson', hometown: 'Philadelphia'},
    {name: 'Alex', hometown: 'District of Columbia'}
    ]
  return drivers.map(`${drivers.name} is from ${drivers.hometown}`)
}