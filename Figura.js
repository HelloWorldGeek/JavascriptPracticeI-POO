
//Clase Padre Figura
function Figura(numeroDeLados){
	this.numeroDeLados = numeroDeLados;
}

//Metodo de la clase Figura
Figura.prototype.info = function() {
	console.log("Soy un figura con " + this.numeroDeLados + " lados ");
};

function Triangulo(tipoDeTriangulo, cantidadDeLados,base,altura){
	Figura.call(this, cantidadDeLados);
	this.tipoDeTriangulo = tipoDeTriangulo;
	this.base = base;
	this.altura = altura;	
}

Triangulo.prototype = new Figura();
Triangulo.prototype.constructor = Triangulo;

Triangulo.prototype.info = function(){
	Figura.prototype.info.call(this);
	console.log("Este es un Triangulo");
	console.log("*************************************");
};

Triangulo.prototype.getArea = function(){
	var getArea = (this.base*this.altura)/2;
	console.log("El area del Triangulo es: " + getArea);
}


//Función del Cuadrado
function Cuadrado(tipoDeCuadrado, cantidadDeLados){
	Figura.call(this,cantidadDeLados);
	this.tipoDeCuadrado = tipoDeCuadrado;
	var perimetro = cantidadDeLados * 4;
	var area = cantidadDeLados * cantidadDeLados;
	console.log("El perimetro del cuadrado es: " + perimetro);
	console.log("El area del cuadrado es: "+ area);
}

Cuadrado.prototype = new Figura();
Cuadrado.prototype.constructor = Cuadrado;

Cuadrado.prototype.info = function(){
	Figura.prototype.info.call(this);
	console.log("Este es un cuadrado");	
};

var figura = new Triangulo("Rectangulo",3 , 4 ,2);
figura.info();

var figura1 = new Cuadrado("Cuadrado",  4);
figura1.info();



