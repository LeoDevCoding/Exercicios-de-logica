//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

function tabuada(numero){
    
    for(let i = 0; i <= 10; i++){
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}`)
    }
}
let numero = 10;
tabuada(numero);