//EXERCICIOS

//1º Retorne no console todas as imagens do site
//2º Retorne no console apenas as imagens que começaram com a palavra imagem
//3º Selecione todos os links internos (onde o href começa com #)
//4º Selecione o primeiro h2 dentro de .animais-descricao
//5º Selecione o último p do site

//1º
const allImg = document.querySelectorAll('img');
console.log(allImg);

//2º
const imagensAnimais = document.querySelectorAll('img[src^="../img/imagem"]'); //se eu quero que só comece com, eu coloco ^
console.log(imagensAnimais);

//3º
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos);

//4º
const firstH2 = document.querySelector('.animais-descricao h2');
console.log(firstH2);

//poderia fazer de outra forma, verificando dentro dela o h2:

const animais = document.querySelector('.animais-descricao');
const h2Animais = document.querySelector('h2');

console.log(animais);
console.log(h2Animais);

//5º tem a ver com o pop
const todosOsPs = document.querySelectorAll('p');
console.log(todosOsPs[todosOsPs.length - 1]); //conta quantos Ps existem e diminui 1, retornando o último
