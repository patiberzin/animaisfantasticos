//EXERCICIOS

//1º Verifique a distância da primeira imagem em relação ao topo da página

const img = document.querySelector('img');
const imagemTop = img.offsetTop;
console.log(imagemTop);

//2º Retorne a soma da largura de todas as imagens

function somaImagens() {
    const imagens = document.querySelectorAll('img');
    let soma = 0;
    imagens.forEach((imagem) => { //1º ocorre o loop e ele soma 0 + imagem.offsetWidth. Vai ser o tamanho do primeiro + o tamanho do segundo.
        soma += imagem.offsetWidth
    });
    console.log(soma);
}

window.onload = function() { //sempre que recarregar a pg, vai somar
    somaImagens();
};

//img.forEach(()=>{});

//3º Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google)
//Toda vez que eu quiser verificar cada item, uso o forEach

const links = document.querySelectorAll('a');
links.forEach((link)=>{
    const linkWidth = link.offsetWidth;
    const linkHeight = link.offsetHeight;
    if(linkWidth >= 48 && linkHeight >= 48) { //verificar se é maior ou não
        console.log(link, 'Possui boa acessibilidade')
    } else {
        console.log(link, 'Não possui boa acessibilidade')
    }
});

//4º Se o browser for menor que 720px, adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia('(max-width: 720px)').matches;

if (browserSmall < 720) {
    const menu = document.querySelector('.menu');
    menu.classList.add('menu-mobile');
    console.log(menu);
}


