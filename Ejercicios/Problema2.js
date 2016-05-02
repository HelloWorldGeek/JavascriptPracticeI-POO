/*
	Parametros
*/
var paramPerso = {
	nombre: "DarkPlayer",
	energia: 120,

	//Guerrero
	arma: "Espada",

	//Mago
	poder: "Fuego"
};
/*
	Clase Padre Personaje
*/
function Personajes(paramPerso){
	this.nombre = paramPerso.nombre;
	this.energia = paramPerso.energia;
}

Personajes.prototype.Alimentarse = function(energiaNueva){
	this.energia += energiaNueva;
	console.log("Aumento "+"+"+ energiaNueva+ ": " + this.energia);
}

Personajes.prototype.ConsumirEnergia = function(gastoEnergia){
	this.energia -= gastoEnergia;
	console.log("Gasto "+"-"+gastoEnergia+": " + this.energia);
}

/*
	Clase hija Guerrero
*/

function Guerreros(paramPerso){
	Personajes.call(this, paramPerso);
	this.arma = paramPerso.arma;
}
Guerreros.prototype = new Personajes(this); //Object.create(Empleado);
Guerreros.prototype.constructor = Guerreros;

Guerreros.prototype.Combatir = function(energia){
	this.energia -= energia;
	console.log("Uso de ataque Espada Roja, Reduce: " + energia + "\n"+ "Energia Actual: " + this.energia );
}

/*
	Clase hija Mago
*/

function Magos(paramPerso){
	Personajes.call(this,paramPerso);
	this.poder = paramPerso.poder;
	this.energia = 100;
}

Magos.prototype = new Personajes(this); //Object.create(Empleado);
Magos.prototype.constructor = Magos;

Magos.prototype.encantar = function(){
	this.energia -= 2 ;
	console.log(" Uso de encanto del agua"); 
}

if(paramPerso.energia < 100){
	console.log(" Es un Guerrero");
	var Person = new Guerreros(paramPerso);
	//Person.Personaje();
	Person.Guerrero();
	Person.Combatir(50);
	//Person.Alimentarse(50);
	//Person.ConsumirEnergia(40);
}else if (paramPerso.energia >= 100){
	console.log(" Es un Mago");
	var Person = new Magos(paramPerso);
	Person.Mago();
	Person.encantar();
	//Person.Personaje();
	//Person.Alimentarse(50);
	//Person.ConsumirEnergia(40);
}else{
	console.log("No es un Personaje");
}

