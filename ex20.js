//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

/*let numero = 3;
let antecessor1 = numero-1;
let antecessor2 = numero-2;

function calcularFatorial() {
    let fatorial = numero*antecessor1*antecessor2;
    console.log(fatorial);
}
calcularFatorial();*/


/*function calculeFatorial(numero){
    if(numero === 0 || numero === 1){
        return 1;
    }

    let fatorial = 1;
    for(let i = 0; i <= 5; i--){
        fatorial *= 1;
    }
    return resultado
}

let numero = 5;
let resultado = calculeFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);*/

function calcularFatorial(numero) {
    let resultado = 1;

    for (var i = 1; i <= numero; i++) {
        resultado *= i;
    }

    return resultado;
}


let resultadoFatorial = calcularFatorial(7);
console.log("O fatorial é:", resultadoFatorial);

