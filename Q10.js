function Hero(name, level)
{
name = name;
level = level;
}

/*	As we know that the constructor funtion name start with capital letter and 

	constructor function should be called only with the new operater.

	in above example we have to use this keyword for assinging the value of name and level 
	fo eg.

	function Hero(name, level)
	{
		this.name = name;
		this.level = level;
	}
	let h = new Hero("sk",2);
	console.log(h); 

	it will return the sk ,2 because this indicates the current object.
	and if we do not use use the this keyword it object hero consist empty object.

	*/