const btnInverse = document.getElementById("inverse");

btnInverse.addEventListener("click", function () {
    const element = document.querySelectorAll('li')
    element.forEach((linha) => {
        const el = document.createElement('li')
        if (el == 'li.azul')
            console.log(azul)
    })

    console.log(element)

});
