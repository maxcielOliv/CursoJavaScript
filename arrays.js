//let lista = ['ovo', 'farinha', 'leite', 'manteiga'];
//let lista2 = ['pão', 'pizza', 'hambúrguer'];


let lista = [2,9,40,53,26];
let lista2 = [];

//procurar itens na lista
/*lista2 = lista.find(function(item) {
    return (item == 26) ? true : false; 
});*/

//retornar indice
lista2 = lista.findIndex(function(item) {
    return (item == 26) ? true : false; 
});

/*lista2 = lista.filter(function(item){
    return (item < 20) ? true : false; 
});*/

/*lista2 = lista.map(function(item){
    return item * 2;
});

for (let i in lista) {
    lista2.push(lista[i] *2);
}*/

//adiciona itens no array
//lista.push('chocolate');

//remover item do array
//lista.splice(0,1);

//juntar arrays
//let res = lista.concat(lista2);

//remove o primeiro item do array
//lista.shift();

//remove o último item do array
//lista.pop();

let res = lista2;

//transforma array em string
//let res = lista.join(' ');

//ordernar array
//lista.sort();

//decrescente
//lista.reverse();

//console.log(res);

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000];
const [primeiro, segundo, terceiro, ...resto] = numeros;
console.log(primeiro, segundo, terceiro);
console.log(resto);