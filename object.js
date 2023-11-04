const produto = {nome: 'Produto', preco: 1.80, material: 'Borracha'};

//console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

for (let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor);
}