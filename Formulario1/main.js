/*
* Variables Globales
*/ 
var empleados = [];

/*
* Clase Empleado
*/
function Empleado(arguments) {
	this.firstname = arguments.firstname;
	this.lastname = arguments.lastname;
	this.dni = arguments.dni;
	this.telefono = arguments.telefono;
	this.direccion = arguments.direccion;
}

Empleado.prototype.fullName = function() {
	return this.firstname + " " + this.lastname;
};


/*
* Evento del formulario para registrar empleados
*/

function registrar() {
	var empleadoJson = {
		firstname : document.getElementById('firstname').value,
		lastname: document.getElementById('lastname').value,
		dni: document.getElementById('dni').value,
		telefono: document.getElementById('telefono').value,
		direccion: document.getElementById('direccion').value	
	}
	var empleado = new Empleado(empleadoJson);
	empleados.push(empleado);
	actualizarTabla();
	return false;
}

/*
* Actualizar tabla de empleados
*/

function actualizarTabla(){
	var contenedor = document.getElementById('lista_de_empleados');
	contenedor.innerHTML = "";
	var contenidoHTML = "<table> <thead><tr><td> Nombre completo </td> <td> Dni </td> <td> Telefono </td> <td> Direccion </td>	</thead> <tbody>";
	empleados.forEach(function (empleado){
		contenidoHTML += "<tr><td> " + empleado.fullName() + "</td>" + "<td>" + empleado.dni + "</td>"+ "<td>" + empleado.telefono + "</td>"+ "<td>" + empleado.direccion + "</td> </tr>";
	});
	contenidoHTML += " </tbody> </table>";
	contenedor.innerHTML = contenidoHTML;
}

