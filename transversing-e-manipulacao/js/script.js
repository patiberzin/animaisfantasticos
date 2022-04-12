//EXERCICIOS

// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copy = document.querySelector('.copy');
const clone = menu.cloneNode(true);

copy.appendChild(clone);


// Selecione o primeiro DT da dl de Faq
const primeiroDt = document.querySelector('.faq-lista dt');
console.log(primeiroDt);

//ele fez assim: 
//const faq = document.querySelector('.faq');
//const primeiroDt = faq.querySelector('dt');
//console.log(primeiroDt);

// Selecione o DD referente ao primeiro DT
const dd = document.querySelector('.faq-lista dt');
const ddDt = dd.nextElementSibling;

console.log(ddDt);

//ele fez assim: 
//const faq = document.querySelector('.faq');
//const primeiroDt = faq.querySelector('dt');
//const proximoDd = primeiroDt.nextElementSibling;
//console.log(proximoDd);
//para saber se é ela, posso colocar o .remove() dentro do console.log

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais');
const contato = document.querySelector('.contato');
const faq = contato.querySelector('.faq');

contato.insertBefore(animais, faq);

//ele fez assim:
//const animais = document.querySelector('.animais');
//faq.innerHTML = animais.innerHTML;
//assim, ele muda faq por todo aquele conteúdo

