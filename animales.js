function Animal(nombre,energia){
	this.nombre = nombre;
	this.energia = energia;
}

Animal.prototype.info = function(){
	nombre = this.nombre;
	energia = this.energia;
	console.log("Mi nombres es: " + nombre);
	console.log("Mi energia es: " + energia);
};

var animal1 = new Animal('Larry',10);
console.log(animal1.info());

function Perro(){
}

Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

Perro.prototype.info = function(){
	Animal.prototype.info.call(this);
};

Perro.prototype.correr = function(){
	console.log("Soy un perrito y estoy corriendo");
}


var animal = new Animal('Jose', 15);
Perro.correr();


function Loro(){

}

Loro.prototype = new Animal();
