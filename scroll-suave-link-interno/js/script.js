function initTabNav() {
    const tabMenu = document.querySelectorAll('.js-tabmenu li');
    const tabContent = document.querySelectorAll('.js-tabcontent section');

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add('ativo');

        function activeTab(index) {
            tabContent.forEach((content) => {
                content.classList.remove('ativo');
            });
            tabContent[index].classList.add('ativo');
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener('click', () => {
                activeTab(index);
            });
        });
    }
}

initTabNav(); //Essa função inicia todo o código de cima, passo ela aqui para ativar.

/////////////////////


function initAccordion() {

    const accordionList = document.querySelectorAll('.js-accordion dt'); //1º
    const activeClass = 'ativo';


    if (accordionList.length) { //5º

        accordionList[0].classList.add(activeClass); //4º 
        accordionList[0].nextElementSibling.classList.add(activeClass); //4º seleciona o dd

        function activeAccordion() { //3º
            this.classList.toggle(activeClass); //5º

            this.nextElementSibling.classList.toggle(activeClass); //4° 

        }

        accordionList.forEach((item) => { //2º
            item.addEventListener('click', activeAccordion);
        });
    }

}
initAccordion();

/////////////////////

function initSrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]'); //1º

    function scrollToSection(event) { //3º
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        /* forma alternativa
        const topo = section.offsetTop;

        window.scrollTo({
            top: topo,
            behavior: "smooth",
        });*/
    }


    linksInternos.forEach((link) => { //2º
        link.addEventListener('click', scrollToSection);
    });
}
initSrollSuave();