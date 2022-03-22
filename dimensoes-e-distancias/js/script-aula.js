const listaAnimais = document.querySelector('.animais-lista');

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop; //distância entre o topo do elemento e o topo da pg
console.log(animaisTop);

const primeiroh2 = document.querySelector('h2');
const h2Left = primeiroh2.offsetLeft; //distância entre o canto esquerdo do elemento e o canto esquerdo da pg

const h2rect = primeiroh2.getBoundingClientRect();

console.log(h2rect.top); //rect.top é o mesmo que offsetTop

if(h2rect.top < 0) {
    console.log('Passou do elemento');
}

//rect.height; //height do elemento
//rect.width; //width do elemento
//rect.top; //distancia entre o topo do elemento e o scroll

console.log(
    window.innerWidth, //width da janela
    window.outerWidth, //soma dev tools também
    window.innerHeight, //height da janela
    window.outerHeight, //soma a barra de endereço também
    window.pageYOffset, //distância total do scroll horizontal
    window.pageXOffset, //distância total do scroll vertical
);

/*element.clientWidth, Mede a largura interna de um elemento, em px
element.clientHeight, Mede a altura interna de um elemento, em px
element.getBoundingClientRect, Retorna o tamanho do elemento e sua posição relativa ao viewport*/

const small = window.matchMedia('(max-width: 600px)').matches; 
//matches retorna true ou false

if(small) {
    console.log('Usuário mobile');
} else {
    console.log('Usuário desktop');
}





