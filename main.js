//console.log('Hello world')
//O significado de API é Interface de Programação de Aplicações. Ela permite que dois componentes de software se comuniquem. Chamamos esses dois lados de cliente e servidor.
async function buscaEndereco(){
    var consultaCep = await fetch('https://viacep.com.br/ws/01001000/json/');
    console.log(consultaCep);
}
console.log(buscaEndereco());