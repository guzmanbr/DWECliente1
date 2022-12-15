//Importar clases
import {Persona} from './clases/clasePersona.js';
import {Empleado} from './clases/claseEmpleado.js';
import {Cliente} from './clases/claseCliente.js';


//Llamadas
let persona1 = new Persona ('JUAN', 'PÉREZ', 19);
let empleado1 = new Empleado ('federica', 'lópez', 25, 22050.2);
let cliente1 = new Cliente ('AnTONio','García', 28);
console.log (persona1.toString());
console.log (empleado1.toString());
console.log (cliente1.toString());
cliente1.fechaRegistro=[1998,4,30];
let empleado2 = new Empleado ( persona1.nombre, persona1.apellido, persona1.edad, 30000 );
console.log (empleado2.toString());
let persona2 = new Persona ('Alejandro', 'Muñoz', 30);
console.log (persona2.toString());
console.log ("Id del Empleado2: "+empleado2.id);
console.log ("id del Cliente 1: "+cliente1.id);
console.log ('Contador de Personas: '+ Persona.contadorPersonas);
let p23=new Persona();
console.log ('Contador de Personas: '+ Persona.contadorPersonas);
let p24=new Persona();
console.log ('Contador de Personas: '+ Persona.contadorPersonas);
let p25=new Persona();
console.log ('Contador de Personas: '+ Persona.contadorPersonas);
let p26=new Persona();
console.log ('Contador de Personas: '+ Persona.contadorPersonas);
