function Produto(nome, preco, estoque) {

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra chave
        configurable: false, //configurável
        get: function (){
            return estoquePrivado;
        },
        set: function (valor){
            if(typeof valor !== 'number'){
                console.log('Bad value');
                return;
            }
            estoquePrivado = valor;
        }
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, //mostra chave
            value: nome, //valor
            writable: true, //pode alterar
            configurable: false //configurável
        },
        preco: {
            enumerable: true, //mostra chave
            value: preco, //valor
            writable: true, //pode alterar
            configurable: true //configurável
        }
    });
}

const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 5000;
console.log(p1);
console.log(p1.estoque);