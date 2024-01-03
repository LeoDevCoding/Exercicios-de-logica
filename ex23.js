//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

/*function calcularAreaPerimetroCircular(raio){
    let pi = 3.14;
    let area = (raio * raio);
    let perimetro = 2 * (pi * raio);

    console.log(`A area circular da sala é: ${area}`);
    console.log(`O perimetro da sala é: ${perimetro}`);
}
let raio = 3.14;
calcularAreaPerimetroCircular(raio.toFixed(2));*/

function calcularAreaPerimetroSalaCircular(raio) {
  let area = Math.PI * raio * raio;
  let perimetro = 2 * Math.PI * raio;
  
  console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
  console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
}

// Exemplo de uso
let raio = 4; // em metros
calcularAreaPerimetroSalaCircular(raio);