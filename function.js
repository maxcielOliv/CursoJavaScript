/*function criaMultiplicador(multiplicador) {
    return function(n) {
        return n * multiplicador;
    };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));


function rand(min = 1000, max = 3000){
    const num = Math.random() * (max - min) + min;
    return num;
}

function f1(callback) {
    setTimeout(function(){
        console.log('f1');
        if (callback) callback();
    }, rand());
}

function f2(callback) {
    setTimeout(function(){
        console.log('f2');
        if (callback) callback();
    }, rand());
}

function f3(callback) {
    setTimeout(function(){
        console.log('f3');
        if (callback) callback();
    }, rand());
}

f1(fiCallback);

function fiCallback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    console.log('Olá mundo');
}


//IIFE

(function(){
    const nome = 'max';
    console.log(nome);
})();

const nome = 'Qualquer coisa';*/

//factory function
function criaPessoa(nome, sobrenome, a, b) {
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },
        set nomeCompleto(valor){

        },
        fala(assunto) {
            return `${this.nome} está ${assunto}.`;
        },
        altura: a,
        peso: b,
        get imc(){
            const indice = this.peso / (this.altura ** 2);
            return indice.toFixed(2);
        },
    };
}

const p1 = criaPessoa('maxciel', 'oliveira', 1.75, 66);
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.imc);
console.log(p1.nomeCompleto);