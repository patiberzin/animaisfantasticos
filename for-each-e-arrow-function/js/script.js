//EXERCICIOS

//1º Mostre no console cada parágrafo do site

const p = document.querySelectorAll('p');
console.log(p);

p.forEach((item) => {
    console.log(item);
});

//2º Mostre o texto dos parágrafos no console
const textosPs = document.querySelectorAll('p');
const pArray = Array.from(textosPs);

pArray.forEach((item) => {
    console.log(item.innerText); //para mostrar só os textos
});

//3º Como corrigir os erros abaixo:

const imgs = document.querySelectorAll('img');

imgs.forEach((item, index) => { //estava sem os parênteses. Multiplos argumentos precisam de parênteses.
    console.log(item, index);
});

let i = 0;
imgs.forEach(() => { //como não tem argumento, faltam parênteses
    console.log(i++);
});

imgs.forEach(() => i++);//pegadinha, não tem erro






