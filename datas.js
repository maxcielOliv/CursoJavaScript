//let d = new Date(2023,9,5,21,45);
//console.log(d.toString());
//console.log(d.toDateString());
//console.log(d.toUTCString());
const data = new Date('2023-10-10 17:05:30.100');
//console.log(data.toString());
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth());
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('minuto', data.getMinutes());
console.log('segundos', data.getSeconds());
console.log('Milisegundos', data.getMilliseconds());
console.log('Dia semana', data.getDay()); //0- domingo, 6- sábado
console.log(Date.now());


