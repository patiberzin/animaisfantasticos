//primeiro eu quero selecionar as imagens do site

const imgs = document.querySelectorAll('img');
console.log(imgs); //aparece uma NodeList com 7 itens

//para interagir nessa lista
imgs.forEach(function(img, index, array){ //img pode ser qualquer nome. Ele dará o loop em cada item, ou em cada img.
    //index - é a posição do item na array
    //console.log(img, index, array);
});

//para transformar em array
const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

console.log(titulos); //aparece HTML Collection no console
console.log(titulosArray); //aparece a array transformada

titulosArray.forEach(function(item, index, array){
    //console.log(item, index, array);
});

//Arrow Function
const arrowFunction = document.querySelectorAll('img');

arrowFunction.forEach((item) => {
    console.log(item);
});


