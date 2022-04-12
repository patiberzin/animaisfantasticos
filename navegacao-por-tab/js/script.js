const tabMenu = document.querySelectorAll('.js-tabmenu li'); //selecionei a lista do menu de img
const tabContent = document.querySelectorAll('.js-tabcontent section');// selecionei a lista do conteúdo

function activeTab(index) { //função para ativar a tab pelo index
    tabContent.forEach((content) => { //para cada conteúdo
        content.classList.remove('ativo'); //conteúdo chama a class list e remove ativo
    });
    tabContent[index].classList.add('ativo'); //pegue o index do conteúdo, chama a class list e adiciona ativo
}

tabMenu.forEach((itemMenu, index) => { //Estou fazendo um loop para cada li. primeiro: item no momento do loop segundo: index. Vai ser o mesmo que eu quero ativar.
    itemMenu.addEventListener('click', () => { //em cada item eu adiciono um evento de clique
        activeTab(index); //a partir do evento de clicar ou não clicar, ele vai executar a função
    });
});




