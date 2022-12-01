// Crea un objeto llamado tvSamsung con las propiedades nombre (TV Samsung 42”), categoria (Televisores), unidades (4), precio (345.95) 
//     y con un método llamado importe que devuelve el valor total de las  unidades (nº de unidades * precio).

Number.prototype.moneda = function () {
    return this.toLocaleString("de-DE", {
        style: 'currency',
        currency: 'EUR'
    });
};


String.prototype.mayusculas = function () {
    return this.toLocaleUpperCase();
};

let tvSamsung = {
    nombre: 'TV Samsung 42”',
    unidades: 4,
    precio: 345.95,
    importe: function () {
        return (this.unidades * this.precio).moneda();
    }
}


console.log(`${(tvSamsung.nombre).mayusculas()}: ${tvSamsung.importe()}`);