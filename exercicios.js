const nome = 'Maxciel';
const sobrenome = 'Oliveira';
const idade = 26;
const peso = 66;
const altura = 1.75;
let icm = peso / (altura * altura);
let anoNascimento = 2023 - idade;

/*console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg
 tem ${altura} de altura e seu icm é de ${icm.toFixed(2)}`);
 console.log(anoNascimento);*/

 let varA = 'A'; //B
 let varB = 'B'; //C
 let varC = 'C'; //A

varA = varB;
varB = varC;
varC = varA;

 let i = varA.replace(varA, varB);
 let j = varB.replace(varB, varC);
 let h = varC.replace(varC, varA);

 console.log(varA, varB, varC);