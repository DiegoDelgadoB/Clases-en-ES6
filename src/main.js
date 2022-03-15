import Impuesto from './tax.js';
import Cliente from './client.js';


let impuesto1 = new Impuesto(1830000, 230000)
let impuesto2 = new Impuesto(5546000, 500000)


let cliente1 = new Cliente("Juan", impuesto1)
let cliente2 = new Cliente("Pedro", impuesto2)


console.log(cliente1.calcularImpuesto())

console.log(cliente2.calcularImpuesto()) 
