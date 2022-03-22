//classList - retorna uma lista com as classes dos elementos. Permite remover, adicionar e verificar se contém classes.

const menu = document.querySelector('.menu');
console.log(menu.classList); //mostra as classes que tem
//se for uma array-like, posso acessar a primeira assim: classList[0]

menu.classList.add('ativo','azul'); //ele adiciona a class ativo e azul
menu.classList.remove('azul');//ele remove a classe azul
menu.classList.toggle('azul');//ele adiciona azul. Se eu colocar mais um toggle embaixo, ele remove o azul.
menu.classList.toggle('azul');

if(menu.classList.contains('azul')) { //se contiver azul, adicione possui-azul
    menu.classList.add('possui-azul');
} else {
    menu.classList.add('nao-possui-azul');
}

//className - adiciona e sobrescreve, definindo o valor do atributo.

menu.className += ' vermelho' //assim a classe é renomeada para não-possui-azul vermelho (concatenação)
console.log(menu.className);

//attributes

const animais = document.querySelector('.animais');
console.log(animais.attributes[0]);//se eu colocar attributes.class ele vai retornar a classe direto

const img = document.querySelector('img');
const srcImg = img.getAttribute('alt');

img.setAttribute('alt', 'É uma raposa');
const possuiAlt = img.hasAttribute('alt', 'É uma raposa');
console.log(possuiAlt);

console.log(srcImg);









