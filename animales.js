function Animal(nombre,energia){
	this.nombre = nombre;
	this.energia = energia;
}

Animal.prototype.info = function(){
	console.log("Mi nombres es: " + this.nombre);
	console.log("Mi energia es: " + this.energia);
};

Animal.prototype.actualizarEnergia = function(energia){
	this.energia += energia;
}

Animal.prototype.comer = function(){
	this.energia += 6;
}

function Perro(nombre, energia){
	Animal.call(this, nombre, energia);
}

Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

Perro.prototype.correr = function(){
	console.log("Soy un perrito y estoy corriendo");
	this.actualizarEnergia(-5);
	this.info();
}

function Loro(nombre, energia){
	Animal.call(this, nombre, energia);
}

Loro.prototype = new Animal();
Loro.prototype.constructor = Loro;

Loro.prototype.volar = function() {
	console.log("Soy un loro y estoy volando");
	this.actualizarEnergia(-8);
	this.info();
}

Loro.prototype.comer = function(){
	console.log("Soy un loro y estoy comiendo");
	this.actualizarEnergia(10);
	this.info();
}

/*var julio = new Perro("Julio el perro", 50);
julio.info();
julio.correr();
*/
var christian = new Loro("christian el loro", 30);
christian.volar();
christian.comer();