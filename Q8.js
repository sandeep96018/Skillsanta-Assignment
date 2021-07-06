const name = { firstName: 'Philip',
lastName: 'Fry' };
const details = {
job: 'Delivery Boy',
employer: 'Planet Express'
};
const name_details = Object.assign(name, details);

console.log(name_details);

// we can copy the properties of one object to another object with help of Object.assign() method.

/*   OUTPUT 

{
  firstName: 'Philip',
  lastName: 'Fry',
  job: 'Delivery Boy',
  employer: 'Planet Express'
}

*/