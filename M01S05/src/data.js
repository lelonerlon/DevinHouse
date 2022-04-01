export function data() {
    const data = new Date();
    return console.log((data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds()));

}
