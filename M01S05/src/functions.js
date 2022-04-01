export function data() {
    const data = new Date();
    return console.log((data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds()));

}

function helloWord(valor){
    return window.alert(valor)
}


export function sleep ( valor ) {
    return new Promise ( (res, rej) => { 
       setTimeout(helloWord,5000, valor)
    })
  }