// Importar la función sum del archivo app.js
const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app.js');

// Comienza tu primera prueba
test("Convierte 1 dolar a yenes", () => {
    const result = fromDollarToYen(1); 

    expect(result).toBeCloseTo(156.5);
 
});

test("Convierte 1 euro a dolares", () => {
    const result = fromEuroToDollar(1); 

    expect(result).toBeCloseTo(1.07);
 
});

test("Convierte 1 yen a libras", () => {
    const result = fromYenToPound(1); 

    expect(result).toBeCloseTo(0.87);
 
});
