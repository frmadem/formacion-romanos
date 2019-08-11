const simbolos = ["I", "V", "X", "L", "C", "D", "M"]

const unidades = [1, 5, 10, 50, 100, 500, 1000, 5000]


function conversor(numero){

    if(numero > 3999){

        throw `Numero ${numero} excede la capacidad del conversor`
    }

    /*
     * Tenemos que descomponer el número en potencias de 10
     *  1
     *  10
     *  100
     *  1000
     *
     */
    const partes = __descomponerNumero(numero);

    let salida = "";

    for(let i = partes.length - 1; i >= 0; i--)
        salida += __traducirNumero(partes[i], i * 2);

    return salida;
}

function __descomponerNumero(numero){

    const partes = [];

    let multiplo = 1;

    let divisor = 10;

    while(numero > 0){

        partes.push( (numero % divisor ) * multiplo )

        numero = Math.floor( numero / divisor )

        multiplo = multiplo * 10

    }
 
    return partes
}

/* 
 * Entra un factor y su exponente (realmente su potencia de 10)
 */
function __traducirNumero(numero, exp){

    const max = unidades[exp + 2]
    const medio = unidades[exp + 1]
    const min = unidades[exp]

    let salida;

    if(numero === 0){ // un cero no se devuelve nada: cadena vacía

        salida = ""
    }
    else if(numero === min || numero === medio || numero === max){ //es una traducción directa

        salida = simbolos[ unidades.indexOf(numero)  ]
    }
    else if(numero < medio){

        if(numero + min != medio){ //es cumulativo

            salida = "";

            let acumulador = numero

            while(acumulador > 0){

                salida = salida + __traducirNumero(min, exp)

                acumulador = acumulador - min

            }

        }
        else{ // es inversor

            salida = simbolos[unidades.indexOf(min)] + simbolos[unidades.indexOf(medio)]
        }

    }
    else{

        if(numero + min != max){ //es cumulativo

            salida = __traducirNumero(medio, exp)

            let acumulador = numero

            while(acumulador > medio){

                salida = salida + __traducirNumero(min, exp);

                acumulador = acumulador - min
            }
        }
        else{ // es inversor

            salida = simbolos[unidades.indexOf(min)] + simbolos[unidades.indexOf(max)]
        }
    }

    return salida;
}


module.exports = conversor;
