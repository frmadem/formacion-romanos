
const conversor = require("./lib/conversor.js");

//recogemos el número de la linea de comandos
let numero = process.argv[2];

//SIEMPRE va a ser un string lo que venga de la linea de comandos
//afortunadamente se puede pasar a un número mediante Number(<string>)
numero = Number(numero)

if(!numero || !Number.isInteger(numero))
    error(`Pásame un número entero positivo como argumento`);

if(numero > 3000){
    error(`El número ${numero} es demasiado grande para este conversor`);
}

//convertimos el número
const romano = conversor(numero);

console.log(`${numero} => ${romano}`)

function error(mensaje){

    console.log(`${mensaje}`)

    process.exit(1);

}
