export default class Cliente {
    constructor(nombre, impuesto) {
        this._nombre = nombre;
        this._impuesto = impuesto;
    }

    get getNombre() {
        return this._nombre
    }

    set setNombre(nombre) {
        this._nombre = nombre
    }

    calcularImpuesto(){
        return `El impuesto anual de ${this.getNombre} es de: $${((this._impuesto.getMontoBrutoAnual - this._impuesto.getDeducciones)*0.23)}`
    }
}
