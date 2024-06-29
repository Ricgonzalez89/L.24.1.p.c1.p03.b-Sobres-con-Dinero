/*Se tienen N sobres con dinero, cada uno con billetes del mismo valor. De cada sobre se
|*conoce el valor del billete y la cantidad. Se requiere determinar el total de dinero: 
|*a. en cada sobre, 
|*b. entre todos los sobres.
|*El cliente entrega el siguiente formato para la presentación de la salida: 
|*
|*El sobre Nº1 tiene $50
|*El sobre Nº2 tiene $40
|*El sobre Nº3 tiene $400
|*El sobre Nº4 tiene $150
|*El total entre todos los sobres es de $640
|*
|*Se procesaron para este ejemplo 4 sobres: a) 5 billetes de $10, b) 2 de $20, c) 4 de $100 y
|*d) 3 de $50.
*/
import Cl_sobre from "./Cl_sobre.js";
import Cl_admin from "./Cl_admin.js";

let sobre1 = new Cl_sobre(10, 5);
let sobre2 = new Cl_sobre(20, 2);
let sobre3 = new Cl_sobre(100, 4);
let sobre4 = new Cl_sobre(50, 3);
let adm = new Cl_admin();

adm.procesarSobre(sobre1);
adm.procesarSobre(sobre2);
adm.procesarSobre(sobre3);
adm.procesarSobre(sobre4);

let interfaz = document.getElementById("interfaz");

interfaz.innerHTML = `
<br>El sobre No.1 tiene $${sobre1.calcDin()}
<br>El sobre No.2 tiene $${sobre2.calcDin()}
<br>El sobre No.3 tiene $${sobre3.calcDin()}
<br>El sobre No.4 tiene $${sobre4.calcDin()}
<br>
<br>El total entre todos los sobres es de $${adm.dineroTotal()}
`;