const { sumArray, countWords, findMax, isDivisible } = require('../functions');

describe('sumArray', () => {
  test('debe sumar un arreglo de números positivos', () => {
    expect(sumArray([1, 2, 3, 4])).toBe(10);
  });

  test('debe sumar un arreglo de números negativos', () => {
    expect(sumArray([-1, -2, -3])).toBe(-6);
  });

  test('debe retornar 0 para un arreglo vacío', () => {
    expect(sumArray([])).toBe(0);
  });

  test('debe sumar correctamente cuando incluye 0', () => {
    expect(sumArray([0, 5, 10])).toBe(15);
  });
});

describe('countWords', () => {
  test('debe contar palabras en una cadena normal', () => {
    expect(countWords('Hola mundo esto es una prueba')).toBe(6);
  });

  test('debe ignorar espacios al inicio y final', () => {
    expect(countWords('  Hola mundo  ')).toBe(2);
  });

  test('debe retornar 0 para una cadena vacía', () => {
    expect(countWords('')).toBe(0);
  });

  test('debe manejar espacios consecutivos entre palabras', () => {
    expect(countWords('Hola   mundo   prueba')).toBe(3);
  });
});

describe('findMax', () => {
  test('debe retornar el máximo en un arreglo de números positivos', () => {
    expect(findMax([5, 2, 9, 3])).toBe(9);
  });

  test('debe retornar el máximo en un arreglo de números negativos', () => {
    expect(findMax([-10, -4, -20])).toBe(-4);
  });

  test('debe retornar null para un arreglo vacío', () => {
    expect(findMax([])).toBeNull();
  });

  test('debe retornar el mismo número cuando todos son iguales', () => {
    expect(findMax([7, 7, 7, 7])).toBe(7);
  });
});

describe('isDivisible', () => {
  test('debe devolver true para números divisibles', () => {
    expect(isDivisible(10, 2)).toBe(true);
  });

  test('debe devolver false para números no divisibles', () => {
    expect(isDivisible(10, 3)).toBe(false);
  });

  test('debe devolver un mensaje cuando el divisor es cero', () => {
    expect(isDivisible(10, 0)).toBe('No se puede dividir entre cero');
  });

  test('debe funcionar con números negativos', () => {
    expect(isDivisible(-10, 2)).toBe(true);
    expect(isDivisible(-10, 3)).toBe(false);
  });
});
