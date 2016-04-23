/*
* Clase Padre EMPLEADO
*/
function Empleado(parametros){
	this.nombre = parametros.nombre;
	this.cedula = parametros.cedula;
	this.edad = parametros.edad;
	this.casado = parametros.casado;
	this.salario = parametros.salario;
}

Empleado.prototype.imprimir = function(){
	console.log( " Nombre : "+ this.nombre + "  salario : " + this.salario);
}

Empleado.prototype.aumentarSalario = function(porcentaje){
	var salariofinal = this.salario + (this.salario * porcentaje * 0.01);
	this.salario = salariofinal;
}

/*
* Clase Hija Programador
*/

function Programador(parametros){
	Empleado.call(this, parametros);
	this.lineasDeCodigoPorHora =  parametros.lineasDeCodigoPorHora;
	this.lenguajeDominante = parametros.lenguajeDominante;
}

Programador.prototype = new Empleado(this); //Object.create(Empleado);
Programador.prototype.constructor = Programador;

Programador.prototype.calificaficion = function(){
	if (this.lineasDeCodigoPorHora <= 50) {
		console.log( " El programador es junior ");
	}else if(this.lineasDeCodigoPorHora >= 50 && this.lineasDeCodigoPorHora <= 100){
		console.log( " El programador es semi senior");
	}else if(this.lineasDeCodigoPorHora > 100){
		console.log( "El programador es un senior")
	}
}

Programador.prototype.imprimir = function(){
	Empleado.prototype.imprimir.call(this);
	console.log(" ESTOY EN LA CLASE HIJA ");
};

var param = {
	nombre: "julio",
	lineasDeCodigoPorHora: 60,
	lenguajeDominante: "js",
	cedula: "12asdf",
	edad: 23,
	casado: false,
	salario: 25000
};

var julio = new Programador(param);
julio.imprimir();















