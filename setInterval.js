function mostrarHora() {
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(function(){
    console.log(mostrarHora());
}, 1000);

setTimeout(() => {
   clearInterval(timer); 
}, 3000);

setTimeout(()=> {
    console.log('Olá mundo!!');
}, 5000);
