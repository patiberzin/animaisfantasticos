//Exercícios
//1º Adicione a classe ativa a todos os itens do menu
//2° Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
//3° Verifique se as imagens possuem o atributo alt
//4º Modifique o href do link externo no menu

//1º
const classAtiva = document.querySelectorAll('.menu a');

/*classAtiva.forEach(function(item){
    item.classList.add('ativa');
    console.log(item);
});*/

//2º
classAtiva.forEach(function(item){
    item.classList.remove('ativo');
    console.log(item);
});

classAtiva[0].classList.add('ativo'); //aqui eu falo especificamente com o primeiro

//3º
const img = document.querySelectorAll('img');

img.forEach(function(element){
    const possuiElemento = element.hasAttribute('alt'); //retorna true ou false
    console.log(possuiElemento);
});

//4º
const link = document.querySelector('a[href^="http"]');
link.setAttribute('href', 'https://www.facebook.com');
console.log(link);











