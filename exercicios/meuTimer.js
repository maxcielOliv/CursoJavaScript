function relogio(){

const relogio = document.querySelector('.timer');
let segundos = 0;
let timer;

function hour(segundos) {
    let data = new Date(segundos * 1000);

    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}

function iniciarRelogio() {
    timer = setInterval(() => {
        segundos++;
        relogio.innerHTML = hour(segundos);
    }, 1000);

}

document.addEventListener('click', function (e) {
    const el = e.target;

    if (el.classList.contains('iniciar')) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        iniciarRelogio();
    }
    if (el.classList.contains('pausar')) {
        relogio.classList.add('pausado');
        clearInterval(timer);
    }
    if (el.classList.contains('zerar')) {
        relogio.classList.remove('pausado');
        clearInterval(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    }
});
}

relogio();




