const animais = document.getElementById('animais');
console.log(animais);

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection[0]);

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);
/*video parei em 10:45*/

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg);

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section');

//console.log(gridSectionHTML[0]);
//console.log(gridSectionNode[0]);

gridSectionNode.forEach(function(item, index){
    console.log(index); /*ou posso chamar o item tbm*/
});

//transformar tudo que é array-like em array
const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach(function(item){
    console.log(item);
});



