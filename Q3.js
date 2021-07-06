var Employee =
{
company: 'Rohit'
}
var Emp1 = Object.create(Employee);
//delete Emp1.company;
console.log(Emp1.company);//Rohit

//The output of above code is "Rohit"
