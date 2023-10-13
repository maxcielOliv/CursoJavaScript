const elementos = [
    {tag: 'p', texto: 'frase 1'},
    {tag: 'div', texto: 'frase 2'},
    {tag: 'footer', texto: 'frase 3'},
    {tag: 'section', texto: 'frase 4'},
]

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
    const { tag, texto } = elementos[i];
    let tags = document.createElement(tag);
    tags.innerHTML += texto;
    div.appendChild(tags);
}

container.appendChild(div);