const pessoa = {
    nome: 'maxciel',
    sobrenome: 'oliveira',
    idade: 26,
    endereco: {
        rua: 'Princesa isabel',
        numero: 777
    }
};

const {nome: n, endereco: { rua, numero}, ...resto} = pessoa;
console.log(n, rua, numero, resto);
