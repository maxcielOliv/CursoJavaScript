function getDiaSemanaTexto(diaSemana) {
    let diaSemanaTexto;
    switch (diaSemana) {
        case 0:
            diaSemanaTexto = 'Domingo';
            break;
        case 1:
            diaSemanaTexto = 'Segunda-feira';
            break;
        case 2:
            diaSemanaTexto = 'Terça-feira';
            break;
        case 3:
            diaSemanaTexto = 'Quarta-feira';
            break;
        case 4:
            diaSemanaTexto = 'Quinta-feira';
            break;
        case 5:
            diaSemanaTexto = 'Sexta-feira';
            break;
        case 6:
            diaSemanaTexto = 'Sábado';
            break;
        default: diaSemanaTexto = '';
    }

    return diaSemanaTexto;
}

function getMesTexto(mes) {
    let mesTexto;
    switch (mes) {
        case 0:
            mesTexto = 'Janeiro';
            break;
        case 1:
            mesTexto = 'Fevereiro';
            break;
        case 2:
            mesTexto = 'Março';
            break;
        case 3:
            mesTexto = 'Abril';
            break;
        case 4:
            mesTexto = 'Maio';
            break;
        case 5:
            mesTexto = 'Junho';
            break;
        case 6:
            mesTexto = 'Julho';
            break;
        case 7:
            mesTexto = 'Agosto';
            break;
        case 8:
            mesTexto = 'Setembro';
            break;
        case 9:
            mesTexto = 'Outubro';
            break;
        case 10:
            mesTexto = 'Novembro';
            break;
        case 11:
            mesTexto = 'Dezembro';
            break;
        default: mesTexto = '';
    }

    return mesTexto;
}



const escopo = document.querySelector('.container');

const data = new Date();
const dia = data.getDay();
const n = data.getDate();
const m = data.getMonth();
const a = data.getFullYear();
const h = data.getHours();
const min = data.getMinutes();

const conteudo = escopo.querySelector('h1');
conteudo.innerHTML = '';
conteudo.innerHTML += getDiaSemanaTexto(dia);
conteudo.innerHTML += `, ${n} de `;
conteudo.innerHTML += `${getMesTexto(m)} de `;
conteudo.innerHTML += a;
conteudo.innerHTML += ` ${h}:${min}`;


