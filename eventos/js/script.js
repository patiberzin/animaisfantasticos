//EXERCÍCIOS

// Quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma. Previna o comportamento padrão desses links


const linksInternos = document.querySelectorAll('a[href^="#"]'); //link interno começa com #

function handleLink(event) {
    event.preventDefault();
    linksInternos.forEach((link) => { //para remover de todos os itens
        link.classList.remove('ativo'); //fiz isso só que dentro do if e else
    });
    event.currentTarget.classList.add('ativo'); //fiz isso só que dentro do if e else
}

linksInternos.forEach((link) => {
    link.addEventListner('click', handleLink);
});

// Selecione todos os elementos do site começando a partir do body, ao clique mostre exatamente quais elementos estão sendo clicados
//como eu quero falar com cada um, tem que ser o forEach


//O QUE EU ENTENDO DISSO?
//selecionar todos os elementos do site, começando do body: const querySectorAll(body *)
//evento = clique: .addEventListner('click')
//depois do evento, mostrar os elementos que estão sendo clicados: forEach(element)
//console.log(element.currentTarget)


const allElements = document.querySelectorAll('body *'); //asterisco seleciona todos os elementos

function handleElemento(event) {
    console.log(event.currentTarget);
}

allElements.forEach((elemento) => {
    elemento.addEventListener('click', handleElemento);
});


// Utilizando o código anterior, ao invés de mostrar no console, remova o elemento que está sendo clicado, o método remove() remove um elemento

const allElements = document.querySelectorAll('body *'); 

function handleElemento(event) {
    event.currentTarget.remove(); //quando eu for clicando nos itens ele vai removendo-os
}

allElements.forEach((elemento) => {
    elemento.addEventListener('click', handleElemento);
});*/


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function clickT(event) { //2º
    if(event.key === 't') {
        document.documentElement.classList.toggle('textomaior');
    } 
}

window.addEventListener('keydown', clickT); //1º


