//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

function calculaImc(peso, altura){
    return  peso / (altura * altura);
}
let peso = 70
let altura = 1.80
let resultado = calculaImc(peso, altura)
console.log(`O seu IMC é: ${resultado.toFixed(2)}`);