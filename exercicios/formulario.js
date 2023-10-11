function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    form.addEventListener('submit', (evento)=> {
        evento.preventDefault();
        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;
        
        resultado.innerHTML += nome + ' ';
        resultado.innerHTML += sobrenome + ' ';
        resultado.innerHTML += peso +  ' ';
        resultado.innerHTML += altura + ' <p></p>';

        let valores = {
            nome: nome,
            sobrenome: sobrenome,
            peso: peso,
            altura: altura
        }

        pessoas.push(valores);
        console.log(pessoas)
    });

}

meuEscopo();