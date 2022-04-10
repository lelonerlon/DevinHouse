function inverse() {
    const list = document.querySelectorAll('li')
    for (let i = 0; i < list.length; i++) {
        if (list[i].className == 'azul') {
            list[i].classList.remove('azul');
            list[i].classList.add('vermelho');
        }
        else {
            list[i].classList.remove('vermelho');
            list[i].classList.add('azul');
        }

    }

}