const inpuTexto = document.querySelector('#texto');
const inserir = document.querySelector('.adicionar');
const tarefas = document.querySelector('.tarefas');


function criaLi() {
    const li = document.createElement('li');
    return li;
}

function criaButao(li) {
    li.innerText += ' ';
    const butao = document.createElement('button');
    butao.innerText = ' Apagar';
    butao.setAttribute('class', 'apagar');
    li.appendChild(butao);
}

function limpaInput(){
    inpuTexto.value = '';
    inpuTexto.focus();
}

function criaTarefa(textoInput) {
    const li = criaLi();
    li.innerHTML = textoInput;
    tarefas.appendChild(li);
    limpaInput();
    criaButao(li);
    salvarTarefas();
}

inserir.addEventListener('click', ()=> {
    if (!inpuTexto.value) return;
    criaTarefa(inpuTexto.value);
});

document.addEventListener('click', (e)=> {
    const el = e.target;
    if (el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefas();

    }
});

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li');
    const listaTarefas = [];
    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaTarefas.push(tarefaTexto);
    }

    const tarefasJson = JSON.stringify(listaTarefas);
    localStorage.setItem('tarefas', tarefasJson);
}

function adicionaTarefaSalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa);
    }
}

adicionaTarefaSalvas();