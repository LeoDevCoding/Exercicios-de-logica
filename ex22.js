//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
 
function calcularArea(altura, largura){
    return altura * largura;
    
}
let altura = 1.80;
let largura = 2.00;
let resultado = calcularArea(altura, largura);
console.log(resultado);

/*function calcularAreaPerimetroSalaRetangular(altura, largura) {
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);
    
    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perímetro da sala: ${perimetro} metros`);
  }
  
  // Exemplo de uso
  let altura = 1.80; // em metros
  let largura = 2.00; // em metros
  calcularAreaPerimetroSalaRetangular(altura, largura);*/