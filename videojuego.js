function Personajes(nombre,NpEnergia){
	this.nombre = nombre;
	this.NpEnergia = NpEnergia;
}

Personajes.prototype.alimentarse = function(cEnergia){
	this.NpEnergia = cEnergia +this.NpEnergia;
	console.log(this.NpEnergia);
}

function Guerreros (arma,nombre,NpEnergia){
	Personajes.call(this,nombre,NpEnergia);
	this.arma = arma;
}
Guerreros.prototype = new Personajes();
Guerreros.prototype.constructor = Guerreros;

Guerreros.prototype.combatir = function (gEnergia){
	this.NpEnergia =this.NpEnergia - gEnergia;
	console.log("Nombre: " + this.nombre +"\nArma: " + this.arma + "\nNivel Propio de Energia = " + this.NpEnergia);
}
var guerrero = new Guerreros("Zangetsu","Kakaroto",120);
console.log("\n\nCaracteristicas del Guerrero \n");
guerrero.combatir(40);

function Magos (poder,nombrePoder,nombre,NpEnergia){
	Personajes.call(this,nombre,NpEnergia);
	this.nombrePoder = nombrePoder;
	this.poder = poder;
	this.NpEnergia = NpEnergia;
}

Magos.prototype.encantar = function (){
	this.NpEnergia = this.NpEnergia - 2;
	console.log("Poder del Mago : " + this.nombrePoder + "\n");
}

console.log("\n\nCaracteristicas del Mago \n");
var maguito = new Magos(120,"Santoryou","Jerry",100);
maguito.encantar();

