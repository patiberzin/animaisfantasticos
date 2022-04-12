/*const h1 = document.querySelector('h1');
const animaisLista = document.querySelector('.animais-lista');
console.log(h1.innerHTML);
console.log(h1.outerHTML);

h1.innerHTML = '<p>Novo Título</p>' //alterou o h1 p/ novo titulo
//console.log(animaisLista.innerHTML);

const lista = document.querySelector('.animais-lista');

console.log(lista.children[--lista.children.length]);
console.log(lista.querySelector('li:last-child'));

console.log(lista.previousSibling);

const animais = document.querySelector('.animais');
const contato = document.querySelector('.contato');
const titulo = contato.querySelector('.titulo'); //escrevendo titulo no console, vejo o titulo

const mapa = document.querySelector('.mapa');

//contato.removeChild(titulo); titulo contato foi removido
contato.replaceChild(mapa, titulo); //substituir o titulo por mapa


//Eu quero mover o meu titulo de contato para cima da lista
//primeiro falo com quem eu quero mover: lista
//.appendChild método que leva o elemento que eu quero mover. Coloca o elemento como último filho da lista.

//inserir a seção animais entre a section contato (pai) e o titulo (h1)

//contato.insertBefore(animais, mapa); //troquei titulo para mapa, ele vai inserir antes do mapa.

//a seção animais foi inserida antes do titulo contato

const novoh1 = document.createElement('h1');

novoh1.innerText = 'Novo Título'; //colocando um titulo no h1
novoh1.classList.add('titulo');

mapa.appendChild(novoh1); //após o mapa colocar esse novoh1

console.log(novoh1); //está apenas criado*/

//OUTRO
//Vou selecionar o primeiro h1
const h1 = document.querySelector('h1');
//eu quero duplicar o h1 e colocar ele acima de contato
//então seleciono o faq também
const faq = document.querySelector('.faq');
//se eu colocar faq.appendChild(h1) vc vai mover o h1
//agora para eu clonar, eu posso:
const cloneH1 = h1.cloneNode(true);

cloneH1.classList.add('azul'); //adicionou azul ao h1 clone
faq.appendChild(cloneH1);

