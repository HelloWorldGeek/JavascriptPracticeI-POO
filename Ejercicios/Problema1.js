/*
	Parametros
*/
var paramFigu = {
	numeroDeLados : 3,
//triangulo
	tipoDeTriangulo: "Rectangulo",
	base: 5,
	altura: 10,
//cuadrado
	lado: 5
};
/*
	Clase Padre Figura
*/
function Figura(paramFigu){
	this.numeroDeLados = paramFigu.numeroDeLados;
}

Figura.prototype.imprimir = function(){
	console.log( " Numero de Lados : "+ this.numeroDeLados);
}

/*
	Clase hija Triangulo
*/

function Triangulo(paramFigu){
	Figura.call(this, paramFigu);
	this.tipoDeTriangulo =  paramFigu.tipoDeTriangulo;
	this.base = paramFigu.base;
	this.altura = paramFigu.altura;
}
Triangulo.prototype = new Figura(this); //Object.create(Empleado);
Triangulo.prototype.constructor = Triangulo;

Triangulo.prototype.AreaTri = function(){
	var multi=(this.base * this.altura);
	var result=(multi/2);
	console.log(" Area de Triangulo: " + result); 
}

Triangulo.prototype.infos = function(){
	console.log( " Numero de Lados : "+ this.numeroDeLados + "\n" + " Tipo de triangulo : " + this.tipoDeTriangulo+
				  "\n" + " Base :" + this.base + "\n"+ " Altura :" + this.altura + "\n");
}

/*
	Clase hija Cuadrado
*/

function Cuadrado(paramFigu){
	Figura.call(this,paramFigu);
	this.lado = paramFigu.lado;
}

Cuadrado.prototype = new Figura(this); 
Cuadrado.prototype.constructor = Cuadrado;

Cuadrado.prototype.perimetro = function(){
	var result = (this.lado * 4);
	console.log(" Perimetro de cuadrado:"+result); 
}

Cuadrado.prototype.AreaCuad = function(){
	var result = (this.lado * this.lado);
	console.log(" Area de cuadrado:" + result); 
}

/*
	Imprime
*/
	if (paramFigu.numeroDeLados == 3)
	{
	console.log("-Es un Triangulo-" + "\n");
	var Figura1 = new Triangulo(paramFigu);
	Figura1.infos();
	Figura1.AreaTri();
	}
	else if (paramFigu.numeroDeLados == 4)
	{
	console.log("-Es un cuadrado-" + "\n");
	var Figura1 = new Cuadrado(paramFigu);
	Figura1.imprimir();
	Figura1.perimetro();
	Figura1.AreaCuad();
	}
	else 
		console.log("Figura no valida");

