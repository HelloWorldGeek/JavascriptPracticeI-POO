Se requiere crear una clase Padre llamada Figura y sus dos clases hijas triangulo y cuadrado.

Figura >
-numeroDeLados : int 
+info() // => imprimir numero de lados de la figura

Triangulo >
-tipoDeTriangulo: String
-base: int
-altura: int
+info() // => sobreescribir el metodo info y imprimir el tipo de triangulo, base y altura
+getArea() // => obtener el area del triangulo

Cuadrado >
-lado: int
+getPerimetro() // => obtener el perimetro del cuadrado
+getArea() // => obtener el area del cuadrado

////////////////////////////////////////////////
Un videojuego tiene Personajes. Cada personaje tiene un nombre
(String) y un nivel propio de energía (int). Además implementan el
método alimentarse, que recibe por parámetro una cantidad de energía
(int) con el que incrementa el nivel propio de energía. Los personajes son:
> Guerreros: tienen además un arma (String). Al momento de la
instanciación reciben su nombre, arma y nivel propio de energía
inicial. Los guerreros tienen un método combatir que recibe por
parámetro la cantidad de energía a gastar en el ataque, la cual es
descontada de su nivel propio de energía. El método combatir retorna
el arma y la cantidad de energía del ataque concatenados.
> Magos: tienen además un poder (String). Al momento de la
instanciación reciben su nombre y poder. Los magos son siempre
creados con un nivel propio de energía igual a 100. Proveen un
método encantar, que disminuye en 2 unidades el nivel propio de
energía y que retorna el poder del mago.

Personaje > 
- nombre: String
- energía: int
+alimentarse(energiaNueva:int)
+consumirEnergia(gastoEnergia:int)
+Personaje(nombre:String, energia:int) 

Guerrero >
-arma: String
+combatir(energ:int):String
+Guerrero(nombre:String, energía:int, arma:String) 

Mago >
-poder: String
+encantar():String
+Mago(nombre:String, poder:String)

//////////////////////////////////////////
Se requiere implementar las siguientes clases:

Animal >
-nombre: String
-energia: int
+info()//  => imprimir nombre y energia del animal
+actualizarEnergia(energia:int)// actualizar la energia del animal, bien positivo o negativo
+comer() // => aumentar energia en 6

Perro >
-correr() // => disminuir energia en 5

Loro>
-volar() // => disminuir energia en 8
+comer() // => sobreescribir comer y aumentar la energia en 10

function Figura(numeroDeLados){
	this.numeroDeLados = numeroDeLados;
}

Figura.prototype.info = function() {
	console.log(" Soy un figura con " + this.numeroDeLados + " lados ");
};

function Triangulo(tipoDeTriangulo, cantidadDeLados){
	Figura.call(this, cantidadDeLados);
	this.tipoDeTriangulo = tipoDeTriangulo;
}

Triangulo.prototype = new Figura();
Triangulo.prototype.constructor = Triangulo;

Triangulo.prototype.info = function(){
	Figura.prototype.info.call(this);
	console.log(" GG ");
};

function Cuadrado(tipoDeCuadrado, cantidadDeLados){
	Figura.call(this, cantidadDeLados);
	this.tipoDeCuadrado = tipoDeCuadrado;
}

Cuadrado.prototype = new Figura();
Cuadrado.prototype.constructor = Cuadrado;

Cuadrado.prototype.info = function(){
	Figura.prototype.info.call(this);
	console.log(" GG SOY Cuadrado ");	
};

var figura1 = new Triangulo("Rectangulo", 3);
figura1.info();

var figura2 = new Cuadrado("Cuadrado",  4);
figura2.info();