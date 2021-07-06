const gimli =
{ name: "Gimli",
race: "dwarf",
weapon: "axe",
greet: function()
      { return `Hi, my name is ${this.name}!`; 
        
      }, 
  
};
console.log(gimli.greet());
/*

// we can access the greet property with help of calling the greet using function 
paranthesis followed by object gimli.
  
  OUTPUT
  
  Hi, my name is Gimli!

*/