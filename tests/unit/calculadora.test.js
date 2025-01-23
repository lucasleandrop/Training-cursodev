const calculadora = require("../../models/calculadora");

test("2 + 2 = 4", () => {
  const resultadoSoma = calculadora.somar(2, 2);
  expect(resultadoSoma).toBe(4);
});

test("5 + 100 = 105", () => {
  const resultadoSoma = calculadora.somar(5, 100);
  expect(resultadoSoma).toBe(105);
});

test("string + number", () => {
  const resultadoSoma = calculadora.somar("banana", 100);
  expect(resultadoSoma).toBe("Error");
});
