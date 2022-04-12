const img = document.querySelector('img');

function callback(event) { 
    console.log(event)
}

//img.addEventListener('click', callback)

const animaisLista = document.querySelector('.animais-lista'); //1º

function callbackLista(event) { //3º
    console.log(event.currentTarget); //aparece a lista de imagens
    console.log(event.target); //exatamente onde eu cliquei
    console.log(event.type); //aparece "click" no console
    console.log(event.path); //mostra o caminho
}

//animaisLista.addEventListener('click', callbackLista); //2º

//event.preventDefault()

const linkExterno = document.querySelector('a[href^="http"]');

function handleLinkExterno(event) { //acontece o evento, mas previne o padrão que é clicar, aparecer 'Click' e enviar para o site
    event.preventDefault();
    //console.log(event); 
    //console.log(this); o this está se referenciando ao linkExterno, então quando eu clico no DEV aparece o link no console
    console.log(this.getAttribute('href')); //eu posso colocar métodos e propriedades. Aqui estou retornando só o href
}

linkExterno.addEventListener('click', handleLinkExterno);

//outra

const h1 = document.querySelector('h1'); //1º

function handleEvent(event) { //3º
    console.log(event.type, event);
} //type é o tipo de evento que está ocorrendo e o event é o objeto

//h1.addEventListener('click', handleEvent); //2º
//h1.addEventListener('mouseenter', handleEvent); //só de passar o mouse por cima, já ocorre o evento

//window.addEventListener('scroll', handleEvent);
//window.addEventListener('resize', handleEvent);
//window.addEventListener('keydown', handleEvent); //quando eu teclo algo no teclado



function handleKeyboard(event) {
    if(event.key === 'f') {
        document.body.classList.toggle('fullscreen'); //se eu apertar o f no navegador e olhar o html, ele alterna entre colocar e tirar a class fullscreen
    }
  }
  
  window.addEventListener('keydown', handleKeyboard);

  //mudar o fundo da pg
  //precisei adicionar no css a class .azul
  //é necessário tirar um para colcar o outro

  function handleKeyboard(event) {
    if(event.key === 'a') 
        document.body.classList.toggle('azul'); //
    else if(event.key === 'p') 
        document.body.classList.toggle('purple');
  }
  
  window.addEventListener('keydown', handleKeyboard);

  //forEach e Eventos 2
  //para cada clique que eu dou na imagem, aparece o src dela
const imgs = document.querySelectorAll('img');

function handleImg(event) {
    console.log(event.target.getAttribute('src'));
}

imgs.forEach((img)=>{
    img.addEventListener('click', handleImg);
});



