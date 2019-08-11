const valores = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const simbolos = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

function convierteRomanos (numero) {
  let expresion = '';
  while (numero > 0) {
  for (i = 0; i <= valores.length - 1; i++) {
    if (numero >= valores[i]) {
      expresion += simbolos[i];
      numero -= valores[i];
      valores[i--]
    }
  }
}
 return expresion;
}

module.exports = convierteRomanos;
