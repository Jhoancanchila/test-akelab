export const getFibonacciSecuence = (numero) => {
  let numeros = [1, 1];
  for (let i = 2; i < numero; i++) {
    numeros[i] = numeros[i - 2] + numeros[i - 1];
  }
  return numeros;
}