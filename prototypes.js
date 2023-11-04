function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function () {
    return this.nome + ' ' + this.sobrenome;
}

const p1 = new Pessoa('Max', 'Oliveira');
//console.log(p1.nomeCompleto());

const objA = {
    chaveA: 'A'
};

const objB = {
    chaveB: 'B'
};

Object.setPrototypeOf(objB, objA);
//console.log(objB.chaveA);

Object.getPrototypeOf(objA);

function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100));
}

Produto.prototype.acrescimo = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100));
}


const pro1 = new Produto('Camiseta', 50);
pro1.desconto(10);
pro1.acrescimo(10);
console.log(pro1);
