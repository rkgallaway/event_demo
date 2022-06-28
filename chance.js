'uses strict';

const Chance = require('chance');


const chance = new Chance();

// for the lab:
// get a random order number: Globally Unique Identifier (guid)
// name
// address
let person = {
  guid: chance.guid(),
  name: `${chance.first()} ${chance.last()}`,
  address: chance.address(),
  cityStateZip: `${chance.city()}, ${chance.state()}  ${chance.zip()}`,
};

console.log(person);
