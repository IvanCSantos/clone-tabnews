const calculadora = require("../models/calculadora.js")

test("somar 2 + 2 deveria retornar 4", () => {
    const resultado = calculadora.somar(2, 2)
    expect(resultado).toBe(4);
});

test("somar 2.5 + 2.5 deveria retornar 5", () => {
    const resultado = calculadora.somar(2.5, 2.5)
    expect(resultado).toBe(5);
});

test("somar 5 + 100 deveria retornar 105", () => {
    const resultado = calculadora.somar(5, 100)
    expect(resultado).toBe(105);
});

test("somar 'banana' + 100 deveria retornar 'Erro. Apenas números são permitidos como argumentos.'", () => {
    const resultado = calculadora.somar("banana", 100)
    expect(resultado).toBe("Erro. Apenas números são permitidos como argumentos.");
});

test("somar 5 + 'banana' deveria retornar 'Erro. Apenas números são permitidos como argumentos.'", () => {
    const resultado = calculadora.somar(5, "banana")
    expect(resultado).toBe("Erro. Apenas números são permitidos como argumentos.");
});

test("somar sem nenhum argumento deveria retornar 'Erro. Apenas números são permitidos como argumentos.'", () => {
    const resultado = calculadora.somar()
    expect(resultado).toBe("Erro. Apenas números são permitidos como argumentos.");
});

test("somar null + null argumento deveria retornar 'Erro. Apenas números são permitidos como argumentos.'", () => {
    const resultado = calculadora.somar(null, null)
    expect(resultado).toBe("Erro. Apenas números são permitidos como argumentos.");
});