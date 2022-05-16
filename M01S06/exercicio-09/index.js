function addTags() {
    const firtDiv = document.querySelector('div');
    const titleTag = document.createElement('h1');
    const ul = document.createElement('ul');


    titleTag.textContent = 'Titulo';
    firtDiv.appendChild(titleTag);

    for (var i = 0; i <= 1;) {
        const p = document.createElement('p');
        if (i == 0) {
            p.textContent = "subtítulo";
        } else
            if (i == 1) {
                p.textContent = "Lista de afazeres";
                p.id = 'descricao';

            }
        i++;

        firtDiv.appendChild(p);
    }

    firtDiv.appendChild(ul)

    const list = document.getElementsByTagName(ul)

    for (var i = 1; i <= 4;){
        const li = document.createElement('li');
        // li.classList.add('itens');
        li.textContent = 'Ex'+ i; 
        i++;
        ul.appendChild(li);
    }

}