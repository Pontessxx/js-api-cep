//console.log('Hello world')
//O significado de API é Interface de Programação de Aplicações. Ela permite que dois componentes de software se comuniquem. Chamamos esses dois lados de cliente e servidor.
async function buscaEndereco(){
    try {
    var consultaCep = await fetch('https://viacep.com.br/ws/01001000/json/');
    var consultaCepConvertida = await consultaCep.json();
    if (consultaCepConvertida.erro){
        throw Error('Cep não existente!')
    }
    console.log(consultaCepConvertida);
    }catch (erro){
        console.log(erro)
    }
}
console.log(buscaEndereco());