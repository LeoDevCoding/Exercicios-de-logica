//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$ 4,80.

function converterDolarEmReais(reais, dolar){
    return reais / dolar
}
let reais = 1000
let dolar = 4.86
let resultado = converterDolarEmReais(reais, dolar)
console.log(resultado.toFixed(2))