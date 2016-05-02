/*
	Parametros
*/
var paramAnimal = {
	nombre: "Luis",
	energia: 120,
	PoL: 1 //Es un perro o Loro poner 0 de perro o 1 de loro

};
/*
	Clase Padre Animal
*/
function Animal(paramAnimal){
	this.nombre = paramAnimal.nombre;
	this.energia = paramAnimal.energia;
}

Animal.prototype.info = function(){
	console.log("nombre: " + this.nombre + "\n" +"energia: " + this.energia + "\n");
}

Animal.prototype.ActualizarEnergia = function(energia){
	this.energia = this.energia + energia;
	console.log("Energia Actualizada");
}

Animal.prototype.Comer = function(){
	this.energia += 6;
	console.log("Come\n");
}

/*
	Clase hija Perro
*/

function Perro(paramAnimal){
	Animal.call(this, paramAnimal);
}

Perro.prototype = new Animal(this); 
Perro.prototype.constructor = Perro;

Perro.prototype.Correr = function(){
	this.ActualizarEnergia(-5);
	console.log("Corre el perro");
}

/*
	Clase hija Loro
*/

function Loro(paramAnimal){
	Animal.call(this,paramAnimal);
}

Loro.prototype = new Animal(this);
oro.prototype.constructor = Loro;L

Loro.prototype.Volar = function(){
	this.ActualizarEnergia(-8);
	console.log("Vuela " + this.nombre + "\n");
}

Loro.prototype.Comer = function(){
	this.ActualizarEnergia(10);
	console.log("Come " + this.nombre + "\n");
}
/*
var newAnimal = new Animal(paramAnimal);
newAnimal.info();
newAnimal.ActualizarEnergia(newAnimal.Comer());
newAnimal.info();
*/


if(paramAnimal.PoL == 0){
	console.log("Es un Perro");
	var newAnimal = new Perro(paramAnimal);
	newAnimal.info();
	newAnimal.ActualizarEnergia(newAnimal.Correr());
	newAnimal.info();
	}
else if (paramAnimal.PoL == 1){
	console.log("Es un loro");
	var newAnimal = new Loro(paramAnimal);
	newAnimal.info();
	newAnimal.ActualizarEnergia(newAnimal.Volar());
	newAnimal.info();
	newAnimal.ActualizarEnergia(newAnimal.Comer());
	newAnimal.info();
	}
else 
	console.log("No es un animal");
