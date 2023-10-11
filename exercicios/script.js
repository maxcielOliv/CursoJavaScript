let numero = Number(prompt('Digite um número'));
let numeroTitulo = document.querySelector('#numero-titulo');
let texto = document.querySelector('#texto');

numeroTitulo.innerHTML = numero;
texto.innerHTML += `Raiz quadrada: ${Math.sqrt(numero)} <br/>`;
texto.innerHTML += `é inteiro: ${Number.isInteger(numero)} <br/>`;
texto.innerHTML += `é NaN: ${Number.isNaN(numero)} <br/>`;
texto.innerHTML += `arredondado para baixo: ${Math.floor(numero)} <br/>`;
texto.innerHTML += `arredondado para cima: ${Math.ceil(numero)} <br/>`;
texto.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)} <br/>`;