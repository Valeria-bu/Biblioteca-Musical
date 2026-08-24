function sumArray(numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

function countWords(text) {
  if (!text || text.trim() === '') {
    return 0;
  }

  return text.trim().split(/\s+/).length;
}

function findMax(numbers) {
  if (numbers.length === 0) return null;

  return Math.max(...numbers);
}

function isDivisible(num, divisor) {
  if (divisor === 0) {
    return 'No se puede dividir entre cero';
  }

  return num % divisor === 0;
}

module.exports = {
  sumArray,
  countWords,
  findMax,
  isDivisible
};
