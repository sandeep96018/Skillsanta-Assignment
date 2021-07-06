function foo1()
{
return {
bar: "hello"
};
}


function foo2()
{
  return
  {
    bar: "hello"
   };
}

/* The above both function does not return same thing.
the foo1 funtion returns the bar:hello and foo2 function returns the undefined
 because if after return statement new line is encountered the interpreter automatic place semicolon after 
 return statement and rest of code does not execute so these both function are not same.